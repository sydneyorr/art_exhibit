import '../App.css'
import React, { useState } from "react";
import GoodArt from './GoodArt.jpg'
import { Image } from 'semantic-ui-react';

const Home = () => {
  return (
    <div style={{color: 'white', textAlign: 'center'}}>
      {/* <h1>BRINGING CALCULUS TO LIFE</h1>
      <p>place for cass to add stuff</p> */}
      <Image src={GoodArt} style={{width: '3000px', marginTop: '100px', border: '2px solid black', borderRadius: '50px'}}/>
    </div>
  )
}

export default Home;
