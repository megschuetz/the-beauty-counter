import './App.css';
import React, { useEffect, useState }from 'react'
import { NYX, maybelline, milani, clinique, covergirl, smashbox } from '../apiCalls';
import MakeUpContainer from '../MakeUpContainer/MakeUpContainer';
import { Route } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

function App() {

  const [makeUpItems, setMakeUpItems] = useState('');
  const [makeUpByType, setMakeUpByType] = useState('');
  
  
  const getMakeUp = () => {
    Promise.all([NYX, maybelline, milani, clinique, covergirl, smashbox])
      .then(data => setMakeUpItems(data.flat()))
  };

  const filterByType = (type) => {
    console.log('filterbytype function here')
    const filteredItems = makeUpItems.filter((makeup) => makeup.product_type === type)
    setMakeUpByType(filteredItems)
    console.log('makeupbytype', makeUpByType)
  };
  
  useEffect(() => {
    getMakeUp()
  }, []);
  

  return (
    <div className="App">
      <h1>TheBeautyCounter</h1>
    
      {makeUpItems && 
      <div>
        <Dropdown allMakeUp={makeUpItems}/>
        <Route exact path='/' render={() => <MakeUpContainer allMakeUp={makeUpItems}/>}/>
        <Route exact path='/:product_type' render={({ match }) => 
        <MakeUpContainer allMakeUp={makeUpByType} type={match.params.product_type} filterByType={filterByType}/>
      }/>
      </div>
      }
    </div>
  );
};

export default App;
