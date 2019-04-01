import React from 'react';

// 不要阻塞渲染的数据流

class Button extends React.Component {
  state = {
    color: this.props.color,
    data: null
  }
  // 不要阻塞副作用的数据流
  componentDidMount() {
    this.fetchResults();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      //  Refetch on change
      this.fetchResults();
    }
  }
  fetchResults() { }
  render() {
    return (<div> state from props</div>)
  }
}

export const SearchResult = ({ query }) => {
  const [data, setData] = React.useState(null);
  const [currentPage, setPage] = React.useState(0);

  // 被缓存的返回值
  const getData = React.useCallback(() => {
    return () => setData({ currentPage, query });
  }, [currentPage, query]);

  const getUrl = () => {
    return `page=${currentPage}&query=${query}`
  }
  // componentDidmount
  React.useEffect(() => {
    const url = getUrl();
    return () => getData(url);
  }, [getUrl, getData]);
  console.log(data, 'data')
  return (
    <div>
      <p>hello flexComponent {data}</p>
      <button onClick={() => setPage(currentPage + 1)}>next page</button>
    </div>
  )
}