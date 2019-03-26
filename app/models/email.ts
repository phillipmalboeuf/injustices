
import Model, { Properties } from './_model'
import { client } from '../clients/stitch'

export default class Email extends Model {
  static collection = 'emails'

  static preprocess(data: any): Promise<Properties> {
    return super.preprocess({
      ...data,
      person_id: client.auth.user.id
    })
  }
}