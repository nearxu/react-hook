/*
 * @Author: your name
 * @Date: 2019-10-28 11:47:08
 * @LastEditTime: 2019-10-28 12:00:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-hook\src\memore\index.js
 */

import React, { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0)

  // add useEffect
  // some like didMount
  useEffect(() => {
    document.title = 'you click' + count
  })
  return (
    <div>
      <p>you {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button><br />
      <button onClick={() => setCount(count - 1)}>del</button>
    </div>
  )
}

export default Example