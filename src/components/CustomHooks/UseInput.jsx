import React from 'react'
import { useState } from 'react'

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = evt => {
    const {
      target : {value}
    } = evt;
    let willUpdate = true;

    if(typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if(willUpdate) 
      setValue(value);
  }
  return { value, onChange };
}

export default function UseInput() {
  const maxLen = value => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <>
      <h1>UseInput</h1>
      {/* <input type="" placeholder='Name' value={name.value}
        onChange={name.onChange} /> */}
      <input type="" placeholder='Name' {...name} />
    </>
  )
}
