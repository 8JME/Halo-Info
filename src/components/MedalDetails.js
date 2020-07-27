import React, {useState, useEffect} from 'react';
import { MEDALS } from '../data/medals';
import '../App.css';


function MedalDetail({ match }) {

  // Removing /medal/ and returning medal id obtained from route using match
  const medalID = match.location.pathname.slice(7);

  // Filtering medal id from route to obtain medal id's object array
  // Stripping away the object from the array, then desctructuring object obtain values from keys
  const matchMedal = MEDALS.filter(medal => medal.id === medalID)[0];
  const {name, description, classification, difficulty} = matchMedal;


  console.log()

    

  return (
    <div>
      <h1 className="medal-detail-name">{name}</h1>
      <div>
      <ul>
        <li><span>Description:</span> {description}</li>
        <li><span>Game Play:</span> {classification}</li>
        <li><span>Difficulty Level:</span> {difficulty}</li>
      </ul>
      </div>
    </div>
  );
}

export default MedalDetail;
