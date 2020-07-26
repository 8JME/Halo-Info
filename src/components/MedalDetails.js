import React, {useState, useEffect} from 'react';
import '../App.css';


function MedalDetail({ match }) {

    useEffect(() => {
        console.log(match);
    },[]);

    const [medals, setItems] = useState([]);

  return (
    <div>
      <h1>Medal</h1>
    </div>
  );
}

export default MedalDetail;
