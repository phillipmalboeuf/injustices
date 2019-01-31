
import { db } from '../clients/stitch'
import { ObjectID } from 'bson'

export interface Properties {
  [key: string]: any
}
export interface Filters {
  [key: string]: any
}
export interface Sort {
  [key: string]: number
}

export default class Model {

  static collection: string = 'models'
  static sort: Sort = {}

  static preprocess(data: any): Promise<any> {
    return Promise.resolve(data)
  }

  static postprocess(data: any): Promise<any> {
    return Promise.resolve(data)
  }

  static list(filters: Filters=undefined, limit=50, page=0, sort?: Sort): Promise<Properties[]> {
    return db.collection(this.collection).find(filters, { limit, skip: limit ? page * limit : 0, sort: sort || this.sort }).toArray()
      .then((models: Properties[]) => Promise.all(models.map(model => this.postprocess(model))))
  }

  static one(filters: Filters): Promise<any> {
    return db.collection(this.collection).find(filters)
      .iterator()
      .then(cursor => cursor.next().then((model: Properties)=> this.postprocess(model)))
  }

  // public _id : string
  // public attributes : any

  // constructor(attributes?: any) {
  //   this._id = attributes ? attributes._id : undefined
  //   this.attributes = attributes
  // }

  // protected static request(method: string, endpoint: string, data?: any) {
  //   return fetch(`http://localhost:8889/${this.endpoint}${endpoint}`, {
  //     method: method,
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: data ? JSON.stringify(data) : undefined
  //   }).then(response => response.json())
  // }

  // static list() {
  //   return this.request('GET', '')
  //     .then(json => {
  //       return json.map((model: any)=> new this(model))
  //     })
  // }

  // public fetch() {
  //   return (this.constructor as typeof Model).request('GET', `/${this._id}`)
  //     .then(json => {
  //       this._id = json._id
  //       this.attributes = json
  //       return this
  //     })
  // }

  // public save(data: any) {
  //   return (this.constructor as typeof Model).request(this._id ? 'PUT' : 'POST', `${this._id ? `/${this._id}` : ''}`, data)
  //     .then(json => {
  //       this._id = json._id
  //       this.attributes = json
  //       return this
  //     })
  // }

  // public destroy() {
  //   return (this.constructor as typeof Model).request('DELETE', `/${this._id}`)
  //     .then(json => {
  //       this._id = undefined
  //       this.attributes = {}
  //       return this
  //     })
  // }

}