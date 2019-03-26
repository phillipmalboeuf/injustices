
import React from 'react'
import { Button } from '../components/button'

import Event from '../models/event'


interface Props {}
interface State {}

export class Footer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  public render() {
    return <footer className='padded black_back'>
      <div className='grid grid--guttered grid--spaced'>
        <div className='col'>
          injustices.wiki
        </div>

        <div className='col'>
          <div className='grid grid--guttered'>
            <div className='col'>
              <a onClick={e => Event.track('Developers Click')} href='/developers' className='underline'>Developers</a>
            </div>
            <div className='col'>
              <a onClick={e => Event.track('Terms Click')} href='/terms' className='underline'>Terms</a>
            </div>
            <div className='col'>
              <a onClick={e => Event.track('Contact Click')} href='mailto:phil@phils.computer' className='underline'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  }
}