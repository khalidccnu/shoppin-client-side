import { getWishlist } from "../utils/index.js";

const WishlistLoader = async (_) => {
  const wishlist = [];
  const wishlistProducts = getWishlist();
  const products = await fetch(`https://shoppin.webie.link/products`).then(
    (response) => response.json()
  );

  wishlistProducts.forEach((productId) => {
    const wishlistProduct = products.find(
      (product) => product["_id"] === productId
    );
    wishlist.push(wishlistProduct);
  });

  return wishlist;
};

export default WishlistLoader;
