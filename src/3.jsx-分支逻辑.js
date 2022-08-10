//
const getHtag = (type) =>{
    if(type === 1){
      return <h1>这里是1标签</h1>
    }
    if(type === 2){
      return <h1>这里是2标签</h1>
    }
    if(type === 3){
      return <h1>这里是3标签</h1>
    }
  }
  
  
  function App() { 
    return (
    <div className="App">
      {getHtag(1)}
      {getHtag(2)}
      {getHtag(3)}
    </div>
    );
  }
  
  export default App;
    