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

const NYX = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx');
const maybelline = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
const milani = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=milani');
const clinique = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique');
const covergirl = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl');

export { NYX, maybelline, milani, clinique, covergirl }