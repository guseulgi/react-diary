import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PracticeInput from './components/Practice/PracticeInput';
import PracticeArray from './components/Practice/PracticeArray';
import UseInput from './components/CustomHooks/UseInput';
import UseTabs from './components/CustomHooks/UseTabs';
import PracUseEffect from './components/CustomHooks/PracUseEffect';
import UseTitle from './components/CustomHooks/UseTitle';
import UseClick from './components/CustomHooks/UseClick';
import UseConfirms from './components/CustomHooks/UseConfirms';
import UsePreventLeave from './components/CustomHooks/UsePreventLeave';
import UseBeforeLeave from './components/CustomHooks/UseBeforeLeave';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <UseBeforeLeave />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
