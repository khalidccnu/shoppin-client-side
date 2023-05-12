import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IKContext, IKImage } from "imagekitio-react";
import { addCart, getCart } from "../utils/index.js";

const TrendingProduct = () => {
  const [trending, setTrending] = useState({});
  const [isCart, setCart] = useState(false);

  const handleAddCart = (id, name) => {
    addCart(id, true);
    toast.success(name + " has been added to cart.");
    setCart(true);
  };

  useEffect((_) => {
    fetch(`https://shoppin.webie.link/products/6457669a9493bacbef325fcb`)
      .then((response) => response.json())
      .then((result) => setTrending(result));
  }, []);

  useEffect(
    (_) => {
      trending["_id"] in getCart() ? setCart(true) : null;
    },
    [trending]
  );

  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/khalidccnu">
      <section className="bg-sky-50">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto py-8">
            <div className="max-w-sm mb-8 sm:mb-0">
              <IKImage
                path="/shoppin/3-stripes-backpack-2.0.png"
                className="w-full object-cover"
              />
            </div>
            <div className="sm:ml-5 space-y-3">
              <h1 className="text-3xl font-bold text-[#35bef0]">
                Unique & Trending Product
              </h1>
              <div className="text-gray-700">
                <h5>{trending.name}</h5>
                <span>Price: ${trending.price}</span>
              </div>
              {isCart ? (
                <button
                  type="button"
                  className="btn btn-sm px-5 border-none rounded normal-case"
                  disabled={true}
                >
                  Already added!
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-sm px-5 bg-[#35bef0] border-none rounded normal-case"
                  onClick={(_) => handleAddCart(trending["_id"], trending.name)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </IKContext>
  );
};

export default TrendingProduct;
