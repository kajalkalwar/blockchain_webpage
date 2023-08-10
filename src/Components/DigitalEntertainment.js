import React from 'react';
import {MdExplore} from "react-icons/md"
import {SiMicrosoftexcel} from "react-icons/si"
import { BsCurrencyDollar } from "react-icons/bs";
import PaymentPlatform from './PaymentPlatform';
function DigitalEntertainment() {
  return (
    <div style={{background:"#0d0e20",padding:"100px 0px",marginTop:"100px"}}>
      <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h6 className="heading">Digital Entertainment</h6>
          <p className="fw-bold fs-2 text-white">Web3 Gaming and Digital <br/>Entertainment Brands</p>
          <p className=" fs-6 text_color">We are subject matter expert in delivering compliant payment software solutions taht power the global web3 gaming and metaverse digital economies.</p>
          <p className=" fs-6 text_color">Provisioning of seamless fiat and crypto on-off ramps digital assest payment and fraud prevention fot the blockchain.</p>
          <button className="explore_btn text-white mt-4">Explore More {<MdExplore/>}</button>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-3 p-4" style={{background:"#121325"}}>
                <SiMicrosoftexcel className="excel_icon"/>
                <div className="card-body">
                  <h3 className="card-title text-white">Mobile and Web SDK</h3>
                  <p className="card-text text_color fs-6">Provide fast Frictionaless payment experience in ios and android mobile apps and web3 e-marketpalce websites for player everyone.</p>
                  <a href="/" className="card_btn">
                    Learn More →
                  </a>
                </div>
          </div>
          <div className="card mb-3 p-4" style={{background:"#121325"}}>
                <BsCurrencyDollar className="dollar_icon"/>   
                <div className="card-body">
                  <h3 className="card-title text-white">Reduce Development costs</h3>
                  <p className="card-text text_color fs-6">By eliminating integration time, reducing investment cost and relying on XSTRATEGY Product Owners nd Development Teams to continuously.</p>
                  <a href="/" className="card_btn">
                    Learn More →
                  </a>
                </div>
          </div>
        </div>
      </div>
    </div>
    <PaymentPlatform/>
    </div>
  );
}

export default DigitalEntertainment
;
