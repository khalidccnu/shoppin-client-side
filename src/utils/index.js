export const filterProducts = async (_) => {
  const featured = await fetch(
    `https://shoppin.vercel.app/products/featured`
  ).then((response) => response.json());

  const discount = await fetch(
    `https://shoppin.vercel.app/products/discount`
  ).then((response) => response.json());

  return [featured, discount];
};

export const getCart = (_) => {
  let cart = {};
  const cartProducts = localStorage.getItem("cart");

  if (cartProducts) cart = JSON.parse(cartProducts);

  return cart;
};

export const addCart = (id, shortCart) => {
  const cart = getCart();

  id in cart ? (!shortCart ? cart[id]++ : null) : (cart[id] = 1);

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCart = (id, shortCart) => {
  const cart = getCart();

  !shortCart ? (cart[id] > 0 ? cart[id]-- : null) : delete cart[id];

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getWishlist = (_) => {
  let wishlist = [];
  const wishlistProducts = localStorage.getItem("wishlist");

  if (wishlistProducts) wishlist = JSON.parse(wishlistProducts);

  return wishlist;
};

export const addWishlist = (id) => {
  const wishlist = getWishlist();
  let isExist = wishlist.find((productId) => productId === id);

  !isExist ? wishlist.push(id) : null;

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const removeWishlist = (id) => {
  const wishlist = getWishlist();

  wishlist.splice(wishlist.indexOf(id), 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
