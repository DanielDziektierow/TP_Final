import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 


const App = () => {
    return (
        <div>
            <h1>Appddadf</h1>
        </div>
    );
};

export default App;
<div className="container">

      <Routes>

        <Route path="/" element={<IndexPage />} />
        <Route path="/galeria" element={<CoastersPage />} />
        <Route path="/detalles/:coaster_id" element={<CoasterDetails />} />

      </Routes>

    </div>
*/