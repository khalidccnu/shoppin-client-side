const HomeLoader = async (_) => {
  const featured = await fetch(
    `${import.meta.env.VITE_API_URL}/products/featured`
  ).then((response) => response.json());

  const discount = await fetch(
    `${import.meta.env.VITE_API_URL}/products/discount`
  ).then((response) => response.json());

  const categories = await fetch(
    `${import.meta.env.VITE_API_URL}/categories`
  ).then((response) => response.json());

  return [featured, discount, categories];
};

export default HomeLoader;
