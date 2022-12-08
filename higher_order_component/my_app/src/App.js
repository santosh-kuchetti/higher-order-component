import SearchTodos from "./Todos";
import SearchUsers from "./Users";


function App() {
  return (
    <div className="App" style={{display:'flex', justifyContent:'space-around'}}>
      <div>
         <SearchUsers/>
      </div>
      <div>
        <SearchTodos/>
      </div>
      
    </div>
  );
}

export default App;
