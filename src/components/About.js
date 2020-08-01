import React from 'react';
import '../App.css';
import ImageSlide from './ImageSlides';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function About() {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <hr />
      <h4>Why this pages exist ...</h4>
      <br />
      <p className="paragrap-style">
      This page was created to fill the void of me not being able to 
      find information on medals, vehicles, characters, maps, and things of
      that sort on a single website.
      </p>
      <p className="paragrap-style">
        When there is a void then the need to take up that void was a necessary 
        and enjoyable taks for me.  I hope to build this site out and excited 
        what the Halo universe future brings.  I hope this site serves as a handy
        place to grab Halo gaming information.
      </p>
      <hr />
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
          <ImageSlide />
        </FadeTransform>
    </div>
  );
}

export default About;
