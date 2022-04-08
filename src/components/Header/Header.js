import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './Header.css'; 

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand logo" to='/'>
                    <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" to="#">Action</a></li>
                        <li><a className="dropdown-item" to="#">Another action</a></li>
                        <li><a className="dropdown-item" to="#">Something else here</a></li>
                    </ul>
                    </li> */}
                    <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact"><i className="fas fa-user"></i> </Link>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;