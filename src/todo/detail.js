import React from 'react';
import { Context } from './context';

export const DetailDemo = () => {
  const { users, selectedUser } = React.useContext(Context);
  const user = users.filter(user => user.id === selectedUser.id)[0] || {};
  console.log(selectedUser.id, 'id')
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.id}</p>
    </div>
  )
}