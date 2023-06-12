import React, { useEffect, useState } from 'react'

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);

  const handdleChange = () => {
    if(typeof onChange === 'function')
      onChange(navigator.onLine);

    setStatus(navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener('online', handdleChange);
    window.addEventListener('offline', handdleChange);

    return () => {
      window.removeEventListener('online', handdleChange);
      window.removeEventListener('offline', handdleChange);
    }
  }, []);
  return status;
}

export default function UseNetwork() {
  const handleNetworkChange = (online) => {
    console.log(online ? 'We just went online' : 'We are offline');
  }
  const onLine = useNetwork(handleNetworkChange);

  return (
    <>
      <h1>{onLine ? 'Online' : 'Offline'}</h1>
    </>
  )
}
