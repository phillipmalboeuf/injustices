

import React from 'react'
import { Redirect } from 'react-router-dom'


export const FormContext = React.createContext({
  values: {} as { [key:string]: any },
  onChange: function(name: string, value: any): void {},
})


interface Props {
  cta?: string,
  onSubmit: (values: { [key:string]: any })=> Promise<string | JSX.Element>
}
interface State {
  values: { [key:string]: any },
  waiting: boolean,
  response?: string | JSX.Element,
  error?: string | JSX.Element
}

export class Form extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      values: {},
      waiting: false
    }
  }

  async onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    this.setState({
      waiting: true,
      error: undefined
    })

    this.props.onSubmit(this.state.values).then(response => this.setState({
        response,
        waiting: false
      })).catch(error => this.setState({
        error: error.message,
        waiting: false
      }))
  }

  onChange(name: string, value: any) {
    this.setState({
      values : {
        ...this.state.values,
        [name]: value
      }
    })
  }

  public render() {
    return this.state.response
    ? this.state.response
    : <form onSubmit={this.onSubmit.bind(this)}>
      <FormContext.Provider value={{
        onChange: this.onChange.bind(this),
        values: this.state.values
      }}>
        {this.props.children}
      </FormContext.Provider>
      {this.state.error && <div className='alert'>{this.state.error}</div>}
      <button className='normal_top button--full' type='submit' disabled={this.state.waiting}>{this.state.waiting ? 'One moment...' : this.props.cta || 'Save'}</button>
    </form>
  }
}