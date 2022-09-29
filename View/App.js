import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Title from './components/Title/Title.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import VesselDetail from './components/VesselDetail/VesselDetail.jsx';
import Table from './components/Table/Table.jsx';


const App = () => {
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch('http://localhost:3000/api/tasks')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);
    
    return (
        <div>
            <nav className='green'>
                <div className='container'>
                    <Title/>
                </div>
            </nav>
            <div className="col 5">
                <VesselDetail/>
            </div>
            <div className="col 7">
                <Table/>
            </div>
        </div>
    );
};


export default App;