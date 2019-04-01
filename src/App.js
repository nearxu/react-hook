import React, { Component } from 'react';
import { Apps } from './components/effect';
import { CallBack } from './components/useCallback4';
import { Capt, UnCapt } from './components/useState';
import { SearchResult } from './components/flexComponent';
import { Form } from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Apps />
        <CallBack />
        <Capt />
        <UnCapt />
        <SearchResult query="params" />
        <Form />
      </div>
    );
  }
}

export default App;
