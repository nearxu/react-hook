import React from 'react'
import useAlert from './useAlert';
import AlertProvider from './provider';
import './alert.scss';
import cx from 'classnames';

const options = {
  position: "middle",
  timeout: 5000,
  offset: '30px',
}

const AlertTemplate = ({ style, options, message, close }) => {
  console.log(style, options, message, close, 'alertTemplate');
  return <div style={style} className={cx('alert-temple', options.type)}>
    {message}
    <button onClick={close}>X</button>
  </div>
}

export const Alerts = () => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div>
        <p>hello first</p>
        <Demo />
        <div>
          <p>hello second</p>
          <div>
            <Demo2 />

            <p>hello thirt</p>
            <div>
              <p>3333333333</p>
              <div>
                <Demo3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AlertProvider>
  )
}

function Demo() {
  const alert = useAlert();
  return <button onClick={() => alert.error('fuck component')}>how use Alert!111111111</button>;
}

function Demo2() {
  const alert = useAlert();
  return <button onClick={() => alert.show('fuck component2222222')}>how use Alert!2222222222</button>;
}

function Demo3() {
  const alert = useAlert();
  return <button onClick={() => alert.show('fuck component3333333')}>how use Alert!333333333</button>;
}