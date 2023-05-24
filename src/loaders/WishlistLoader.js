import { getWishlist } from "../utils/index.js";

const WishlistLoader = async (_) => {
  const wishlist = getWishlist();

  return await fetch(`https://shoppin.webie.link/products?ids=true`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(wishlist),
  }).then((response) => response.json());
};

export default WishlistLoader;
