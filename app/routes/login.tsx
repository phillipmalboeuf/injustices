
import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button } from '../components/button'
import { Form } from '../components/form'
import { Input } from '../components/input'

import People from '../models/people'
import Session from '../models/session'


interface Props extends RouteComponentProps<any> {
}
interface State {
  session: Session
}

export class Login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      session: new Session()
    }
  }

  componentDidMount() {
  }

  public render() {
    return <div className='hero'>
      <div className='hero__content'>
        <Link className='underline' to={`/`}>Back</Link>
        <Form model={this.state.session} cta='Login'>
          <Input label='Email Address' name='email' />
          <Input label='Password' type='password' name='password' />
        </Form>
      </div>
    </div>
  }
}