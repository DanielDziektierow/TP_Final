import React from "react";

const Table = ({listData}) => {
  
  const eliminar = (event) => {
    event.preventDefault()
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    };
    
    // Petición HTTP
    fetch("http://localhost:3000/api", options)
      .then(response => response.json())
      .then(data => console.log(data)
      );

}
  
    return(
        <main>
            <table>
                <thead>
                  <tr>
                    <th>Vessel</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                  </tr>
                </thead>
                <tbody>
                {listData.map((dt, key)=>{
                    return (
                      <tr>
                        <td key={key}>{dt.vesselname}</td>
                        <td key={key}>{dt.depature}</td>
                        <td key={key}>{dt.arrival}</td>
                        <td>
                            <button  className="btn light-blue darken-4">
                              <i className="material-icons"><img src="img/tachito.png" height='35px' /></i> 
                            </button>
                            <button  className="btn light-blue darken-4" style={{margin: '4px'}}>
                              <i className="material-icons"><img src="img/lapiz.png" height='35px' /></i>
                            </button>
                          </td>
                      </tr>
                      )
                    })}
                   </tbody>
                   </table>
        </main>
    )
}

export default Table;