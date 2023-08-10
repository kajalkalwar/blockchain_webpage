import React from 'react';
import officeAdvisory from "../Assets/officeAdvisory.png"
import {MdKeyboardDoubleArrowRight} from "react-icons/md"

function FamilyOffice() {
  return (
   <div style={{background:"#fbfbfb",padding:"100px 0px"}}>
      <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center">
          <img src={officeAdvisory} className="img-fluid" alt="advisory" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="fw-bold">Family Office Advisory</h1>
          <div className="py-4">
            <p className="text_color" >Our expert team offers comprehensive and customised family office advisory services.</p>
            <p className="text_color">We develop a personalised strategy for investment management, tax planning, estate planning legal services and more. Trust us to manage your family wealth's effectively</p>
          </div>
          <a href="/" className="btn_group">
            Learn More {<MdKeyboardDoubleArrowRight/>}
          </a>
        </div>
      </div>
    </div>
   </div>
  );
}

export default FamilyOffice;