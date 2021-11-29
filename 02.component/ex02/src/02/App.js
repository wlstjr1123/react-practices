import React from 'react';
import './assets/css/App.css';

export default function() {


// 인라인 스타일링은 객체를 넣어서 동작
    return (
      <div id='App'>
         <h1>{`Normal CSS (css loader options: {modules: false})`}</h1> 
      </div>
    )
}