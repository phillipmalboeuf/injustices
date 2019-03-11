

import React from 'react'
import { Button } from './button'
import { Fade, Glide } from './animations'

interface Props {
  visible?: boolean,
  wider?: boolean,
  button?: string | JSX.Element,
  onHide?: Function
}
interface State {
  visible: boolean
}

export class Overlay extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      visible: props.visible || false
    }
  }

  componentDidMount() {
    document.documentElement.classList.remove('noscroll')
  }

  public toggle() {
    this.setState({visible: !this.state.visible})
    document.documentElement.classList.toggle('noscroll')
  }

  public hide() {
    this.setState({visible: false})
    document.documentElement.classList.remove('noscroll')
    this.props.onHide && this.props.onHide()
  }

  public render() {
    return <>
      {this.props.button && <Button label={this.props.button} onClick={()=> this.toggle()} />}
      {this.state.visible
        ? <div className='overlay'>
          <Fade><button className='button--transparent overlay__back' onClick={()=> this.hide()} /></Fade>
          <Glide><div className={`overlay__container${this.props.wider ? ' overlay__container--wider' : ''}`}>
            <button className='button--transparent overlay__close' onClick={()=> this.hide()}>✕</button>
            {this.props.children}
          </div></Glide>
        </div>
        : null}
    </>
  }
}