import React from 'react';

export const useBottomVisble = () => {
  const [visble, setVisble] = React.useState(false);
  const handle = () => {
    if (document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)) {
      setVisble(true);
    } else {
      setVisble(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize', handle);
    return () => { window.removeEventListener('resize', handle) }
  }, [setVisble])
  return [visble]
}