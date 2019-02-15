
import '../styles/styles.scss'

import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnonymousCredential } from 'mongodb-stitch-core-sdk'

import { Routes } from './routes'
import { client } from './clients/stitch'

ReactDOM.render(<BrowserRouter>
  <Routes />
</BrowserRouter>, document.getElementById('main'))

// client.auth
//   .loginWithCredential(new AnonymousCredential())
//   .then(credential => 
//     ReactDOM.render(<BrowserRouter>
//       <Routes />
//     </BrowserRouter>, document.getElementById('main'))
//   )