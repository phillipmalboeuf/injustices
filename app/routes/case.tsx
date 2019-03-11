
import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button } from '../components/button'

import Case from '../models/case'
import People from '../models/people'
import { Properties } from '../models/_model'


interface Props extends RouteComponentProps<any> {
  c: Properties,
  people: Properties[]
}
interface State {
  c: Properties,
  people: Properties[]
}

export class CaseView extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      c: props.c,
      people: props.people || []
    }
  }

  componentDidMount() {
    Case.one({ code: this.props.match.params.code }).then(c => this.setState({ c }))
    // c.people().then(people => this.setState({ people }))
  }

  public render() {
    return <div className='hero'>
      <div className='hero__content'>
        <Link className='underline' to={`/`}>Back</Link>
        {this.state.c && this.state.c && <>
          <h1 className='small_bottom'>{this.state.c.title}</h1>
          <h6>CASE {this.state.c.code}</h6>
          <ol>
            {this.state.c && this.state.c.statements.map((statement: string, index: number)=> 
            <li key={index} className='normal_bottom'>{statement}</li>)}
          </ol>
          <ul>
            {this.state.people.map((people)=>
            <li key={people._id}><Link className='underline' to={`/people/${people._id}`}>{people.alias}</Link></li>)}
          </ul>
        </>
        }
      </div>
    </div>
  }
}