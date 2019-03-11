
import { db } from '../clients/stitch'

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

  static preprocess(data: any): Promise<Properties> {
    return Promise.resolve(data)
  }

  static postprocess(data: any): Promise<Properties> {
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

  static async insertOne(properties: Properties): Promise<Properties> {
    return db.collection(this.collection).insertOne(await this.preprocess(properties))
      .then(result => ({ _id: result.insertedId }))
  }

  static async updateOne(filters: Filters, properties: Properties): Promise<Properties> {
    return this.postprocess(await db.collection(this.collection).updateOne(filters, await this.preprocess(properties)))
  }

  static watch(filters: Filters) {
    return db.collection(this.collection).watch(filters ? [{ '$match': filters }] : [])
  }

  static destroy_where(filters: Filters): Promise<{deleted: number}> {
    return db.collection(this.collection).deleteOne(filters)
      .then(result => ({ deleted: result.deletedCount }))
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