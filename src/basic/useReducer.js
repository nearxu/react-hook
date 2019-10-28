
import React, { useReducer } from 'react'
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'del':
      return { count: state.count - 1 }
    default:
      break;
  }
}

// use

const count = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      count:{state.count}
      <button onClick={() => dispatch({ type: 'add' })}>add</button>
      <button onClick={() => dispatch({ type: 'del' })}>del</button>
    </div>
  )
}

export default count