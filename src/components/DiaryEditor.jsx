import React, {useState, useRef} from 'react';

export default function DiaryEditor({onCreate}) {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] =useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    });
  }

  const handleSubmit = (e) => {
    if(state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if(state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    setState({
      author: '',
      content: '',
      emotion: 1,
    })
  }

  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input 
          name='author'
          ref={authorInput}
          value={state.author}
          placeholder='작성자'
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea 
          name='content'
          ref={contentInput}
          value={state.content} 
          placeholder='내용'
          onChange={handleChangeState}
        />
      </div>
      <div>
        오늘의 감정 점수는 
        <select 
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장</button>
      </div>
    </div>
  );
}
