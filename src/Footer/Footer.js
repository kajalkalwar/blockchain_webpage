import React from 'react';
import {GiTigerHead}from "react-icons/gi"
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"
import {AiFillYoutube} from "react-icons/ai"


function Footer() {
  return (
    <div style={{background:"#0d0e20",padding:"300px 0px 100px 0px"}}>
    <div className="container">
       <div className="row">
        <div className="col-12 col-md-3">
        <div class="d-flex flex-row">
        <GiTigerHead style={{color:"red",fontSize:"40px",marginRight:"15px"}}/>
          <div>
            <p className="fs-3 fw-bold" style={{color:"red"}} >XSTRATEGY</p>
            <p className="fs-6 text-uppercase" style={{color:"red"}}>Singapore</p>
          </div> 
        </div>
          <p className="text_color">XSTRATEGY is a Singapore-based Web3 Management Consulting firm Specialsing in blockchain and cryptocurrency compilance,fintech,digital finance, and payments.</p>
        </div>

        <div className="col-12 col-md-3 list_details">
          <h5 className="data_head">Company</h5>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="col-12 col-md-3 list_details ">
        <h5 className="data_head">Products</h5>
          <ul>
            <li>Transaction Gateway</li>
            <li>Blokchain Wallet</li>
            <li>Crypto Point-of-Sale Device</li>
          </ul>
        </div>

        <div className="col-12 col-md-3 list_details">
        <h5 className="data_head">Services</h5>
          <ul>
            <li>C-Suite Advisory</li>
            <li>Blokchain Banking</li>
            <li>Legal Advisory</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row align-items-center my-4 px-4 py-4">
        <hr/>
        <div className="col-12 col-md-6">
          <p className="text_color">@ 2023 XSTRATEGY. All Rights Reserved</p>
        </div>
        <div className="col-12 col-md-6 text-md-right">
          <div className="d-flex justify-content-end gap-4">
          <div className="social_media"><AiFillLinkedin/></div>
          <div className="social_media"><AiOutlineTwitter/></div>
          <div className="social_media"><BiLogoFacebook/></div>
          <div className="social_media"><AiFillYoutube/></div>
          </div>
        </div>
      </div>

</div>
  );
}

export default Footer;
