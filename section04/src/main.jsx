import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 인수로 전달받은 HTML 요소를 루트로 즉, 뿌리로 만들어주는 역할을함.
// index.html 파일안에 있는 "root" 라는 이름을 같은 div 요소를 확인 할 수 있음.
// render...? App이라는것을 렌더링 하겠다!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)