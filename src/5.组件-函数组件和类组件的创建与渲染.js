import React from "react";

//函数组件的创建和渲染
//创建
function Hello() {//函数组件首字母必须大写，必须有返回值，渲染的内容就是返回值，函数名称作为标签名称
  return <div>hello</div>
}

//类组件的创建和渲染
//创建
//类名称必须首字母大写，类中组件需要继承React.Component,
//类组件必须提供render方法，render方法必须有返回值，表示该组件的ui结构
class HelloComponent extends React.Component{
  render(){
    return <div>this is class Component</div>
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
  