import React, { useEffect } from 'react'

const useBeforeLeave = (onBefore) => {
  const handle = (evt) => {
    const { clientY } = evt;
    if(clientY <= 0) // clientY의 값이 음수가 (위로 가게되면) 되면 실행됨
      onBefore();
  }

  useEffect(() => {
    if(typeof onBefore !== 'function') return;
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
}

export default function UseBeforeLeave() {
  const begForLife = () => console.log('Plz Dont Leave');
  useBeforeLeave(begForLife);

  return (
    <>
      <h1>UseBeforeLeave</h1>
    </>
  )
}
