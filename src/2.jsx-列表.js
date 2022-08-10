
//列表渲染
const songs = [
{id: 1, name :'两只老虎'},
{id: 2, name :'三只老虎'},
{id: 3, name :'四只老虎'}
]

//key属性只在框架内部使用，不会出现在真实的dom中
function App() { 
    return (
    <div className="App">
        <u1>
        {songs.map(song => <li key={song.id}>{song.name}</li>)}
        </u1>
    </div>
    );
}

export default App;
    