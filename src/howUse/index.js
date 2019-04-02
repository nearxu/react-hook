import React, { useState, useEffect, useCallback } from 'react';

// input no onChange,组件的回调一般不需要销毁监听，而且仅需监听一次
// useCallback 包裹，并传一个空数组，来保证永远只监听一次
function useInputValue(initVal) {
  let [value, setValue] = useState(initVal);
  let onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  return { value, onChange }
}

export const FormItem = () => {
  const name = useInputValue('tom');
  return (
    <div>
      <input {...name} />
    </div>
  )
}

function useFormState() {
  const [state, setState] = React.useState({});
  const createPropGetter = type => (name, ownValue) => {
    // const hasOwnValue = !!ownValue;
    // function setInitValue() {
    //   let value = '';
    //   setState({ [name]: value })
    // }
    const inputProps = {
      name,
      get value() {
        // if (!hasOwnValue) {
        //   setInitValue();
        // }
        // return hasOwnValue ? state[name] : '';
        return state[name]
      },
      onChange(e) {
        let { value } = e.target;
        setState({ [name]: value })
      }
    }
    return inputProps;
  }
  const inputPropsCreators = ["text", "password"].reduce(
    (methods, type) => ({ ...methods, [type]: createPropGetter(type) })
    , {}
  )
  return [
    { values: state },
    inputPropsCreators
  ]

}

export const Form = () => {
  const [formState, { text, password }] = useFormState();
  console.log(formState, 'forstate')
  return (
    <form>
      <input {...text('username')} />
      <input {...password('password')} />
    </form>
  )
}