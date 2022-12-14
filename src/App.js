import React from "react";

//组件状态 类组件
class TestComponent extends React.Component{
  //定义组件状态
  state = {
    //这里可以定义各种属性
    name: 'lgz',
    count: 0,
    list: [1,2,3],
    people:{
      name: 'new people',
      age: 30
    }
  }
  changeName =  () =>{
    //修改state中的状态name
    //注意不可以直接赋值修改,必须通过方法setState
    this.setState({
      name:'123'
    })
  }
  //修改状态中的list和基本数据类型和对象类型
  clickHandler = () =>{
    this.setState({
      list: [...this.state.list, 4, 5],
      count: this.state.count + 1,
      people:{
        ...this.state.people,
        name:'idea'
      }

    })
  }
  render(){
    //使用状态  
    return (
      <>
        <div>
          <u1>
            {this.state.list.map(item=><li key={item}>{item}</li>)}
          </u1>
        </div>
        <div>
          {this.state.people.name}
        </div>
        <div>
          {this.state.count}
          <button onClick={this.clickHandler}>+</button>
        </div>
      </>
    )
      
  }
}  

/**
 * 总结
 * 1。编写组件其实就是编写原生的js类或者函数
 * 2.定义状态必须通过state 实例属性的方法 提供一个对象 名称固定的就叫state
 * 3.修改state中的任何属性 都不可以通过直接赋值 必须走setState方法 方法来自于继承得到
 * 4。这里的this关键词很容易出现指向错误的问题，需要注意
 */

function App() { 
  return (
    <div className="App">
      <TestComponent/>
    </div>
  );
} 

export default App;
  