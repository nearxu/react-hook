import React, { Component } from 'react';

import { ActiveDemo } from './ui-hook/useActive';
import { FocusDemo } from './ui-hook/useEvent.tsx';
import { IntervalDemo } from './ui-hook/useInterval.tsx';
import { LocalDemo } from './ui-hook/useLocalStore.tsx';
import { PromiseDemo } from './ui-hook/usePromise';

export default class App extends Component {
  render() {
    return (
      <div>
        <ActiveDemo />
        <FocusDemo />
        {/*<IntervalDemo />*/}
        <LocalDemo />
        {/*<PromiseDemo />*/}
      </div>
    )
  }
}