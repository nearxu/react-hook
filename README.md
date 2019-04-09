### why react hook

React Hooks 要解决的问题是状态共享，是继 render-props 和 higher-order components 之后的第三种状态共享方案，不会产生 JSX 嵌套地狱问题


### effect
DOM 副作用修改 / 监听。
组件辅助。
做动画。
发请求。
填表单。
模拟生命周期。
存数据。
封装原有库

### hook 

组件中的每次 render 都有其特定且独立的 props 和 state ( 可以把每一次 render 看作是函数组件的再次调用 )，如果组件中含有定时器、事件处理器、其他的 API 甚至 useEffect ，由于闭包的特性，在它们内部的代码都会立即捕获当前 render 的 props 和 state ，而不是最新的 props 和 state

### alert 组件 createPortal

### model 组件

  modal form get value

  const formdata = new FormData();
  formdata.append("name","tom");
  formdata.append("password","123456")

  // other
  const form = e.target;
  const formdata = new FormData(form)

  const name = formData.get('name')