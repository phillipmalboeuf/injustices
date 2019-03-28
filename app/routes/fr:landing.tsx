
import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import Email from '../models/email'
import Event from '../models/event'

import { Button } from '../components/button'
import { Overlay } from '../components/overlay'
import { Form } from '../components/form'
import { Input } from '../components/input'

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
          <h3>Cas courants d'atteintes à la vie privée, de discrimination et d'abus d'autorité</h3>
          <p>Ce site existe pour donner une voix aux victimes d'injustices. Il les laisse décrire leur cas et possiblement ouvrir une enquête contre leurs oppresseurs.</p>
          <p>Ici maintenant, vous pouvez éclairer et alléger les circonstances de ceux qui sont poussés dans l'obscurité, de ceux aux marges. Par où commencer vous dites?</p>
          <p>L'injustices.wiki offre trois façons de participer :</p>
          <ol className='medium_bottom'>
            <li><a href='#1' className='underline'>Lire et classer des cas</a></li>
            <li><a href='#2' className='underline'>Contribuer à un cas</a></li>
            <li><a href='#3' className='underline'>Ouvrir un cas vous-même</a></li>
          </ol>
          <Button onClick={e => this.involved()} label={'Participer'} />
        </div>
      </div>

      <div className='padded padded--thick relative black_back' id='1'>
        <div className='grid grid--guttered grid--middle'>
          <div className='col col--2of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <Overlaps size='18rem' phoneSize='12rem' position={css`bottom: 0; left: 2rem;`}>1</Overlaps>
          </div>
          <div className='col col--3of12 col--tablet_landscape--4of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <h2>Lire et classer des cas</h2>
            <p>Encouragez la conscience de l'injustice. Nous sommes ici pour illuminer et étudier des cas d'injustices.</p>
            <p>Nous avons besoin de vous pour le classement, l'avancement et l'abaissement de cas.</p>
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
            <h2>Contribuer à un cas</h2>
            <p>Donnez de vous-même. Votre temps, vos resources et même vos fonds peuvent sortir quelqu'un d'une situation désespérée.</p>
            <p>Maintenant nous, les insignifiants, avons l'opportunité de donner et recevoir de l'aide.</p>
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
            <h2>Ouvrir un cas vous-même</h2>
            <p>Ici, vous pouvez dévoiler en toute sécurité. Nous offrons l'anonymat autant qu'il le faut. Nous éliminons la paralysie de la peur.</p>
            <p>Débuter simplement et développer votre cas au fur et à mesure, un cas complet ou parfait n'existe pas.</p>
          </div>
          <div className='col col--6of12 col--tablet_portrait--9of12 col--phone--12of12'>
            <Screenshot><img src='https://montrealuploads.imgix.net/injustices/ijwk_new_case_screen.png?auto=format,compress' alt=''/></Screenshot>
          </div>
        </div>
      </div>

      <div className='padded padded--thick text_center relative'>
        <Overlaps size='18rem' phoneSize='33vw' position={css`bottom: 0; left: 0; width: 100%;`}>Finalement</Overlaps>
        <Button onClick={e => this.involved()} label={'Participer'} />
      </div>

      <Overlay ref={overlay => this.overlay = overlay}>
        <h2>Participer</h2>
        <p>Le projet injustices.wiki est encore creux dans le développement. Si vous cherchez à être gardé au courant, veuillez nous laisser votre adresse courriel.</p>

        <Form cta={'Envoyer'} onSubmit={values => Email.insertOne(values).then(response => <p><em>Merci énormément, vous allez avoir de nos nouvelles sous peu!</em></p>)}>
          <Input name='email' type='email' label='Adresse courriel' placeholder='your.email@domain.tld' />
        </Form>

        <p><em>Sinon,</em><br/>Suivez-nous sur <a onClick={e => Event.track('Twitter Click')} href='https://twitter.com/injusticeswiki' className='underline' target='_blank'>Twitter</a> ou rejoignez notre <a onClick={e => Event.track('Discord Click')} href='https://discord.gg/Rk6JWDb' className='underline' target='_blank'>Discord</a>.</p>
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