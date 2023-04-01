import React, {useState, useEffect} from 'react'

const UnmountText = () => {
  
  useEffect(() => {
    console.log('Mount');

    return () => {
      console.log('Unmount');
    }
  }, []);

  return (
    <div>Unmount Testing Component</div>
  )
}

export default function Lifecycle() {
  // const [count, setCount ] = useState(0);
  // const [text, setText ] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  // useEffect(() => {
  //   console.log('Mount');
  // }, []);

  // useEffect(() => {
  //   console.log('Update');
  // });

  // useEffect(() => {
  //   console.log(`count is update : ${count}`);
  // }, [count]);
  // useEffect(() => {
  //   console.log(`text is update : ${text}`);
  // }, [text]);

  return (
    <div style={{padding: '20px'}}>
      Lifecycle
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}
      <button onClick={toggle}>On/Off</button>
      {isVisible && <UnmountText/>}
    </div>
  )
}
