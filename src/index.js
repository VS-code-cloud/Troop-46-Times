import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/index';
import Archive from './pages/archive'
import Approval from './pages/approval'
import ScribeLogin from './pages/scribeLogin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/archives" element={<Archive/>}/>
      {(localStorage.getItem('verified') || sessionStorage.getItem('verified')) && (
        <Route path="/approve" element={<Approval/>}/>
      )}
      <Route path="/login" element={<ScribeLogin/>}/>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
