import "./App.css";
import DataTable from "./components/DataTable.js";
import {dataSource3}  from "./data/dataSource.json";


function App() {




  return (
    <div className="App">
      <header className="App-header">
        <div>
        </div>
        <DataTable productos={dataSource3}></DataTable>
        
      </header>
    </div>
  );
}

export default App;
