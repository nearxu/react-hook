import React, { useContext } from 'react';

const colorContext = React.createContext("context props color");

function Bar() {
  const color = useContext(colorContext);
  return <div>{color}</div>
}

function Foo() {
  return <Bar />
}

export function AppContext() {
  return <colorContext.Provider value={"context props color"}>
    <Foo />
  </colorContext.Provider>
}