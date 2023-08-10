import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import blockChain from "../Assets/blockChain.png";
function BlockChain() {
  return (
    <div style={{ background: "#faf5f2", padding: "150px 0px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h1 className="fw-bold">Blockchain Banking</h1>
            <div className="py-4">
              <p className="text_color">
                XSTRATEGY is partnered with numerous crypto-friendly banks that
                provid comprehensive banking services.
              </p>
              <p className="text_color">
                For both established and young enterprises from the blockchain,
                fintech, and cryptocurrency sectors so that you can concentrate
                on your core business-developing and publishing games!
              </p>
            </div>
            s
            <a href="/" className="btn_group">
              Learn More {<MdKeyboardDoubleArrowRight />}
            </a>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={blockChain} className="img-fluid" alt="blockchain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockChain;
