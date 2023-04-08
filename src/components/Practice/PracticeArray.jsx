import React, { useCallback, useRef, useState } from 'react'
import CreateUser from './CreateUser';
import PracticeArrayItem from './PracticeArrayItem';
import UserList from './UserList';

export default function PracticeArray() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })
    
  const nextId = useRef(3);
  const [users, setUsers] = useState([
    {
      id:0,
      username : '강아지',
      email : 'dksdksa',
      active: true,
    },
    {
      id:1,
      username : '고양이',
      email : 'sa',
      active: false,
    },
    {
      id:2,
      username : '앵무새',
      email : 'qqqwera',
      active: false,
    }
  ]);

  const onChange = (e) => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name] : value,
    })
  }
  const {username, email} = inputs;

  const onCreate = useCallback(() => {
    const newUser ={
      id:nextId.current,
      username : username,
      email:email,
    }
    setUsers([
      ...users,
      newUser,
    ])

    setInputs({
      username :'',
      email:'',
    })
    nextId.current++;
  }, [users, username, email]);

  const onDelete = useCallback((id) => {
    setUsers(users.filter((e) => e.id !== id));
  }, [users])

  const onToggle = useCallback((id) => {
    setUsers(users.map((user) => 
      user.id === id 
      ? {...user, active: !user.active}
      : user
    ))
  }, [users]);
  return (
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
    </div>
  )
}
