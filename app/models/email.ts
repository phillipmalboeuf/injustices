
import Model, { Properties } from './_model'
import { client } from '../clients/stitch'

export default class Email extends Model {
  static collection = 'emails'

  static preprocess(data: any): Promise<Properties> {
    mixpanel.people.set({
      '$email': data.email,
      '$created': new Date()
    })

    return Promise.resolve({
      ...data,
      person_id: client.auth.user.id
    })
  }
}