
import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import Email from '../models/email'

import { Button } from '../components/button'
import { Overlay } from '../components/overlay'
import { Form } from '../components/form'
import { Input } from '../components/input'
import Event from '../models/event'

// import Case from '../models/case'
// import { Properties } from '../models/_model'


interface Props extends RouteComponentProps<any> {
  // cases: Properties[]
}
interface State {
  // cases: Properties[]
}

export class Landing extends React.PureComponent<Props, State> {

  private overlay: Overlay

  constructor(props: Props) {
    super(props)
    this.state = {
      // cases: props.cases || []
    }
  }

  componentDidMount() {
  }

  private involved() {
    Event.track('Get Involved')
    this.overlay.toggle()
  }

  public render() {
    return <>
      <div className='black_back padded padded--thick padded--big_top padded--flat_bottom text_center'>
        <h1 style={{ position: 'relative', top: 2 }}><Overlaps size='13vw' phoneSize='14vw'>injustices.wiki</Overlaps></h1>
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
          <Button onClick={e => this.involved()} label={'Get involved'} />
        </div>
      </div>

      <div className='padded padded--thick relative black_back' id='1'>
        <div className='grid grid--guttered grid--middle'>
          <div className='col col--2of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <Overlaps size='18rem' phoneSize='12rem' position={css`bottom: 0; left: 2rem;`}>1</Overlaps>
          </div>
          <div className='col col--3of12 col--tablet_landscape--4of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <h2>Read and classify cases</h2>
            <p>Awareness goes a long way. We're here to bring to light and study injustices.</p>
            <p>We’ll need help with the tagging, the pushing forward, and pulling down of cases.</p>
          </div>
          <div className='col col--6of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <Screenshot><img src='https://montrealuploads.imgix.net/injustices/ijwk_cases_screen.png?auto=format,compress' alt=''/></Screenshot>
          </div>
        </div>
      </div>

      <div className='padded padded--thick relative' id='2'>
        <div className='grid grid--guttered grid--middle'>
          <div className='col col--2of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <Overlaps size='18rem' phoneSize='12rem' position={css`bottom: 0; left: 2rem;`}>2</Overlaps>
          </div>
          <div className='col col--3of12 col--tablet_landscape--4of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <h2>Contribute to a case</h2>
            <p>Donate anything. Any amount of your time, your resources, or even your funds may pull someone out of a dire situation.</p>
            <p>We, the small, have to opportunity to both provide and receive help.</p>
          </div>
          <div className='col col--6of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <Screenshot><img src='https://montrealuploads.imgix.net/injustices/ijwk_case_screen.png?auto=format,compress' alt=''/></Screenshot>
          </div>
        </div>
      </div>

      <div className='padded padded--thick relative black_back' id='3'>
        <div className='grid grid--guttered grid--middle'>
          <div className='col col--2of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <Overlaps size='18rem' phoneSize='12rem' position={css`bottom: 0; left: 2rem;`}>3</Overlaps>
          </div>
          <div className='col col--3of12 col--tablet_landscape--4of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <h2>Open a case yourself</h2>
            <p>This is a safe place to speak up. We’ll provide any level of anonymity you need. We’re here to remove fear paralysis.</p>
            <p>Start with the beginning and build on it as you go, there’s no such thing as a complete or perfect case.</p>
          </div>
          <div className='col col--6of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <Screenshot><img src='https://montrealuploads.imgix.net/injustices/ijwk_new_case_screen.png?auto=format,compress' alt=''/></Screenshot>
          </div>
        </div>
      </div>

      <div className='padded padded--thick text_center relative'>
        <Overlaps size='18rem' phoneSize='33vw' position={css`bottom: 0; left: 0; width: 100%;`}>Finally</Overlaps>
        <Button onClick={e => this.involved()} label={'Get involved'} />
      </div>

      <Overlay ref={overlay => this.overlay = overlay}>
        <h2>Get involved</h2>
        <p>The injustices.wiki project is still very much in development. If you'd like to be kept updated, please leave us you're email address here.</p>

        <Form cta={'Send'} onSubmit={values => Email.insertOne(values).then(response => <p><em>Thank you, you'll hear from us soon!</em></p>)}>
          <Input name='email' type='email' label='Email address' placeholder='your.email@domain.tld' />
        </Form>

        <p><em>Alternatively,</em><br/>Follow us on <a onClick={e => Event.track('Twitter Click')} href='https://twitter.com/injusticeswiki' className='underline' target='_blank'>Twitter</a> or join our <a onClick={e => Event.track('Discord Click')} href='https://discord.gg/Rk6JWDb' className='underline' target='_blank'>Discord</a>.</p>
      </Overlay>
    </>
  }
}

interface OverlapsProps {
  size: string,
  phoneSize?: string,
  position?: FlattenSimpleInterpolation
}

const Overlaps = styled.em`
  display: inline-block;
  margin-bottom: -0.1333em;
  line-height: 1;

  ${(props: OverlapsProps)=> css`
    font-size: ${props.size};

    ${props.phoneSize && css`
      @media (max-width: 900px) { font-size: ${props.phoneSize}; }
    `}

    ${props.position && css`
      position: absolute;
      ${props.position}
    `}
  `}
`

interface ScreenshotProps {}

const Screenshot = styled.div`
  padding: 2rem;
  margin-top: -3vw;
  margin-bottom: -4vw;

  ${(props: ScreenshotProps)=> css`
    @media (max-width: 1200px) {
      padding: 1rem;
    }

    @media (max-width: 900px) {
      padding: 0;
      margin-top: 1rem;
      margin-bottom: 10rem;
    }
  `}
`