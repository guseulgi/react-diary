import React from 'react'
import PracticeArrayItem from './PracticeArrayItem'

export default function UserList({users, onDelete, onToggle}) {
  return (
    <div>
      {users.map((user) => <PracticeArrayItem 
        user={user} 
        onDelete={onDelete}
        onToggle={onToggle}
      />)}
    </div>
  )
}
