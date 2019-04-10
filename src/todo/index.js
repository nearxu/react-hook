import React from 'react';
import { Lists } from './list';
import { Add } from './add';
import { DetailDemo } from './detail';
import { Provider } from './context';
import './index.scss';

export const TodoDemo = () => {
  return (
    <div>
      <Provider>
        <Add />
        <Lists />
        <DetailDemo />
      </Provider>
    </div>
  )
}