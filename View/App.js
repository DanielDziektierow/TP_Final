import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Title from './components/Title/Title.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import VesselDetail from './components/VesselDetail/VesselDetail.jsx';
import Table from './components/Table/Table.jsx';
import FooterEnd from './components/FooterEnd/FooterEnd.jsx';

const App = () => {
    const [dataGeneral, setdataGeneral] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api')
            .then((response) => response.json())
            .then((data) =>setdataGeneral(data));
    }, []);

    const handleDelete = (id) => {
        fetch('http://localhost:3000/api/' + id, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => alert(data, 'se elimino exitosamente'));
    }
    
    return (
        <div class='title'>
            <Title/>
            <div class="vesseldetail">
                <VesselDetail/>
            </div>
            <div className="info">
            <Table
                      listData={dataGeneral}
                      onEdit={(dt)=>handleEdit(dt)}
                      onDelete = {(dt)=>handleDelete(dt)}
                    />
            </div>
            <br/>
            <div class='footer' >
                <FooterEnd/>
            </div>
        </div>
    );
};


export default App;