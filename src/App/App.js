import './App.css';
import React, { useEffect, useState }from 'react'
import fetchResponse from '../apiCalls';
import MakeUpContainer from '../MakeUpContainer/MakeUpContainer';

function App() {

  const [makeUpItems, setMakeUpItems] = useState('')
  
  
  const getMakeUp = () => {
    // const NYX = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
    // const maybelline = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    // const milani = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=milani')
    const clinique = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique')
    // const covergirl = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl')
    // const smashbox = fetchResponse('http://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox')
   
    // Promise.all([NYX, maybelline, milani, clinique, covergirl, smashbox])
      .then(data => setMakeUpItems(data))
  }
  
  
  useEffect(() => {
    getMakeUp()
  }, []) 
  

    return (
      <div className="App">
        <h1>TheBeautyCounter</h1>
        <Dropdown />
        {makeUpItems && <MakeUpContainer allMakeUp={makeUpItems}/>}
      </div>
    );
}

export default App;
