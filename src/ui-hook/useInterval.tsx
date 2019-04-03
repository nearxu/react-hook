import * as React from 'react';

const noop = () => { }

const useInterval = (callback = () => { }, delay: number) => {
  const savedCallback = React.useRef<any>({});

  // remember last callback
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // set interval
  React.useEffect(() => {
    const tick = () => { savedCallback.current() }
    if (delay !== null) {
      const timer = setInterval(tick, delay);
      return () => clearInterval(timer);
    }
    return () => { }
  }, [delay])
}

export const IntervalDemo = () => {
  const [count, setCount] = React.useState(0);
  const [delay, setDelay] = React.useState(1000);

  useInterval(() => { setCount(count + 1) }, delay)

  return (
    <div>
      <button onClick={() => setDelay(1000)}>每一秒加1 {count}</button>
      <button onClick={() => setDelay(10000)}>每一秒加10 {count}</button>
    </div>
  )
}