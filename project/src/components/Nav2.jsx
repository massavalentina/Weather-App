import React from 'react';
import Logo from '../img/icon.png'
import SearchBar from './SearchBar.jsx';
import './Nav2.css';


function Nav({onSearch}) {
  return (
    <nav className="navbar">
        <span className="navbar-brand md-5">
          <img id="logoClouds" src={Logo} margin="5" width="40" height="30" className="d-inline-block align-top" alt="" />
           Weather App
        </span>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
