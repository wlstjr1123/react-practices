import React from 'react';

export default function() {
const h1Style = {
  width: 280,
  height: 50,
  padding: 5,
  color: '#111',
  backgroundColor: '#eeff99'
}

// 인라인 스타일링은 객체를 넣어서 동작
    return (
      <div id='App'>
         <h1 style={h1Style}>Inline Styling</h1> 
      </div>
    )
}