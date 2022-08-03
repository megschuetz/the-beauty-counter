function fetchResponse(url) {
  return (
  fetch(url)
    .then(response => response.json())
  )
}

const NYX = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
const maybelline = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
const milani = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=milani')
const clinique = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique')
const covergirl = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl')
const smashbox = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox')

export { NYX, maybelline, milani, clinique, covergirl, smashbox }