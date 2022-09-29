import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Title from './components/Title/Title.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import VesselDetail from './components/VesselDetail/VesselDetail.jsx';
import Table from './components/Table/Table.jsx';


const App = () => {
    const [dataGeneral, setdataGeneral] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api')
            .then((response) => response.json())
            .then((data) =>setdataGeneral(data));
    }, []);
    
    return (
        <div>
            <nav className='green'>
                <div className='container'>
                    <Title/>
                </div>
            </nav>
            <div className="col 4">
                 <VesselDetail/> 
            </div>
            <div className="col 4">
                <Table listData={dataGeneral}/>
            </div>
        </div>
    );
};


export default App;