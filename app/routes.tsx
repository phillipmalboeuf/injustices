import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { Landing } from './routes/landing'

import { Footer } from './components/footer'
import { Header } from './components/header'


export const Routes = ()=> <>
  <Header />
  <Switch>
    <Route exact path='/' component={Landing} />
  </Switch>
  <Footer />
</>