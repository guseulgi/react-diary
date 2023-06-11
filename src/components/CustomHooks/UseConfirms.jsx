import React from 'react'

const useConfirm = (message, callback) => {
  if(typeof callback !== 'function') return;

  const confirmAction = () => {
    if(window.confirm(message)) {
      callback();
    }
  }
  return confirmAction;
}

export default function UseConfirms() {
  const deleteSomthing = () => console.log('Boom!');
  const confirmDelete = useConfirm('Are You sure?', deleteSomthing);

  return (
    <>
      <h1>UseConfirm</h1>
      <button onClick={confirmDelete}>Delete</button>
    </>
  )
}
