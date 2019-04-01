import React, { useState, useEffect, useCallback } from 'react';

const useInputValue = (intstate) => {
  let [value, setValue] = useState(intstate);
  let onChange = useCallback(e => {
    setValue(e.target.value)
  }, [])
  return {
    value,
    onChange
  }
}

export const CallBack = () => {
  const name = useInputValue('tom')
  return (
    <div>
      <input {...name} />
      {name.value}
    </div>
  )
}