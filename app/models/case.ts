
import Model from './_model'
import People from './people'

export default class Case extends Model {
  static collection = 'cases'

  public people() {
    // return (this.constructor as typeof Model).request('GET', `/${this._id}/people`)
    //   .then(json => json.map((attributes: object)=> (new People(attributes))))
  }
}