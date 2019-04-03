import * as React from 'react';

type noop = () => {};

export const useDidMount = (callback: noop, cleanBack?: noop) => {
  React.useEffect(() => {
    callback();
    return () => {
      if (cleanBack) {
        cleanBack()
      }
    };
  }, [])
}