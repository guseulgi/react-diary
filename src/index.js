import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PracticeInput from './components/Practice/PracticeInput';
import PracticeArray from './components/Practice/PracticeArray';
import UseInput from './components/CustomHooks/UseInput';
import UseTabs from './components/CustomHooks/UseTabs';
import PracUseEffect from './components/CustomHooks/PracUseEffect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PracUseEffect />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
