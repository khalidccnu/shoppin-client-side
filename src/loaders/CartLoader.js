import { getCart } from "../utils/index.js";

const CartLoader = async (_) => {
  const cart = [];
  const cartProducts = getCart();
  const products = await fetch(`https://shoppin.webie.link/products`).then(
    (response) => response.json()
  );

  for (let productId in cartProducts) {
    const cartProduct = products.find(
      (product) => product["_id"] === productId
    );
    cart.push({ ...cartProduct, quantity: cartProducts[productId] });
  }

  return cart;
};

export default CartLoader;
