
import Model from './_model'
import Case from './case'

export default class People extends Model {
  static endpoint = 'people'

  // public cases() {
  //   return (this.constructor as typeof Model).request('GET', `/${this._id}/cases`)
  //     .then(json => json.map((attributes: object)=> (new Case(attributes))))
  // }
}