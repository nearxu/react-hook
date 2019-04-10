import React from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
  const { children } = props;
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState({ id: null });

  const addUser = (name) => {
    const newUsers = { id: new Date().getTime().toString(), name: name };
    setUsers(users.concat([newUsers]))
  }

  const store = {
    users,
    addUser,
    setSelectedUser,
    selectedUser
  }
  console.log(store)
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
}