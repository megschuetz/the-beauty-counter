function fetchResponse(url) {
  return (
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw Error(response.statusText)
    })
  );
};

const NYX = fetchResponse('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx');
const maybelline = fetchResponse('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
const milani = fetchResponse('https://makeup-api.herokuapp.com/api/v1/products.json?brand=milani');
const clinique = fetchResponse('https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique');
const covergirl = fetchResponse('https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl');

export { NYX, maybelline, milani, clinique, covergirl }