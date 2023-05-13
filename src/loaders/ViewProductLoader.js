const ViewProductLoader = async (id) => {
  return await fetch(`https://shoppin.webie.link/products?id=${id}`).then(
    (response) => response.json()
  );
};

export default ViewProductLoader;
