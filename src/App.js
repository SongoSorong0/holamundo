import "./App.css";
import DataTable from "./components/DataTable.js";
import { dataSource2 } from "./data/dataSource2.js";
import {dataSource3}  from "./data/dataSource.json";
import React, { useEffect } from "react";

function App() {
  const [items,setItems] = React.useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(
      (resu1) =>{
        console.log("Resultado : ");
        
        console.log(JSON.stringify(resu1));
      },
      (error) =>{
        console.log("Esto es un error");
      }
    )
},[])

  const productos = [
    { serial: "101010", nombre: "lapicero", cantidad: "506" },
    { serial: "101010", nombre: "Cuaderno", cantidad: "69" },
    { serial: "101010", nombre: "Resma de papel", cantidad: "777" },
    { serial: "101010", nombre: "Borrador", cantidad: "123" },
    { serial: "101010", nombre: "lapiz", cantidad: "9" },
  ];

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
