


import { render, hydrate } from 'react-dom'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnonymousCredential } from 'mongodb-stitch-core-sdk'

import { Routes } from './routes'
import { client } from './clients/stitch'


console.log('Injustices.wiki')


const app = <BrowserRouter>
  <Routes />
</BrowserRouter>

process.env.NODE_ENV === 'production'
  ? hydrate(app, document.getElementById('main'))
  : render(app, document.getElementById('main'))

// client.auth
//   .loginWithCredential(new AnonymousCredential())
//   .then(credential => 
//     render(<BrowserRouter>
//       <Routes />
//     </BrowserRouter>, document.getElementById('main'))
//   )