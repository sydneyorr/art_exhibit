import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import DerivativePic from './DerivativePic.PNG'

const Derivatives = () => {
  return (
    <div style={{color: 'white'}}>
      <h1>Derivatives</h1>
      <h2>What is a derivative?</h2>
      <p>Derivatives show us the instantaneous rate of change of a function at a given point. They tell us whether a function is increasing or decreasing.</p>
      <TermBox>
        <h3>Example</h3>
        <p>In an old nursery rhyme, Jack and Jill walk up a hill and Jack ends up falling down the hill. If we are looking at this statement, we can label Jack and Jill as the function we are trying to analyze. While they are walking up the hill, our positive derivative due to their increase in altitude as time goes by. When they reach the top of the hill, they stop moving which makes the derivative 0 for however long they are stopped. In other words, their location isn’t changing but time is still ticking. Now as Jack begins to fall down the hill, he is losing altitude over time making our derivative negative. 
</p>
      </TermBox>
      <h2>Second Derivative</h2>
      <p>Second derivatives show the instantaneous rate of change of the derivative function. They tell us how a function is increasing or decreasing  (speeding up, slowing down, or increase at the same rate).</p>
      <TermBox>
        <h3>Example</h3>
        <p>In our nursery rhyme example from above, we found our derivative function. If we want to look at how the steepness of the hill changes, we need to analyze the derivative function. In other words, while Jack and Jill are moving up the hill, we want to know if, when and by how much they are gaining elevation.</p>
      </TermBox>
      <Image src={DerivativePic} style={{display: 'flex', marginTop: '100px', justifyContent: 'center'}}/>
      <p>Figure that models a function, its derivative and its second derivative</p>
    </div>
  );
};

export default Derivatives;
const TermBox = styled.div`
display: flex;
flex-direction: column;
border: 2px solid IndianRed;
border-radius: 10px;
background-color: MistyRose;
padding: 10px;
margin: 10px;
width: 75%;
color: blueviolet;
`

const TermHead = styled.h1`
font-weight: bold;
font-size: 20px;
padding: 10px;
margin: 10px;
`