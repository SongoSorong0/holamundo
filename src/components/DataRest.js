import React from "react";

function DataRest(props) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
              {props.person.map((ps,i)=>{
                  return (
                      <tr key = {i}>
                          <td>{ps.userId}</td>
                          <td>{ps.id}</td>
                          <td>{ps.title}</td>
                          <td>{ps.completed}</td>
                      </tr>
                  );
              })}
  
          </tbody>
        </table>
      </div>
    );
  }
  
  export default DataTable;
  