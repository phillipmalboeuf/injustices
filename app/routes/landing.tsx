
import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button } from '../components/button'

// import Case from '../models/case'
// import { Properties } from '../models/_model'


interface Props extends RouteComponentProps<any> {
  // cases: Properties[]
}
interface State {
  // cases: Properties[]
}

export class Landing extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      // cases: props.cases || []
    }
  }

  componentDidMount() {
  }

  public render() {
    return <>
      <div className='black_back padded padded--thick padded--big_top padded--flat_bottom text_center'>
        <h1><Overlaps size='13vw'>injustices.wiki</Overlaps></h1>
      </div>

      <div className='padded padded--thick'>
        <div className='max_width max_width--center'>
          <h3>Cases of ongoing privacy breaches, discrimination, and abuse of authority</h3>
          <p>This place exists to give a voice to victimes of injustices. To let them present their case and perhaps open an investigation against their abusers.</p>
          <p>While you’re here, you may be willing to illuminate the situation of those who are kept in the dark, of those in the margins. But where to start?</p>
          <p>The injustices.wiki provides three ways to get involved:</p>
          <ol className='medium_bottom'>
            <li><a href='#1' className='underline'>Read and classify cases</a></li>
            <li><a href='#2' className='underline'>Contribute to a case</a></li>
            <li><a href='#3' className='underline'>Open a case yourself</a></li>
          </ol>
          <Button label={'Get involved'} />
        </div>
      </div>

      <div className='padded padded--thick relative black_back' id='1'>
        <div className='grid grid--guttered grid--bottom'>
          <div className='col col--2of12'>
            <Overlaps size='20vw' position={{ bottom: 0, left: '2rem' }}>1</Overlaps>
          </div>
          <div className='col col--3of12'>
            <h2>Read and classify cases</h2>
            <p>Awareness goes a long way. We're here to bring to light and study injustices.</p>
            <p>We’ll need help with the tagging, the pushing forward, and pulling down of cases.</p>
          </div>
          <div className='col col--6of12'></div>
        </div>
      </div>

      <div className='padded padded--thick relative' id='2'>
        <div className='grid grid--guttered grid--bottom'>
          <div className='col col--2of12'>
            <Overlaps size='20vw' position={{ bottom: 0, left: '2rem' }}>2</Overlaps>
          </div>
          <div className='col col--3of12'>
            <h2>Contribute to a case</h2>
            <p>Donate anything. Any amount of your time, your resources, or even your funds may pull someone out of a dire situation.</p>
            <p>We, the small, have to opportunity to both provide and receive help.</p>
          </div>
          <div className='col col--6of12'></div>
        </div>
      </div>

      <div className='padded padded--thick relative black_back' id='3'>
        <div className='grid grid--guttered grid--bottom'>
          <div className='col col--2of12'>
            <Overlaps size='20vw' position={{ bottom: 0, left: '2rem' }}>3</Overlaps>
          </div>
          <div className='col col--3of12'>
            <h2>Open a case yourself</h2>
            <p>This is a safe place to speak up. We’ll provide any level of anonimity you need. We’re here to remove fear paralysis.</p>
            <p>Start with the beginning and build on it as you go, there’s no such thing as a complete or perfect case.</p>
          </div>
          <div className='col col--6of12'></div>
        </div>
      </div>

      <div className='padded padded--thick text_center relative'>
        <Overlaps size='18vw' position={{ bottom: 0, left: 0, width: '100%' }}>Finally</Overlaps>
        <Button label={'Get involved'} />
      </div>
    </>
  }
}

interface OverlapsProps {
  size: string,
  position?: { top?: string | number, right?: string | number, bottom?: string | number, left?: string | number, width?: string }
}

const Overlaps: React.SFC<OverlapsProps> = (props) => {
  return <em style={{
    fontSize: props.size,
    textDecoration: 'underline',
    lineHeight: 1,
    ...(props.position ? { position: 'absolute', ...props.position } : {})
  }}>{props.children}</em>
}