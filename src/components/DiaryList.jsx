import React from 'react'
import DiaryItem from './DiaryItem';

export default function DiaryList({diaryList, onRemove, onEdit}) {
  return (
    <div className='DiaryList'>
      <h2>일기 리스트</h2>
      <h4>총 {diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((e) => <DiaryItem key={e.id} {...e} onRemove={onRemove} onEdit={onEdit} />)}
      </div>
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: [],
};