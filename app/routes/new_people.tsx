
import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { Button } from '../components/button'
import { Form } from '../components/form'
import { Input } from '../components/input'

import People from '../models/people'


interface Props extends RouteComponentProps<any> {
}
interface State {
  people: People
}

export class NewPeople extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      people: new People()
    }
  }

  componentDidMount() {
    
  }

  public render() {
    return <div className='hero'>
      <div className='hero__content'>
        <Link className='underline' to={`/`}>Back</Link>
        <Form onSubmit={values => Promise.resolve(console.log(values))}>
          <Input label='Alias' name='alias' />
          <Input label='Email Address' name='email' />
          <Input label='Password' type='password' name='password' newPassword />
        </Form>
      </div>
    </div>
  }
}