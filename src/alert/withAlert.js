import React from 'react';
import defaultContext from './context';

const withAlert = (Context = defaultContext) => WrapperComponent => {
  const WithAlert = (props, forwardRef) => (
    <Context.Consumer>
      {alert => (
        <WrapperComponent ref={forwardRef} {...props} alert={alert}></WrapperComponent>
      )}
    </Context.Consumer>
  )
  return React.forwardRef(WithAlert)
}

export default withAlert;
