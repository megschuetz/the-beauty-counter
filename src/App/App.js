import './App.css';
import React, { useEffect, useState }from 'react'
import fetchResponse from '../apiCalls';
import MakeUpContainer from '../MakeUpContainer/MakeUpContainer';

function App() {

  const [makeUpItems, setMakeUpItems] = useState('')
  

  
  
  
  const checkImage = (allMakeUp) => {
    const hasImg = allMakeUp.filter((makeup) => {
      return makeup.image_link
    })

    setMakeUpItems(hasImg)
  }
  
  const getMakeUp = () => {
    fetchResponse()
      .then(data => checkImage(data))
  }
  
  
  useEffect(() => {
    getMakeUp()
  }, []) 
  

    return (
      <div className="App">
        <h1>TheBeautyCounter</h1>
        {makeUpItems && <MakeUpContainer allMakeUp={makeUpItems}/>}
      </div>
    );
}

export default App;
