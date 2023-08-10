import React from 'react';
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
import legal from "../Assets/legal.png"
import GetInTouch from './GetInTouch';
function LegalAdvisory() {
  return (
    <div style={{background:"#f2d7dc",padding:"100px 0px 200px 0px",position:"relative"}}>
      <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
        <h1 className="fw-bold">Legal Advisory</h1>
          <div className="py-4">
            <p className="text_color">The legal compliance of your Web3 Gaming business is crucial for the success of your launch and onging gaming operations generation event(TGE).</p>
            <p className="text_color">BlockChain Gaming Projects and digital economies supporting different transactionally complex.</p>
          </div>
          <a href="/" className="btn_group">
            Learn More {<MdKeyboardDoubleArrowRight/>}
            </a>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={legal}  className="img-fluid" alt="advisory"/>
        </div>
      </div>
    </div>
    <GetInTouch/>
    </div>
  );
}

export default LegalAdvisory;