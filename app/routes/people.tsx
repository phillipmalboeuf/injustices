
import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button } from '../components/button'

import People from '../models/people'
import Case from '../models/case'

interface Props extends RouteComponentProps<any> {
  people: People,
  cases: Case[]
}
interface State {
  people: People,
  cases: Case[]
}

export class PeopleView extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      people: props.people,
      cases: props.cases || []
    }
  }

  componentDidMount() {
    
  }

  public render() {
    return <div className='hero'>
      <div className='hero__content'>
        <Link className='underline' to={`/`}>Back</Link><br/>
        {this.state.people && this.state.people.attributes && <>
          <h1>{this.state.people.attributes.alias}</h1>
        </>
        }
        <ul>
          {this.state.cases.map((c)=>
          <li key={c._id}><Link className='underline' to={`/cases/${c._id}`}>{c.attributes.title}</Link></li>)}
        </ul>
      </div>
    </div>
  }
}