
import React from 'react'
import { Button } from '../components/button'

import Event from '../models/event'


interface Props {}
interface State {}

export class Header extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  public render() {
    return <header className='black_back padded padded--tight'>
      <div className='grid grid--guttered grid--spaced'>
        <div className='col'>
          injustices.wiki
        </div>

        <div className='col'>
          <div className='grid grid--guttered'>
            <div className='col'>
              <a onClick={e => Event.track('Contact Click')} href='mailto:phil@phils.computer' className='underline' target='_blank'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  }
}