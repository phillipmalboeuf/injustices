import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { Landing } from './routes/landing'

import { Footer } from './components/footer'
import { Header } from './components/header'

import Event from './models/event'


export const Routes = ()=> <>
  <Header />
  <Switch>
    {Event.track('Page View', { pathname: location.pathname, search: location.search })}
    <Route exact path='/' component={Landing} />
  </Switch>
  <Footer />
</>