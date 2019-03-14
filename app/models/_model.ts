
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
}