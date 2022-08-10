import React from "react";

//函数组件的创建和渲染
//创建
function Hello() {//函数组件首字母必须大写，必须有返回值，渲染的内容就是返回值，函数名称作为标签名称
  const clickHandler= (e) =>{//事件对象e
    //阻止默认行为，网页跳转
    e.preventDefault()
    console.log('函数组件中的事件被触发', e)
  }
  return <div><a onClick={clickHandler} href="http://baidu.com">baidu</a></div>
}

//渲染 <Hello/>  或<Hello></Hello> 
function App() { 
  return (
    <div className="App">
      {/*渲染函数组件(自闭和标签和成对标签都可以)*/}
        <Hello/>
        <Hello></Hello>
    </div>
  );
}

export default App;
  