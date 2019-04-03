import React, { useState, useEffect, useCallback } from 'react';

export const useActive = () => {
  const [active, setActive] = useState(false);
  const onMouseDown = () => {
    setActive(true);
  }
  const onMouseUp = () => {
    setActive(false);
  }
  return [
    active,
    { onMouseDown, onMouseUp }
  ]
}

const useToggle = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  }
  return [active, toggle];
}

export const ActiveDemo = () => {
  // const [active, { onMouseDown, onMouseUp }] = useActive();
  // const mousedown = () => {
  //   onMouseDown()
  // }
  // const mouseup = () => {
  //   onMouseUp()
  // }
  const [active, toggle] = useToggle();
  return (
    <div>
      <div>
        active: {`${active}`}
      </div>
      {/*<button onMouseDown={mousedown} onMouseUp={mouseup}>点击测试useActive</button>*/}
      <button onClick={toggle}>点击测试useActive</button>
    </div>
  )
}