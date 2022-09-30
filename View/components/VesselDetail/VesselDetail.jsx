import React, {Fragment, useState} from 'react';

const VesselDetail = () => {

  const [datos, setDatos] = useState({
    vesselname: '',
    depature: '',
    arrival: ''
})

  const handleInputChange = (event) => {
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

  const enviarDatos = (event) => {
    event.preventDefault()
    const options = {
      method: "POST",
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
          <div class="row">
            <div class="col s5">
              
                <div className="card" class="card blue">
                    <div className="card-content">
                      <form onSubmit={(e)=> enviarDatos(e) } >
                        <div className="row">
                          <div className="input-field col s12">
                            <input name="vesselname"  type="text" onChange={handleInputChange} placeholder="Vessel name" />
                          </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                              <input name="depature"  type="text" onChange={handleInputChange} placeholder="Depature" />
                            </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input name="arrival"  type="text" onChange={handleInputChange} placeholder="Arrival" />
                          </div>
                        </div>
                        <button type="submit" className="btn light-blue darken-4">
                        Send 
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              
            </div>
            {/* <ul> 
            <li>{datos.vesselname}</li>
              <li>{datos.arrival}</li>
              <li>{datos.depature}</li>
            </ul>
            */}
              
  </main>
    )
}

export default VesselDetail;