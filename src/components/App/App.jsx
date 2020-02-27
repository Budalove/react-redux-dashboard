import React from 'react';
import cls from './App.module.css';

import Header from "../Header/Header";
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';


const App = () => {

    return (
            <div className={cls.container}>
                <Header />
                <Sidebar />
                <Dashboard />
            </div>
    );
}

export default App;