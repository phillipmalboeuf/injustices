


import { render, hydrate } from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnonymousCredential } from 'mongodb-stitch-core-sdk'

import { Routes } from './routes'
import { client } from './clients/stitch'


console.log('Injustices.wiki')

declare global {
  const mixpanel: {
    track: (event: string, data?: any) => void,
    identify: (id: string) => void,
    people: {
      set: (data: any) => void
    }
  }
}


const app = <BrowserRouter>
  <Routes />
</BrowserRouter>


client.auth
  .loginWithCredential(new AnonymousCredential())
  .then(credential => mixpanel.identify(credential.id))
  .then(() => 
    process.env.NODE_ENV === 'production'
      ? hydrate(app, document.getElementById('main'))
      : render(app, document.getElementById('main'))
  )