import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'    // 라우터 추가


ReactDOM.createRoot(document.getElementById('root')).render(
    // 브라우저의 현재주소를 저장하고, 감지하는 역할을 함!
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
