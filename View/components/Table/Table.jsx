import React from "react";

const Table = ({listData, onEdit, onDelete}) => {
  
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
                            <button  className="btn light-blue darken-4" onClick={()=>onDelete(dt._id)} >
                              <i className="material-icons"><img src="img/tachito.png" height='35px' /></i> 
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