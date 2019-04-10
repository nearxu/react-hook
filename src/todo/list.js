import React from 'react';
import { Context } from './context';
import cx from 'classnames';

export const Lists = () => {
  const { users, selectedUser, setSelectedUser } = React.useContext(Context);
  return (
    <div>
      {
        users &&
        users.map((m, i) => {
          return (
            <div
              className={cx('user-item', m.id === selectedUser.id ? 'user-item-selected' : '')}
              key={i}
              onClick={() => setSelectedUser(m)}
            >
              {m.name}
            </div>
          )
        })
      }
    </div>
  )
}