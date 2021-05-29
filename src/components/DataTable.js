import React from "react";

function DataTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Serial</th>
            <th>Nombre</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
            {props.productos.map((art,i)=>{
                return (
                    <tr key = {i}>
                        <td>{art.serial}</td>
                        <td>{art.nombre}</td>
                        <td>{art.cantidad}</td>
                    </tr>
                );
            })}

        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
