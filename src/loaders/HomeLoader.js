const HomeLoader = async (_) => {
  const featured = await fetch(
    `https://shoppin.webie.link/products/featured`
  ).then((response) => response.json());

  const discount = await fetch(
    `https://shoppin.webie.link/products/discount`
  ).then((response) => response.json());

  const categories = await fetch(`https://shoppin.webie.link/categories`).then(
    (response) => response.json()
  );

  return [featured, discount, categories];
};

export default HomeLoader;
