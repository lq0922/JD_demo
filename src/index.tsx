import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function setRemUnit() {
    const baseSize = 16; // 设计稿中的基准字号
    const scale = document.documentElement.clientWidth / 375; // 375为设计稿的宽度
    document.documentElement.style.fontSize = `${baseSize * Math.min(scale, 2)}px`; // 防止过大
  }
  
  // 初始化
  setRemUnit();
  // 监听窗口大小变化
  window.onresize = function () {
    setRemUnit();
};
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
