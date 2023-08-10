import React from 'react';
import {BiSolidUserCircle} from "react-icons/bi"
function GetInTouch() {
  return (
   <div style={{background:"#ed3945" ,height: "250px",width: "1000px",padding:"80px",position:"absolute",bottom:"-120px",left:"200px"}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-8">
          <h1 className="text-white">Get in touch</h1>
          <p className="text_color">A well-thought-out international corporate structure with <br/> regulations in place will help you to avoid. </p>
        </div>
        <div className="col-12 col-md-4 text-md-right">
          <button className="contact_btn">
            Contact Us {<BiSolidUserCircle/>}
          </button>
        </div>
      </div>
    </div>
   </div>
  );
}

export default GetInTouch;
