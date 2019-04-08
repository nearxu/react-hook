import React from 'react';

const store = React.createContext();

const Menu = () => {
  const color = React.useContext(store);
  return (
    <p>{color}</p>
  )
}

const Bar = () => {
  return <Menu />
}

export const AppContext = () => {
  return (
    <store.Provider value={'red'}>
      <Bar />
    </store.Provider>
  )
}