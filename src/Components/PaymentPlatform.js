import React from 'react';
import {AiOutlineTransaction} from "react-icons/ai"
import {MdEscalator} from "react-icons/md"
import {MdVerifiedUser} from "react-icons/md"
import {MdBorderLeft} from "react-icons/md"
import{MdPersonPinCircle} from "react-icons/md"
import {DiHtml53DEffects} from "react-icons/di"

function PaymentPlatform() {
  const cardsData = [
    { icon: AiOutlineTransaction, title: 'Fast', text: 'Transactions settel is less than 5 seconds.' },
    { icon: MdEscalator, title: 'Scalable', text: 'Process thounsands of transactions/second.' },
    { icon: MdVerifiedUser, title: 'Secure', text: 'Significantly reduces the potential for fraud.' },
    { icon: MdBorderLeft, title: 'Borderless', text: 'Payments are global. The location of the sender or does not matter.' },
    { icon: MdPersonPinCircle, title: 'Inculsive', text: 'Anyone with smartphone can participate.' },
    { icon: DiHtml53DEffects, title: 'Efficient', text: 'Use an efficient proof-of-stake carbon-neutral blockchain.' },
  ];
  return (
    <div className="container">
      <div className="row justify-content-center text-center" style={{paddingTop:"100px"}}>
        <div className="col-12">
          <h6 className="heading"> Payment Platform</h6>
          <h1 className="fw-bold text-white py-4">Our BlockChain-based <br/> digital payment platform</h1>
          <p className="text_color fs-6">Through white-label or bespoke custodial or non-custodial wallet solutions, web3 <br/> Gaming companies can access an extensive.</p>
        </div>
      </div>

      {[0, 1].map((rowIndex) => (
        <div className="row text-center" key={rowIndex}>
          {cardsData.slice(rowIndex * 3, (rowIndex + 1) * 3).map((card, index) => (
            <div className="col-12 col-md-4 mb-3" key={index}>
              <div className="card" style={{background:"#121325",marginTop:"40px",width:'400px',height:"220px"}}>
                <div className="card-body">
                  <card.icon className="icons"/>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-text text_color">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PaymentPlatform;
