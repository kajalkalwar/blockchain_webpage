import React from 'react';
import crypto from "../Assets/crypto.png"
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
function OurMission() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center py-4">
        <div className="col-12">
            <h6 className="heading pt-4">Our Mission</h6>
          <h1 className="fw-bold py-3">What We Do</h1>
          <p className="fs-6 text_color">The XSTRATEGY team provides trusted guidance and advice to Web3 Founders and <br/> C-Suite Executives working in the gaming and metaverse industries.</p>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-6 text-center ">
          <img src={crypto} className="img-fluid" alt="pictures of crypto" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="fw-bold">Enabling Next-Generation <br/>Crypto Payments</h2>
          <div className="py-4">
            <p className="fs-6 text_color">We are subject matter expert in delivering compliant payment software solutions taht power the global web3 gaming and metaverse digital economies.</p>
            <p className="fs-6 text_color">Provisioning of seamless fiat and crypto on-off ramps digital assest payment and fraud prevention fot the blockchain.</p>
          </div>
          <a href="/" className="btn_group">
          Learn More {<MdKeyboardDoubleArrowRight/>}
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
