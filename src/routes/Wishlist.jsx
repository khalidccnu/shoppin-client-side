import React, { useEffect, useState } from "react";
import { getWishlist } from "../utils/index.js";
import WishlistProduct from "../components/WishlistProduct.jsx";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isRemoveWishlist, setRemoveWishlist] = useState(false);

  const handleWishlist = async (_) => {
    const wl = [];
    const wishlistProducts = getWishlist();
    const products = await fetch(`https://shoppin.vercel.app/products`).then(
      (response) => response.json()
    );

    wishlistProducts.forEach((productId) => {
      const wishlistProduct = products.find(
        (product) => product["_id"] === productId
      );
      wl.push(wishlistProduct);
    });

    return wl;
  };

  useEffect(
    (_) => {
      handleWishlist().then((response) => setWishlist(response));
    },
    [isRemoveWishlist]
  );

  return (
    <section className="py-10">
      <div className="container">
        {wishlist.length ? (
          <div className="grid grid-cols-1 gap-5 max-w-sm sm:max-w-2xl mx-auto">
            {wishlist.map((product) => (
              <WishlistProduct
                key={product["_id"]}
                isRemoveWishlist={isRemoveWishlist}
                setRemoveWishlist={setRemoveWishlist}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="alert max-w-xl mx-auto">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>No wishlist product was found.</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
