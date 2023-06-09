import React from "react";
import imgTakeoutBox from "../assets/takeout-box.png";
import imgPayment from "../assets/payment.png";
import imgSupport from "../assets/support.png";

const WhatShoppinOffers = () => {
  return (
    <section className="py-10 text-center">
      <div className="container">
        <h3 className="font-bold text-2xl mb-10">What Shoppin Offers!</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <div className="card card-compact bg-sky-50 border border-sky-200 shadow-sm">
            <figure>
              <img src={imgTakeoutBox} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Home Delivery</h2>
            </div>
          </div>
          <div className="card card-compact bg-sky-50 border border-sky-200 shadow-sm">
            <figure>
              <img src={imgPayment} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Cash on Delivery</h2>
            </div>
          </div>
          <div className="card card-compact bg-sky-50 border border-sky-200 shadow-sm">
            <figure>
              <img src={imgSupport} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">24/7 Support</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatShoppinOffers;
