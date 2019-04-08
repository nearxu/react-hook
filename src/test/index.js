import React from 'react';
import { useAlert, transitions, positions, Provider as AlertProvider } from 'react-alert';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
const AlertTemplate = ({ style, options, message, close }) => (
  <div style={style}>
    {options.type === 'info' && '!'}
    {options.type === 'success' && ':)'}
    {options.type === 'error' && ':('}
    {message}
    <button onClick={close}>X</button>
  </div>
)

export const Alerts = () => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Demo />
    </AlertProvider>
  )
}

export function Demo() {
  const alert = useAlert();
  console.log(alert, 'alert')
  return <p onClick={() => alert.show('fuck component')}>how use Alert!12345657</p>;
}
