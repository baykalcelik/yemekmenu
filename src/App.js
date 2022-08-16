import veri from './data.js';
import './App.css';
import Card from './Card';
import {useState} from 'react';




function App() {

  const [kartlar, setKartlar] = useState(veri);
  const [filtre, setFiltre] = useState("all");

  return (
    <div className="App">
            <p id="header"> Our Menu</p>
            <div id="smallLine"></div>
            <div id = "filters">
              <button className='filterBtn' id="all" onClick={()=>{setFiltre("");}}>All</button>
              <button className='filterBtn' id="breakfast" onClick={()=>{setFiltre("breakfast");}}>Breakfast</button>
              <button className='filterBtn' id="lunch" onClick={()=>{setFiltre("lunch");}}>Lunch</button>
              <button className='filterBtn' id="shakes" onClick={()=>{setFiltre("shakes");}}>Shakes</button>

            </div>
            <div id="kartlar">
              {kartlar.map((item, index)=>{
                
                if(item.category === filtre ){
                  return <Card key={index} category={item.category}    title={item.title}   desc={item.desc}      price={item.price}  img={item.img}   />
                }
            
                if(filtre === "" ){
                  return <Card key={index} category={item.category}    title={item.title}   desc={item.desc}      price={item.price}  img={item.img}   />
                }

            })}
            </div>
    </div>
  );
}

export default App;
