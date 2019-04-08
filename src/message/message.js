import React from 'react';

const Message = (props) => {
  const { children } = props;
  return (<div>{children}</div>)
}

const noop = () => { };

Message.defaultProps = {
  size: 'normal',
  shape: 'filled',
  duration: 3000,
  onClick: noop,
  onClose: noop
}

export default Message;