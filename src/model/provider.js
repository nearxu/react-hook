import React from 'react';
import { Context } from './context'
import './index.scss';

export default class Providers extends React.Component {
  showModel = (content, props = {}) => {
    this.setState({ content, props })
  }
  hideModel = () => this.setState({ content: null, props: {} })
  state = {
    content: null,
    props: {},
    showModel: this.showModel,
    hideModel: this.hideModel
  }
  render() {
    const ModelContent = this.state.content;
    console.log(ModelContent, 'modelCOntent');
    console.log(this.state, 'state')
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
        {ModelContent &&
          <Model content={ModelContent} />
        }
      </Context.Provider>
    )
  }
}

const Model = props => {
  const Content = props.content;
  return (
    <div className="model">
      <div className="model-content">
        <Content />
      </div>
    </div>
  )
}