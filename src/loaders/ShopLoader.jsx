const ShopLoader = async (_) => {
  let isGridView = true;
  const shopView = localStorage.getItem("shopView");

  if (shopView) JSON.parse(shopView) !== "grid" ? (isGridView = false) : null;

  const products = await fetch(`https://shoppin.webie.link/products`).then(
    (response) => response.json()
  );

  return [isGridView, products];
};

export default ShopLoader;
