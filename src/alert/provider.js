import React, { useState, useEffect, useContext, createContext, useRef } from 'react'
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Wrapper from './wrapper';
import defaultContext from './context';
import { types } from './options';

const Provider = ({
  children,
  offset,
  position,
  timeout,
  type,
  context: Context,
  template: AlertComponent,
  ...props
}) => {
  const root = useRef(null);
  const timersId = useRef([]);
  const [alerts, setAlerts] = useState([]);

  React.useEffect(() => {
    root.current = document.createElement('div');
    document.body.appendChild(root.current)

    return () => {
      timersId.current.forEach(clearTimeout)
      if (root.current) document.body.removeChild(root.current)
    }
  }, [])

  // alert show
  const show = (message = '', options = {}) => {
    const id = Math.random().toString(36).substr(2, 9);
    const alertOptions = {
      timeout,
      type,
      ...options
    }
    const alert = {
      id,
      message,
      options: alertOptions
    }
    alert.close = () => remove(alert);

    // timer close
    // if (alert.options.timeout) {
    //   const timerId = setTimeout(() => {
    //     remove(alert);
    //     timersId.current.splice(timersId.current.indexOf(timerId), 1)
    //   }, alert.options.timeout);
    //   timersId.current.push(timerId);
    // }

    setAlerts(alerts => alerts.concat(alert))
    if (alert.options.onOpen) alert.options.onOpen()
    return alert;
  };

  const error = (message = '', options = {}) => {
    options.type = types.ERROR
    return show(message, options)
  }

  // alert remove close
  const remove = alert => {
    setAlerts(pre => {
      const len = pre.length;
      const alerts = pre.filter(v => v.id !== alert.id)
      if (len > alerts.length && alert.options.onClose) {
        alert.options.onClose();
      }
      return alerts;
    })
  }

  const alertContext = {
    root: root.current,
    show,
    error
  }
  console.log(position, props, 'wrap')
  return (
    <Context.Provider value={alertContext}>
      {children}
      {root.current
        && createPortal(
          <Wrapper options={{ position }} {...props}>
            {
              alerts.map((alert, i) => <AlertComponent key={i} {...alert} />)
            }
          </Wrapper>,
          root.current
        )
      }
    </Context.Provider>
  )
}

Provider.protoTypes = {
  template: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  context: PropTypes.shape({
    Provider: PropTypes.object,
    Consumer: PropTypes.object
  })
}

Provider.defaultProps = {
  context: defaultContext
}

export default Provider;