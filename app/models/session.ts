
import Model, { Properties } from './_model'
import { client } from '../clients/stitch'

export default class Session extends Model {
  static collection = 'sessions'

  static preprocess(data: any): Promise<Properties> {
    return super.preprocess({
      ...data,
      language: navigator.language,
      platform: client.auth.deviceInfo.platform,
      platform_version: client.auth.deviceInfo.platformVersion,
      referrer: document.referrer,
      person_id: client.auth.user.id
    })
  }

  static start(): void {
    if (!navigator.doNotTrack && !sessionStorage.getItem('Session-Id')) { this.insertOne({}).then(session => sessionStorage.setItem('Session-Id', session._id)) }
  }

  static end(): void {
    if (!navigator.doNotTrack && !sessionStorage.getItem('Session-Id')) { sessionStorage.removeItem('Session-Id') }
  }
}