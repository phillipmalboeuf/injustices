
import * as cookies from 'browser-cookies'

import Model from './_model'

export default class Session extends Model {
  static endpoint = 'sessions'

  public save(data: any) {
    return super.save(data).then(session => {
      cookies.set('Session-Id', this.attributes._id)
      cookies.set('Session-Secret', this.attributes.secret)
      cookies.set('People-Id', this.attributes.people_id)

      return session
    })
  }

  public destroy() {
    return super.destroy().then(session => {
      cookies.erase('Session-Id')
      cookies.erase('Session-Secret')
      cookies.erase('People-Id')

      return session
    })
  }
}