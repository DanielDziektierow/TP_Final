import React from "react";

const Table = ({listData}) => {
  
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
                      </tr>
                      )
                    })}
                   </tbody>
                   </table>
        </main>
    )
}

export default Table;