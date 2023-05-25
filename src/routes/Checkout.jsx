import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { clearCart, shoppingCartCalc } from "../utils/index.js";
import { AuthContext } from "../providers/AuthProvider.jsx";

const Checkout = () => {
  const cart = useLoaderData();
  const [cartCalc, setCartCalc] = useState({
    totalPrice: 0,
    totalShippingCharge: 0,
    grandTotal: 0,
  });
  const { loading, userInfo } = useContext(AuthContext);
  const [input, setInput] = useState({
    email: "",
    name: "",
    address: "",
    state: "",
    city: "",
    postal: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const changeInput = ({ target }) => {
    const { name, value } = target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const { email, name, address, state, city, postal } = e.target;

    const products = cart.map((product) => {
      return {
        _id: product._id,
        price: product.discount
          ? Math.round(product.price * 0.5)
          : product.price,
        quantity: product.quantity,
      };
    });

    fetch(`https://shoppin.webie.link/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        products,
        totalPrice: cartCalc.totalPrice,
        totalShippingCharge: cartCalc.totalShippingCharge,
        grandTotal: cartCalc.grandTotal,
        ct_key: userInfo?.uid || email.value,
        ct_name: name.value,
        ct_street: address.value,
        ct_state: state.value,
        ct_city: city.value,
        ct_postal: parseInt(postal.value),
      }),
    }).then((_) => {
      clearCart();
      navigate("/order-complete", { state: { fromURL: location } });
    });
  };

  useEffect((_) => {
    const calc = shoppingCartCalc(cart);
    setCartCalc({ ...calc });
  }, []);

  useEffect(
    (_) => {
      if (userInfo) {
        const { email, displayName, street, state, city, postal } = userInfo;

        setInput({
          email,
          name: displayName,
          address: street,
          state,
          city,
          postal,
        });
      }
    },
    [userInfo]
  );

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
              {!loading && !userInfo ? (
                <div className="space-x-2">
                  <span className="text-gray-500">
                    Already have an account?
                  </span>
                  <Link
                    to="/login"
                    state={{ fromURL: location }}
                    className="text-[#35bef0]"
                  >
                    Login
                  </Link>
                </div>
              ) : null}
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
