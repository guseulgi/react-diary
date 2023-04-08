import React from 'react'

export default function PracticeArrayItem({user, onDelete, onToggle}) {
  const {username, email, id, active} = user;
  return (
    <>
      <span style={{
        cursor:'pointer',
        color:active ? 'green' : 'black',
      }} onClick={() => onToggle(id)}>{username}</span> 
      <span>({email})</span>
      <button onClick={() => onDelete(id)}>삭제</button>
      <br/>
    </>
  )
}
