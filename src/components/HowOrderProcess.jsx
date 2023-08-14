import React from "react";
import imgConnectionChain from "../assets/connection-chain.svg";
import imgDiscover from "../assets/discover.png";
import imgAddToBag from "../assets/add-to-bag.png";
import imgFastShipping from "../assets/fast-shipping.png";
import imgEnjoyProduct from "../assets/enjoy-product.png";

const HowOrderProcess = () => {
  return (
    <section className={`py-10 text-center overflow-hidden`}>
      <div className="container">
        <h3 className="font-bold text-2xl mb-10">How Order Process!</h3>
        <div
          className={`relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`}
        >
          <img
            src={imgConnectionChain}
            alt=""
            className={`hidden lg:block absolute inset-x-0 top-0 -z-[1]`}
            data-aos="fade-up"
          />
          <div data-aos="zoom-out-right">
            <figure className={`max-w-[10rem] mx-auto`}>
              <img src={imgDiscover} alt="" />
            </figure>
            <div className={`mt-5`}>
              <span className="badge bg-cyan-600 border-none mb-3">Step 1</span>
              <h3 className={`font-semibold text-lg`}>Discover</h3>
              <p>Smart finding make it easy to find.</p>
            </div>
          </div>
          <div data-aos="zoom-out-up">
            <figure className={`max-w-[10rem] mx-auto`}>
              <img src={imgAddToBag} alt="" />
            </figure>
            <div className={`mt-5`}>
              <span className="badge bg-sky-600 border-none mb-3">Step 2</span>
              <h3 className={`font-semibold text-lg`}>Add to bag</h3>
              <p>Easily select the correct items and add them to the cart.</p>
            </div>
          </div>
          <div data-aos="zoom-out-down">
            <figure className={`max-w-[10rem] mx-auto`}>
              <img src={imgFastShipping} alt="" />
            </figure>
            <div className={`mt-5`}>
              <span className="badge bg-blue-600 border-none mb-3">Step 3</span>
              <h3 className={`font-semibold text-lg`}>Fast shipping</h3>
              <p>The carrier will confirm and ship quickly to you.</p>
            </div>
          </div>
          <div data-aos="zoom-out-left">
            <figure className={`max-w-[10rem] mx-auto`}>
              <img src={imgEnjoyProduct} alt="" />
            </figure>
            <div className={`mt-5`}>
              <span className="badge bg-indigo-600 border-none mb-3">
                Step 4
              </span>
              <h3 className={`font-semibold text-lg`}>Enjoy the product</h3>
              <p>Have fun and enjoy your 5-star quality products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowOrderProcess;
