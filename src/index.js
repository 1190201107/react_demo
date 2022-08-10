//框架的核心包
import React from 'react';
//专门用作渲染相关的包
import ReactDOM from 'react-dom/client';
//应用的全局文件样式
import './index.css';
//引入根目录组件
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
