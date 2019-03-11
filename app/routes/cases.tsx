
import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button } from '../components/button'

import Case from '../models/case'
import { Properties } from '../models/_model'


interface Props extends RouteComponentProps<any> {
  cases: Properties[]
}
interface State {
  cases: Properties[]
}

export class Cases extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      cases: props.cases || []
    }
  }

  componentDidMount() {
    Case.list().then(cases => this.setState({ cases }))
  }

  public render() {
    console.log(this.state.cases)
    return <div className='hero'>
      <div className='hero__content'>
        <Link className='underline' to={`/login`}>Login</Link><br />
        <Link className='underline' to={`/people/new`}>Create new Alias</Link>
        <h1>Injustices.wiki</h1>
        <p>Cases of ongoing privacy breaches, discrimination and abuse of authority</p>
        <ul>
        {this.state.cases.map((c)=> 
          <li key={c._id}><Link className='underline' to={`/cases/${c.code}`}>{c.code}</Link></li>
        )}
        </ul>
      </div>
    </div>
  }
}