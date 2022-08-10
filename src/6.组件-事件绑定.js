import React from "react";

//函数组件的创建和渲染
//创建
function Hello() {//函数组件首字母必须大写，必须有返回值，渲染的内容就是返回值，函数名称作为标签名称
  const clickHandler= () =>{
    console.log('函数组件中的事件被触发')
  }
  return <div onClick={clickHandler}>hello</div>
}

//类组件的创建和渲染
//创建
class HelloComponent extends React.Component{
  //事件回调函数（避免this组件问题）
  //这样写回调函数中的this指向的是当前的组件实例对象
  clickHandler = () =>{
    console.log('类组件的中的事件被触发了')
  }
  render(){
    return <div onClick={this.clickHandler}>this is class Component</div>
  }
}


//渲染 <Hello/>  或<Hello></Hello> 
function App() { 
  return (
    <div className="App">
      {/*渲染函数组件(自闭和标签和成对标签都可以)*/}
        <Hello/>
        <Hello></Hello>
      {/*渲染类组件(自闭和标签和成对标签都可以)*/}
        <HelloComponent/>
        <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
  