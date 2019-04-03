import * as React from 'react';
import { useActive } from './useActive';

const { useRef, useEffect } = React

export const useEvent = (eventName: string, handler: () => any, element = window, config?: any) => {
  const saveRef = useRef<any>()

  useEffect(() => {
    saveRef.current = handler
  }, [handler])

  useEffect(() => {
    const isSupport = element && element.addEventListener;
    if (!isSupport) return;
    const eventListener = (event: any) => saveRef.current(event);
    // config attr
    element.addEventListener(eventName, eventListener, config);
    return (() => { element.removeEventListener(eventName, eventListener, config) })
  }, [eventName, element])
}

export const FocusDemo = () => {
  // const [active, { onMouseDown, onMouseUp }] = useActive();
  const [active, setActive] = React.useState(false);
  const ref = React.useRef<any>();
  const mouseEnter = () => {
    setActive(!active)
  }
  const mouseLeave = () => {
    setActive(false)
  }
  useEvent('', mouseEnter, ref.current);
  useEvent('mouseleave', mouseLeave, ref.current);

  React.useEffect(() => {
    setActive(true)
  }, [])
  console.log(ref, active)
  return (
    <div>
      {active ? 'focus' : 'no focus'}
      <button ref={ref}>just ref mouse</button>
      {/* <button onMouseDown={onMouseDown} onMouseUp={onMouseUp}>useActive</button> */}
    </div>
  )
} 