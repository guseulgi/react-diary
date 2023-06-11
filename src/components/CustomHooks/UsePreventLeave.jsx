import React from 'react'

const usePreventLeave = () => {
  const listener = (evt) => {
    evt.preventDefault();
    evt.preventValue = '';
  }
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () => window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent };
}

export default function UsePreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <>
      <h1>UsePreventLeave</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </>
  )
}
