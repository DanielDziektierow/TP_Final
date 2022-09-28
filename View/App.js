import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Title from './components/Title/Title.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import VesselDetail from './components/VesselDetail/VesselDetail.jsx';

const App = () => {
    return (
        <div>
            <nav className='green'>
                <div className='container'>
                    <Title/>
                </div>
            </nav>
            <VesselDetail/>
        </div>
    );
};

export default App;