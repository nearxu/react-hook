import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

export class Page extends React.Component {
  showMessage = () => {
    alert(this.props.user)
  }
  handleClick = () => {
    setTimeout(this.showMessage, 3000)
  }
  render() {
    return (
      <button onClick={this.handleClick}>follow</button>
    )
  }
}

// fn 能够保证拿到的是第一次，数据不可变 capture value
export const Pagefn = (props) => {
  const showMessage = () => {
    alert(props.user)
  }
  const handleClick = () => {
    setTimeout(showMessage, 3000)
  }
  return (<button onClick={handleClick}>fllowfn</button>)
}

// hook captrue value
export const MessageHook = () => {
  const [message, setMessage] = React.useState('');
  const handleClick = () => {
    setTimeout(() => {
      alert(message)
    }, 3000)
  }
  return (
    <div>
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={handleClick}>send</button>
    </div>
  )
}

// use ref solution hook capture value
export const MessageRef = () => {
  const [message, setMessage] = React.useState('');
  const inputRef = React.useRef(null);
  const handleClick = () => {
    setTimeout(() => {
      alert(inputRef.current.value)
    }, 3000)
  }
  return (
    <div>
      <input ref={inputRef} value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={handleClick}>send ref value</button>
    </div>
  )
}

// function solution shouldComponentUpdate

const Child = ({ a }) => {
  console.log('memo is render');
  return (<p>child a:{a}</p>)
}

export function Parent(props) {
  const { user } = props;
  // return (<Child a={user} />)
  const child = React.useMemo(() => <Child a={user} />, [user])
  return (
    <div>{child}</div>
  )
}

// 获取上一个props

const usePreCount = (value) => {
  const ref = useRef();
  useEffect(() => {
    return () => {
      ref.current = value;
    };
  }, [])
  return ref.current;
}

export const GetPrePorps = () => {
  const [count, setCount] = useState(0);

  const preCount = usePreCount(count);
  function usePreCount(value) {
    const ref = useRef(); // ref just a value
    useEffect(() => {
      ref.current = value;
    }, [count]);
    return ref.current;
  }
  return (
    <div>
      <h1>Now count:{count},before: {preCount}</h1>
      <button onClick={() => setCount(count + 1)}>add count</button>
    </div>
  )
}
// if useEffect [] just render once!!! add [count] will componentDidUpate
export const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('render')
  }, [count])
  return (
    <div onClick={() => setCount(count + 1)}>count:{count}</div>
  )
}