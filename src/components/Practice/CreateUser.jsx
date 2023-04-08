import React from 'react'

export default function CreateUser({
  onChange, onCreate, username, email,
}) {
  return (
    <div>
      <input 
        type="text" 
        name='username'
        placeholder='이름'
        onChange={onChange}
        value={username}
      />
      <input 
        type="text" 
        name='email'
        placeholder='이메일'
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}
