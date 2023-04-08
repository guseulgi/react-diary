import React, { useRef, useState } from 'react'

export default function PracticeInput() {
  const [input, setInput] = useState({
    name : '',
    nickname : '',
  });
  const nameInput = useRef('');

  const {name, nickname} = input;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]:value,
    })
  }

  const onReset = () => {
    setInput({
      name : '',
      nickname : ''
    });
    nameInput.current.focus();
  }

  return (
    <div>
      <span>이름 : </span>
      <input 
        type="text"
        placeholder='이름'
        name='name'
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <br/>
      <span>닉네임 : </span>
      <input 
        type="text"
        placeholder='닉네임'
        name='nickname'
        onChange={onChange}
        value={nickname}
      />
      <br/>
      <button onClick={onReset}>초기화</button>
      <p>이름 : {name} / 닉네임 : {nickname}</p>

    </div>
  )
}
