const DashboardOverviewLoader = async (_) => {
  const totalProducts = await fetch(
    `https://shoppin.webie.link/products?count=true`
  ).then((response) => response.json());

  const totalOrders = await fetch(
    `https://shoppin.webie.link/orders?count=true`
  ).then((response) => response.json());

  return [totalProducts, totalOrders];
};

export default DashboardOverviewLoader;
