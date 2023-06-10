import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);

  const upadteTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  }

  useEffect(upadteTitle, [title]);
  return setTitle;
}

export default function UseTitle() {
  const titleUpdater = useTitle('Loading...');

  // 임시로 타이틀을 변경시켜주기
  setTimeout(() => titleUpdater('Home'), 1500);

  return (
    <>
      <h1>UseTitle</h1>
    </>
  )
}
