import React from 'react';
import Navbar from './Navbar';
import {MdRocketLaunch} from "react-icons/md"
const HomePage = () => {
  return (
    <div className="home-page" style={{ backgroundColor: '#0d0e20',padding:"60px 60px 100px 60px" }}>
      <Navbar />
      <div className="container text-center">
        <h6 className="mt-5 fw-bold text-uppercase" style={{color:"red"}}>Web3 Gaming</h6>
        <h1 className="title">Financial Services for <br/> Metaverse and Web3 <br/>Gaming Platforms</h1>
        <p className="mt-3 text_color">XSTRATEGY is a Singapore-based Web3 Management Consulting firm Specialsing in blockchain and <br/> cryptocurrency compilance,fintech,digital finance, and payments.</p>
        <button className="start_btn">Get Started {<MdRocketLaunch/>}</button>
      </div>
    </div>
  );
};

export default HomePage;
