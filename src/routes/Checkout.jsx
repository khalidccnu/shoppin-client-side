import React, { useState } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { clearCart } from "../utils/index.js";

const Checkout = () => {
  const cart = useLoaderData();
  const [input, setInput] = useState({
    email: "",
    name: "",
    address: "",
    state: "",
    city: "",
    postal: "",
  });
  const navigate = useNavigate();

  const changeInput = ({ target }) => {
    const { name, value } = target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const { email, name, address, state, city, postal } = e.target;

    clearCart();
    navigate("/order-complete");
  };

  return cart.length ? (
    <section className="py-10">
      <div className="container">
        <form
          className="form-control max-w-sm sm:max-w-lg mx-auto space-y-8"
          onSubmit={handleOrder}
        >
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="font-semibold">Contact Information</h3>
              <div className="space-x-2">
                <span className="text-gray-500">Already have an account?</span>
                <Link to="/login" className="text-[#35bef0]">
                  Login
                </Link>
              </div>
            </div>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={input.email}
              className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
              onChange={changeInput}
            />
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Shipping Address</h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full name"
                name="name"
                value={input.name}
                className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Street address"
                name="address"
                value={input.address}
                className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
                onChange={changeInput}
              />
              <div className="flex space-x-5">
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  value={input.state}
                  className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
                  onChange={changeInput}
                />
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={input.city}
                  className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
                  onChange={changeInput}
                />
              </div>
              <div className="flex space-x-5">
                <input
                  type="text"
                  value="Bangladesh"
                  className="input input-sm bg-transparent w-full px-0 border-0 border-b border-b-gray-300 rounded-none text-gray-500 input-disabled"
                />
                <input
                  type="number"
                  placeholder="Postal Code"
                  name="postal"
                  value={input.postal}
                  className="input input-sm w-full px-0 border-0 border-b border-b-gray-300 rounded-none focus:outline-0 text-gray-500"
                  onChange={changeInput}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-sm bg-[#35bef0] border-none rounded normal-case w-full"
          >
            Complete Order
          </button>
        </form>
      </div>
    </section>
  ) : (
    <Navigate to="/cart" />
  );
};

export default Checkout;
