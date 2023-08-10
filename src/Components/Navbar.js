import React from 'react';
import {GiTigerHead}from "react-icons/gi"
import {MdRocketLaunch} from "react-icons/md"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <div class="d-flex flex-row">
        <GiTigerHead style={{color:"red",fontSize:"60px",marginRight:"15px"}}/>
          <div>
            <p className="fs-3 fw-bold text-white" >XSTRATEGY</p>
            <p className="fs-6 text-white text-uppercase">Singapore</p>
          </div> 
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto nav_list">
            <li className="nav-item"><a className="nav-link text-white" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#solutions">Solutions</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
          </ul>
          <button className="start_btn">Get Started {<MdRocketLaunch/>}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
