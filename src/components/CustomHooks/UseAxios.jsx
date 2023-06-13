import React, { useEffect, useState } from 'react'
import defaultAxios from 'axios';

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading : true,
    });
    setTrigger(Date.now());
  }

  useEffect(() => {
    if(!options.url) return;

    axiosInstance(options).then(data => {
      setState({
        ...state,
        loading : false,
        data,
      });
    }).catch(error => {
      setState({
        ...state,
        loading : false,
        error,
      });
    });
  }, [trigger]);
  return {...state, refetch};
}

export default function UseAxios() {
  const { loading, error, data, refetch } = useAxios({
    url : 'https://yts.mx/api/v2/list_movies.json',
  })

  console.log(loading, error);
  console.log(JSON.stringify(data));

  return (
    <>
      <h1>UseAxios</h1>
      <p>{data && data.status}</p>
      <p>{loading && 'loading'}</p>
      <button onClick={refetch}>Refetch!</button>
    </>
  )
}
