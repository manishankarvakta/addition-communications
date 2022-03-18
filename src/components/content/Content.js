import React from 'react';
import './Content.css';
import { BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home'
const Content = () => {
    return (
        <div className='mainContent'>
           <p>Home PAge</p>
        </div>
    );
};

export default Content;