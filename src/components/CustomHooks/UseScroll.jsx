import React, { useEffect, useState } from 'react'

const useScroll = () => {
  const [state, setState] = useState({
    x : 0,
    y : 0,
  });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY});
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
}

export default function UseScroll() {
  const { y } = useScroll();
  return (
    <div style={{
      height: '100vw',
    }}>
      <h1 style={{ position: 'fixed', color : y > 100 ? 'red' : 'blue'}}>UseScroll</h1>
    </div>
  )
}
