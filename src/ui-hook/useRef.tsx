import * as React from 'react';

type RefFC = (node: any) => void
type Dimensions = ClientRect | DOMRect | Object

export function useDimensions(): [RefFC, Dimensions] {
  const [dimensions, setDimensions] = React.useState({});
  const ref = React.useCallback(node => {
    if (node) {
      setDimensions(node.getBoundingClientRect().toJSON());
    } else {
      setDimensions({});
    }
  }, []);

  return [ref, dimensions];
}

export function DimensionTest() {
  const [toggle, setToggle] = React.useState(false)
  const [childRef, rect] = useDimensions()
  return (
    <React.Fragment>
      {toggle ? <div ref={childRef} id="test">hello world</div> : null}
      <button onClick={() => setToggle(!toggle)}>toggle hello</button>
      <div>hello, world 的宽度是{(rect as ClientRect).width}px</div>
    </React.Fragment>
  )
}
