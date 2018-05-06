
import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button } from '../components/button'

import Case from '../models/case'


interface Props extends RouteComponentProps<any> {
}
interface State {
  c: Case
}

export class NewCase extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      c: new Case()
    }
  }

  componentDidMount() {
    
  }

  public render() {
    return <div className='hero'>
      <div className='hero__content'>
        <Link className='underline' to={`/`}>Back</Link>
      </div>
    </div>
  }
}