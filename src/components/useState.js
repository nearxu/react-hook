import React from 'react';

export const Class1 = ({ toggle, on }) => {
  return (
    <div>
      <button type="primary" onClick={toggle}> Open Modal </button>
      <div visible={on} onOk={toggle} onCancel={toggle} />
    </div>
  )
}

// 打平 renderProps 更新粒度更细，代码更清晰
export const fun = () => {
  const [on, toggle] = React.useState(false)
  return (
    <div>
      <button type="primary" onClick={toggle}> Open Modal </button>
      <div visible={on} onOk={toggle} onCancel={toggle} />
    </div>
  )
}

//setTem 新的 Render 渲染
export const Capt = () => {
  const [tem, setTem] = React.useState(5);
  const log = () => {
    console.log(tem);
  }
  return (
    <div onClick={() => { log(); setTem(3) }}>xyz</div>
  )
}

// 每次 Render 都有自己的 Effects 绕过 capt

export const UnCapt = () => {
  const [count, setCount] = React.useState(0);
  const lastCount = React.useRef(null);
  React.useEffect(() => {
    lastCount.current.value = count;
    const timer = setTimeout(() => {
      console.log(lastCount.current.value)
    }, 3000)
    return () => clearTimeout(timer);
  }, [lastCount, count])
  return (
    <div>
      <button onClick={() => setCount(count + 1)} ref={lastCount}>count</button>
    </div>
  )
}