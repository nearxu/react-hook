import React from 'react';

export const useDelay = (callback = () => { }, delay) => {
  React.useEffect(() => {
    const timer = setTimeout(callback, delay)
    return () => clearTimeout(timer);
  }, [delay])
}