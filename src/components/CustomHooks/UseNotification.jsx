import React from 'react'

const useNotification = (title, options) => {
  if(!("Notification" in window)) return;

  const fireNotif = () => {
    if(Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if(permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  }

  return fireNotif;
}

export default function UseNotification() {
  const triggerNotification = useNotification('Alarm!!', {
    body : '알람?!',
  });

  return (
    <>
      <h1>UseNotification</h1>
      <button onClick={triggerNotification}>Trigger!</button>
    </>
  )
}
