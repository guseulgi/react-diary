import React, { useEffect, useRef } from 'react'

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  
  useEffect(() => {
    if(typeof duration !== 'number' || typeof delay !== 'number') return;

    if(element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return {
    ref : element,
    style : { opacity : 0 },
  };
}

export default function UseFadeIn() {
  const h1El = useFadeIn(3, 1);
  const pEl = useFadeIn(2, 3);

  return (
    <>
      <h1 {...h1El}>UseFadeIn</h1>
      <p {...pEl}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nulla qui incidunt, sequi aliquam illum reiciendis ex sapiente quia dignissimos nam vero tempora hic earum error obcaecati voluptatum minus totam.</p>
    </>
  )
}
