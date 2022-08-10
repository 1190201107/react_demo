// 1.常规变量的值
const name = "lgz"
// 2.原生js函数
const getAge = () =>{
  return 18
}
// 3.三元运算符
const flag = true

function App() { 
  return (
    <div className="App">
      { name }
      { getAge()}
      { flag ? '牛': '不牛'}
    </div>
  );
}

export default App;
