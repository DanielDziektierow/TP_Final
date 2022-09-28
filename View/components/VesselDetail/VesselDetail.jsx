import React from "react";

const VesselDetail = () => {
  
  const loadVessel = () =>{
    fetch('http://localhost:3000/api/tasks')
    .then(res => res.json())
    .then()
  }
    return(
        <main>
             <div class="row">
    <div class="col s5">
      <div class="card blue darken-1">
        
        <div className="card" class="card blue">
            <div className="card-content">
              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="title"  type="text" placeholder="Vessel name" autoFocus/>
                  </div>
                </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea name="description"  cols="30" rows="10" placeholder="Depature" className="materialize-textarea"></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea name="description"  cols="30" rows="10" placeholder="Arrival" className="materialize-textarea"></textarea>
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
  </div>
            
  </main>
    )
}

export default VesselDetail;