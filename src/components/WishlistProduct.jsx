import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BsFillCartDashFill,
  BsFillCartPlusFill,
  BsHeartFill,
} from "react-icons/bs";
import {
  addCart,
  getCart,
  removeCart,
  removeWishlist,
} from "../utils/index.js";

const WishlistProduct = ({ isRemoveWishlist, setRemoveWishlist, product }) => {
  const [isCart, setCart] = useState(false);
  const navigate = useNavigate();
  const { _id: id, name, price, category, seller, img } = product;

  const handleAddCart = (id, name) => {
    addCart(id, true);
    toast.success(name + " has been added to cart.");
    setCart(true);
  };

  const handleRemoveCart = (id, name) => {
    removeCart(id, true);
    toast.warn(name + " has been removed from cart.");
    setCart(false);
  };

  const handleRemoveWishlist = (id, name) => {
    removeWishlist(id);
    toast.warn(name + " has been removed from wishlist.");
    setRemoveWishlist(!isRemoveWishlist);
  };

  useEffect((_) => {
    id in getCart() ? setCart(true) : null;
  }, []);

  return (
    <div className="group card sm:card-side card-compact bg-sky-50 hover:bg-sky-200/60 transition-[background-color] duration-500">
      <figure className="relative sm:max-w-[15rem]">
        <img src={img} alt="" />
        <div className="absolute top-4 left-4 flex items-start opacity-0 group-hover:opacity-100 space-x-1 transition-opacity duration-500">
          {isCart ? (
            <span
              className="hover:text-pink-600 cursor-pointer"
              onClick={(_) => handleRemoveCart(id, name)}
            >
              <BsFillCartDashFill />
            </span>
          ) : (
            <span
              className="hover:text-pink-600 cursor-pointer"
              onClick={(_) => handleAddCart(id, name)}
            >
              <BsFillCartPlusFill />
            </span>
          )}
          <span
            className="hover:text-pink-600 cursor-pointer"
            onClick={(_) => handleRemoveWishlist(id, name)}
          >
            <BsHeartFill />
          </span>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <span className="font-semibold">Price: ${price}</span>
        <span className="font-semibold">Category: {category}</span>
        <span className="font-semibold">Seller: {seller}</span>
        <div className="card-actions mt-5">
          <button
            type="button"
            className="btn btn-sm px-5 bg-[#35bef0] border-none rounded normal-case"
            onClick={(_) => navigate("/shop/" + id)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistProduct;
