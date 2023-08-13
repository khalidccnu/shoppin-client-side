import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-sky-50 overflow-y-hidden">
      <div className="container">
        <div className="max-w-2xl mx-auto py-16" data-aos="fade-up">
          <h3 className="font-bold text-2xl mb-3 text-[#35bef0]">
            Our Newsletter
          </h3>
          <div className={`relative flex`}>
            <span
              className={`absolute left-3 top-1/2 -translate-y-1/2 text-lg`}
            >
              <FaEnvelope />
            </span>
            <input
              placeholder="Email address"
              type="email"
              value={email}
              className="input input-md input-bordered border-[#35bef0] rounded-none w-full pl-9 focus:outline-0"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={`btn btn-md bg-[#35bef0] border-none rounded-none`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
