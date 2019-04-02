import React, { useState, useEffect } from 'react';

// 有状态 无UI组件
const useIsMount = () => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (!isMount) {
      setIsMount(true);
    }
    return () => setIsMount(false)
  }, [])
  return isMount;
}

const getSize = () => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
}
// 有状态 无UI组件
const useWindowSize = () => {
  let [windowSize, setWindow] = useState(getSize());
  const handleResize = () => {
    setWindow(getSize());
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])
  return windowSize;
}

export const Apps = () => {
  const isMount = useIsMount();
  const windowSize = useWindowSize();
  return (
    <div>
      <p>useEffect [] componentDidMount</p>
      <p>weather isMount: {isMount ? "true" : "false"}</p>
      <div>页面高度 {windowSize.innerHeight}</div>
    </div>
  )
}

