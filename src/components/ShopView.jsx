import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BsFillCartDashFill,
  BsFillCartPlusFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import {
  addCart,
  addWishlist,
  getCart,
  getWishlist,
  removeCart,
  removeWishlist,
} from "../utils/index.js";

const ShopView = ({ isGridView, product }) => {
  const [isWishlist, setWishlist] = useState(false);
  const [isCart, setCart] = useState(false);
  const navigate = useNavigate();
  const { _id: id, name, price, category, seller, img, discount } = product;
  const [discountPrice, setDiscountPrice] = useState(null);

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

  const handleAddWishlist = (id, name) => {
    addWishlist(id);
    toast.success(name + " has been added to wishlist.");
    setWishlist(true);
  };

  const handleRemoveWishlist = (id, name) => {
    removeWishlist(id);
    toast.warn(name + " has been removed from wishlist.");
    setWishlist(false);
  };

  useEffect((_) => {
    discount ? setDiscountPrice(Math.round(price * 0.5)) : null;
  }, []);

  useEffect((_) => {
    id in getCart() ? setCart(true) : null;
    getWishlist().find((productId) => productId === id)
      ? setWishlist(true)
      : null;
  }, []);

  return (
    <div
      className={`group card ${
        !isGridView ? "sm:card-side" : "text-center"
      } card-compact bg-sky-50 hover:bg-sky-200/60 transition-[background-color] duration-500`}
    >
      <figure className={`relative${!isGridView ? " sm:max-w-[15rem]" : ""}`}>
        <img src={img} alt="" />
        <div className="absolute top-4 left-4 flex opacity-0 group-hover:opacity-100 space-x-1 transition-opacity duration-500">
          <span>
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
          </span>
          <span>
            {isWishlist ? (
              <span
                className="hover:text-pink-600 cursor-pointer"
                onClick={(_) => handleRemoveWishlist(id, name)}
              >
                <BsHeartFill />
              </span>
            ) : (
              <span
                className="hover:text-pink-600 cursor-pointer"
                onClick={(_) => handleAddWishlist(id, name)}
              >
                <BsHeart />
              </span>
            )}
          </span>
        </div>
        {discount ? (
          <span className="absolute top-4 right-4 badge badge-primary">
            Sale
          </span>
        ) : null}
        {isGridView ? (
          <div className="absolute bottom-3 left-0 end-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button
              type="button"
              className="btn btn-sm px-5 bg-[#35bef0] border-none rounded normal-case"
              onClick={(_) => navigate("/shop/" + id)}
            >
              View Details
            </button>
          </div>
        ) : null}
      </figure>
      <div className="card-body">
        <h2 className={`card-title${isGridView ? " justify-center" : ""}`}>
          {name}
        </h2>
        <span className="font-semibold">
          {!isGridView ? "Price: " : ""}
          <span>$</span>
          <span>
            {discountPrice ? (
              <span className="text-lg">{discountPrice}</span>
            ) : (
              price
            )}
          </span>
          {discountPrice ? (
            <span className="text-pink-600 line-through decoration-pink-600">
              {price}
            </span>
          ) : null}
        </span>
        {!isGridView ? (
          <>
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
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ShopView;
