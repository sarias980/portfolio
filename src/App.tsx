import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import AppNavigation from "./navigations/app-navigation";
import Preloader from '../src/components/molecules/Preloader';
import './style/style.css';

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            <Router>
                <Preloader load={load}/>
                <AppNavigation/>
            </Router>
        </div>
    );
}

export default App;
