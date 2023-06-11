import React, { useEffect, useRef } from 'react'

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
      // Mount 될 때
    if(element.current) {
      element.current.addEventListener('click', onClick);
    }
      // return 해주는 부분은 UnMount 될 때 실행 -> 이벤트 핸들러를 없애준다.
    return () => {
      if(element.current) {
        element.current.removeEventListener('click', onClick);
      }
    }
  }, []);
  return element;
}

export default function UseClick() {
  const onClick = () => {
    console.log('Hey!');
  }
  const title = useClick(onClick);

  return (
    <>
      <h1 ref={title}>UseClick</h1>
    </>
  )
}
