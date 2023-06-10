import React from 'react'
import { useState } from 'react'

const content = [
  {
    tab : 'Sec 1',
    content : 'lorem~~',
  },
  {
    tab : 'Sec 2',
    content : 'lorem~~2222',
  },
  {
    tab : 'Sec 3',
    content : '3333333',
  }
]

const useTabs = (initTab, allTabs) => {
  const [curTab, setTabs] = useState(initTab);
  if(!allTabs || !Array.isArray(allTabs)) return;

  return {
    curItem : allTabs[curTab],
    changeItem : setTabs,
  }
}

export default function UseTabs() {
  const { curItem, changeItem } = useTabs(0, content);

  return (
    <>
      <h1>UseTabs</h1>
      {content.map((el, idx) => 
        <>
          <button onClick={() => changeItem(idx)}>{el.tab}</button>
        </>)}
      <p>{curItem.content}</p>
    </>
  )
}
