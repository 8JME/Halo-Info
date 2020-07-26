import React, {useState, useEffect} from 'react';
import '../App.css';
import { MEDALS } from '../data/medals';
import { Link } from 'react-router-dom';


function Medals() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [medals, setItems] = useState([]);

    const fetchItems = async () => {
        setTimeout(() => {
            const medals = MEDALS;
            console.log(medals);
            setItems(medals);
        },500);
        
        
        // const url = 'https://www.haloapi.com/metadata/h5/metadata/medals';
        // const data = await fetch(url,{});
        // const items = await data.json();
        // console.log(items);
    }
  return (
    <div>
      <div>{
            medals.map(medal => {
              const location = medal.spriteLocation
              const imgPos = {
                backgroundImage: `url('${location.spriteSheetUri}')`,
                backgroundPositionX: -location.left,
                backgroundPositionY: -location.top,
                width: location.width,
                height: location.height,
                
              }
              return (<React.Fragment>
              <h3 key={medal.id}>
                <Link to={`/medal/${medal.id}`}>
                    {medal.name}
                </Link>
              </h3>
              <img  
                style={imgPos}  
              />
              </React.Fragment>)
            })
          }</div>
    </div>
  );
}

export default Medals;
