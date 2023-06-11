import React from 'react'

const useConfirm = (message, onConfirm, onCancel) => {
  if(onConfirm && typeof onConfirm !== 'function') return;
  if(onCancel && typeof onCancel !== 'function') return;

  const confirmAction = () => {
    if(window.confirm(message)) {
      onConfirm(); // 찬성
    } else {
      onCancel(); // 반대
    }
  }
  return confirmAction;
}

export default function UseConfirms() {
  const deleteSomthing = () => console.log('Boom!');
  const abortSomething = () => console.log('Thanks');
  const confirmDelete = useConfirm('Are You sure?', deleteSomthing, abortSomething);

  return (
    <>
      <h1>UseConfirm</h1>
      <button onClick={confirmDelete}>Delete</button>
    </>
  )
}
