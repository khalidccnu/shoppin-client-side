const ShopLoader = async (_) => {
  let isGridView = true;
  const shopView = localStorage.getItem("shopView");

  if (shopView) JSON.parse(shopView) !== "grid" ? (isGridView = false) : null;

  const totalProducts = await fetch(
    `https://shoppin.webie.link/products?count=true`
  ).then((response) => response.json());

  return [isGridView, totalProducts];
};

export default ShopLoader;
