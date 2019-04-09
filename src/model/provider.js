import React from 'react';
import { Context } from './context';
import './index.scss';

export default class Providers extends React.Component {
  showModel = (content, props = {}) => {
    this.setState({ content, props })
  }
  hideModel = () => this.setState({ content: null, props: {} })
  submit = (e) => {
    e.preventDefault(e);
    const form = e.target;
    const formData = new FormData(form);

    console.log(formData.get('username'))
    console.log(formData.get('password'))
  }
  state = {
    content: null,
    props: {},
    showModel: this.showModel,
    hideModel: this.hideModel,
    submit: this.submit
  }
  render() {
    const ModelContent = this.state.content;
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
        {ModelContent &&
          (<Model content={ModelContent} />)
        }
      </Context.Provider>
    )
  }
}

const Model = props => {
  const Content = props.content;
  return (
    <div className="modal">
      <div className="modal-content">
        <Content />
      </div>
    </div>
  )
}