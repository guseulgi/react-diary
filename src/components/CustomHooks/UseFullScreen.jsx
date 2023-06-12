import React, { useRef } from 'react'

const useFullScreen = () => {
  const element = useRef();

  const triggerFullscreen = () => {
    if(element.current) {
      element.current.requestFullscreen();
    }
  }

  const exitFullscreen = () => {
    if(document.fullscreenElement)
      document.exitFullscreen();
  }

  return {element, triggerFullscreen, exitFullscreen};
}

export default function UseFullScreen() {
  const {element, triggerFullscreen, exitFullscreen} = useFullScreen();
  return (
    <>
      <h1>UseFullScreen</h1>
      <div ref={element}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5r_mJJ8ATBIuev-xk0VPbH0jTT_KyzquN_8Tdifa2E-i8D1zs9-uht_qiJOFg9hEZy4A&usqp=CAU" alt="강아지" />
        <button onClick={exitFullscreen}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFullscreen}>Make Fullscreen</button>
    </>
  )
}
