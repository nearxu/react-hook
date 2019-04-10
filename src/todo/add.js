import React from 'react';
import { Context } from './context';

export const Add = () => {
  const [userName, setUserName] = React.useState("");
  const { addUser } = React.useContext(Context);

  const handleChange = (e) => {
    setUserName(e.target.value);
  }
  return (
    <div>
      <input type="text" value={userName} onChange={handleChange} placeholder="name" />
      <button onClick={() => addUser(userName)}>submit</button>
    </div>
  )
}