import React from 'react';

import beerFace from './bear-face.svg';

import './Home.scss';

function Home() {
  return (
    <div className="globe__container">
    	<div className="home__itemContainer">
    		<img src={beerFace} className="beerFace" />
    	</div>
    </div>
  );
}

export default Home;