import React, { Component } from 'react';
import { Apps } from './components/effect';
import { CallBack } from './components/useCallback';
import { Capt, UnCapt } from './components/useState';
import { SearchResult } from './components/flexComponent';
// import { Form } from './components/form';
import { Page, Pagefn, MessageHook, MessageRef, Parent, GetPrePorps, Count } from './examples/fnVsClass';
import { Form } from './howUse';
import { AppContext } from './context/useContext'
class App extends Component {
  state = {
    user: "tom"
  }
  render() {
    return (
      <div className="App">
        <Apps />
        <CallBack />
        <Capt />
        <UnCapt />
        <SearchResult query="params" />
        <Form />
        <div>
          <select value={this.state.user} onChange={e => this.setState({ user: e.target.value })}>
            <option value="tom">tom</option>
            <option value="dan">dan</option>
            <option value="jim">jim</option>
          </select>
        </div>
        <p>class page</p>
        <Page user={this.state.user} />
        <Pagefn user={this.state.user} />
        <MessageHook />
        <MessageRef />
        <Parent user={this.state.user} />
        <GetPrePorps />
        <Count /> <br />
        <Form />
        <AppContext />
      </div>
    );
  }
}

export default App;
