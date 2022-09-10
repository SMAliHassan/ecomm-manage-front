const renderProducts = async () => {
  const products = await fetch('127.0.0.1:8000/api/v1/products');

  const productsMarkupArr = products.map(product => {
    return '';
  });
};
