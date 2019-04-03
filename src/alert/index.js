import React,{useState,useEffect,useContext, createContext, useRef} from 'react'
import { createPortal } from 'react-dom';

const context = createContext();


const Provider = ({children,context}) => {
    const root =  useRef();
    const show = () => {};
    const alert = {show}
    return (
        <context.Provider>
            {children}
            {root.current
                && createPortal(
                    <div>hello root</div>
                )
            }
        </context.Provider>
    )
}
const useAlert = contexts => useContext(contexts);

export const Alerts = () => {
    const alert = useAlert()
    const toggle = () => {
        console.log(alert)
    }
    return (
      <button
        onClick={
          toggle
        }
      >
        Show Alert
      </button>
    )
  }