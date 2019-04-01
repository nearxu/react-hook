import React, { useState } from 'react';

export const Form = () => {
  const [text, setText] = useState('');
  const textRef = React.useRef(null);
  const submit = React.useCallback(() => {
    const currentText = textRef.current;
    console.log(currentText.value);
  }, [textRef])
  return (
    <div>
      <input ref={textRef} value={text} onChange={e => setText(e.target.value)} />
      <button onClick={submit}>submit</button>
    </div>
  )
}