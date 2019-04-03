import * as React from 'react';

const { useState } = React;

const useLocalStore = (key: string, values?: any) => {
  const [value, setValue] = useState(() => {
    try {
      const cacheValues = window.localStorage.get(key);
      return cacheValues ? JSON.parse(cacheValues) : values;
    } catch (error) {
      return values
    }
  });
  const setItem = (value: any) => {
    setValue(value);
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  const removeItem = () => {
    setValue(undefined)
    window.localStorage.removeItem(key)
  }
  return [value, { setItem, removeItem }]
}

export const LocalDemo = () => {
  const [name, setName] = useState();
  const [sessionVal, { setItem, removeItem }] = useLocalStore(name);
  return (
    <div>
      <input onChange={e => setName(e.target.value)} value={name} />
      <div>
        <button onClick={() => setItem(name)}>set local item</button>
        <button onClick={() => removeItem(name)}>remove local item</button>
      </div>
    </div>
  )
}