import React from 'react';
import { Context } from './context';
import './index.scss';
import Providers from './provider';

const TextButton = () => {
  return (
    <div>
      <p>hello model</p>
      <ModalForm></ModalForm>
      <CloseButton></CloseButton>
    </div>
  )
}
const CloseButton = () => {
  return (
    <Context.Consumer>
      {({ hideModel }) => <button onClick={hideModel}>close model</button>}
    </Context.Consumer>
  )
}

const ModalForm = () => {
  return (
    <Context.Consumer>
      {({ submit }) => {
        return (
          <form onSubmit={submit}>
            <div className="form-item">
              <label htmlFor="name"></label>
              <input placeholder="username" id="username" name="username" />
            </div>
            <div className="form-item">
              <label htmlFor="password"></label>
              <input type="password" placeholder="password" name="password" id="password" />
            </div>
            <button type="submit">submit</button>
          </form>
        )
      }}
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