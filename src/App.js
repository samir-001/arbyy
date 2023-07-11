import './App.css';
import "./css/style.css"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from './reducers/events/getEvents';

import Nav from './components/nav';
function App() {
  // var card;
  var card; 
  const dispatch = useDispatch()
  // // dispatch(getEvents)
  
  useEffect(()=>{
    dispatch(getEvents())
  },[])

  const data = useSelector((state) => {
     return state.Events.data
  })
  

 if(data){
  card = data.map((item)=>{
    return (
      <div className='card'>
        <div className='title'>{item.title}</div>
        <div className='text'>{String(item.content).slice(0,30)}</div>
        <div className='icon'>{item.time}</div>
        <div className='icon'>{item.data}</div>
      </div>
    )
  })
 }



  return (
    <div className="App">
      <Nav/>
        <div className='jumbotron'>
          <img className='image-jumbo' src='./jumbo.jpg' alt="image"/>
        </div>
      <div className='container'>
        <div className='input-group'>
          <p className='title'>محرك البحث</p>
          <input type='text' className='input-field' placeholder=''/>
        </div>
        <div className='report-section'>
              {card}
        </div>
      </div>
    </div>
  );
}

export default App;
