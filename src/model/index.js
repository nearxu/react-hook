import React from 'react';
import { Context } from './context';
import './index.scss';
import Providers from './provider';
const TextButton = () => {
  return (
    <div>
      <p>hello model</p>
      <ButtonClose />
    </div>
  )
}

const ButtonClose = () => {
  return (
    <Context.Consumer>
      {({ hideModel }) => <button onClick={hideModel}>close model</button>}
    </Context.Consumer>
  )
}

export const ModelDemo = () => {
  return (
    <Providers>
      <div>
        <Context.Consumer>
          {
            ({ showModel }) =>
              <button onClick={() => showModel(TextButton)}>open model</button>

          }
        </Context.Consumer>
      </div>
    </Providers>
  )
} 