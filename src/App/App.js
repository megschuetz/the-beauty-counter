import './App.css';
import React, { useEffect, useState }from 'react'
import { NYX, maybelline, milani, clinique, covergirl} from '../apiCalls';
import MakeUpContainer from '../MakeUpContainer/MakeUpContainer';
import ErrorMessage from '../ErrorPage/ErrorPage';
import { Route } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

function App() {

  const [makeUpItems, setMakeUpItems] = useState([]);
  const [makeUpByType, setMakeUpByType] = useState([]);
  const [error, setError] = useState('');

  const shuffleMakeUp = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  };

  const getMakeUp = () => {
    Promise.all([NYX, maybelline, milani, clinique, covergirl])
      .then(data => {
        const shuffled = shuffleMakeUp(data.flat())
        setMakeUpItems(shuffled)
    })
      .catch(error => setError(error))
  };

  const filterByType = (type) => {
    const filteredItems = makeUpItems.filter((makeup) => makeup.product_type === type)
    setMakeUpByType(filteredItems)
  };
  
  useEffect(() => {
    getMakeUp()
  }, []);
  

  return (
    <div className="App">
      {error ? <div><ErrorMessage /></div> : makeUpItems.length === 0 ?  
      <div className='loading'>
        <p className='patience'>patience is your superpower</p>
        <ReactLoading type={'spokes'} color={'white'} height={'10%'} width={'10%'} />
      </div> : 
      <div>
        <div className='header'>
          <h4>· wild spirit, soft heart, sweet soul ·</h4>
          <div className="title">
            <h2 className='shown-title'>TheBeautyCounter</h2>
            <h2>TheBeautyCounter</h2>
          </div>
          <Dropdown />
        </div>
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

App.propTypes = {
  makeUpItems: PropTypes.array,
  makeUpByType: PropTypes.array,
  error: PropTypes.string
}
