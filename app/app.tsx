


import { render, hydrate } from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnonymousCredential } from 'mongodb-stitch-core-sdk'

import { Routes } from './routes'
import { client } from './clients/stitch'

import Session from './models/session'


console.log('Injustices.wiki')

declare global {
}


const app = <BrowserRouter>
  <Routes />
</BrowserRouter>


client.auth
  .loginWithCredential(new AnonymousCredential())
  .then(credential => {
    Session.start()
  })
  .then(() => 
    process.env.NODE_ENV === 'production'
      ? hydrate(app, document.getElementById('main'))
      : render(app, document.getElementById('main'))
  )