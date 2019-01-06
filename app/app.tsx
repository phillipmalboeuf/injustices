
import '../styles/styles.scss'

import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './routes'
import { client } from './clients/stitch'
import { AnonymousCredential } from 'mongodb-stitch-core-sdk'

client.auth
  .loginWithCredential(new AnonymousCredential())
  .then(credential => 
    ReactDOM.render(<BrowserRouter>
      <Routes />
    </BrowserRouter>, document.getElementById('app'))
  )