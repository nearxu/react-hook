import * as React from 'react';

const { useState, useEffect, useReducer } = React;
const PENDING = "PENDING";
const RESOLVE = "RESOLVE";
const REJECTED = "REJECTED";

type PromiseType = Promise<any> | (() => Promise<any>)

type Status = 'pending' | 'resolved' | 'rejected'

interface Action {
  type: string;
  payload?: any;
}

interface State {
  error: any;
  result: any;
  status: Status;
}

const initState: State = {
  error: undefined,
  result: undefined,
  status: 'pending',
}

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case PENDING:
      return {
        error: undefined,
        result: undefined,
        status: PENDING
      }
    case RESOLVE:
      return {
        error: undefined,
        result: action.payload,
        status: RESOLVE
      }
    case REJECTED:
      return {
        error: action.payload,
        result: undefined,
        status: REJECTED
      }
    default:
      return state;
  }
}

const resolvePromise = (promise: PromiseType) => {
  if (typeof promise === 'function') {
    return promise();
  }
  return promise;
}

const usePromise = (promise: PromiseType, steps: any[]): State => {
  const [{ error, result, status }, dispatch] = useReducer(reducer, initState);
  React.useEffect(() => {
    const clonePromise = resolvePromise(promise);
    if (!clonePromise) return;
    let canceled = false;
    dispatch({ type: PENDING });

    clonePromise.then(result => {
      !canceled && dispatch({ type: RESOLVE, payload: result })
    }).catch(error => {
      !canceled && dispatch({ type: REJECTED, payload: error })
    })
    return () => { canceled = true }
  })
  return { error, result, status };
}

const resolvePromises = Promise.resolve(1)
const pendingPromises = new Promise(() => { })
const rejectedPromises = Promise.reject('cancel')

export const PromiseDemo = () => {
  const { error, result, status } = usePromise(resolvePromises, []);
  const { error: pendError, result: pendResult, status: pendStatus } = usePromise(pendingPromises, [])
  const { error: rejectError, result: rejectResult, status: rejectStatus } = usePromise(rejectedPromises, [])
  return (
    <div>
      <div>成功状态值 error: {`${error}`}, result: {`${result}`}, status: {`${status}`}</div>
      <div>进行中状态值 error: {`${pendError}`}, result: {`${pendResult}`}, status: {`${pendStatus}`}</div>
      <div>拒绝状态值 error: {`${rejectError}`}, result: {`${rejectResult}`}, status: {`${rejectStatus}`}</div>
    </div>
  )
}