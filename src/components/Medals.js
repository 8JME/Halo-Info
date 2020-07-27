import React, {useState, useEffect} from 'react';
import '../App.css';
import { MEDALS } from '../data/medals';
import { Card, CardBody,CardHeader, CardTitle } from 'reactstrap';
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
    const medalsList = medals.map(medal => {
      const location = medal.spriteLocation
      const imgPos = {
        backgroundImage: `url('${location.spriteSheetUri}')`,
        backgroundPositionX: -location.left,
        backgroundPositionY: -location.top,
        width: location.width,
        height: location.height,
        
      }
      return (
        <div className="container col-md-3">
        <div className="m-1" key={medal.id}>
          <Card onClick={()=>{}}>
            <CardHeader><CardTitle><Link to={`/medal/${medal.id}`}>{medal.name}</Link></CardTitle></CardHeader>
            <CardBody>
            <img width="100%" style={imgPos} />
            </CardBody>
          </Card>
      </div>
        </div>
        )
    })
  return (
    <div className="row">
      {medalsList}
    </div>
  );
}

export default Medals;
