/*
 * @Author: your name
 * @Date: 2019-10-28 14:29:42
 * @LastEditTime: 2019-10-28 14:32:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\memore\redux\index.js
 */
import { useState } from 'react'

const useReducer = (reducer, initState) => {
  const [state, setState] = useState(initState)
  const dispatch = action => {
    const nextState = reduce(state, action)
    setState(nextState)
  }
  return [state, dispatch]
}