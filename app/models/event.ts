
import Model, { Properties } from './_model'
import { client } from '../clients/stitch'

export default class Event extends Model {
  static collection = 'events'

  static preprocess(data: any): Promise<Properties> {
    return super.preprocess({
      ...data,
      session_id: sessionStorage.getItem('Session-Id'),
      person_id: client.auth.user.id
    })
  }

  static track(label: string, data?: any): void {
    if (!navigator.doNotTrack) { this.insertOne({ label, data }) }
  }
}