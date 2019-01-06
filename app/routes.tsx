import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { Cases } from './routes/cases'
import { CaseView } from './routes/case'
import { NewCase } from './routes/new_case'
import { PeopleView } from './routes/people'
import { NewPeople } from './routes/new_people'
import { Login } from './routes/login'

export const Routes = ()=> <Switch>
  <Route exact path='/' component={Cases} />
  <Route exact path='/cases/new' component={NewCase} />
  <Route exact path='/cases/:code' component={CaseView} />
  
  <Route exact path='/people/new' component={NewPeople} />
  <Route exact path='/people/:_id' component={PeopleView} />

  <Route exact path='/login' component={Login} />
  <Redirect from='/sessions/:_id' to='/' />
</Switch>