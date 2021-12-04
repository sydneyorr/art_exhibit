import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import DerivativePic from './DerivativePic.PNG'

const Derivatives = () => {
  return (
    <div style={{color: 'white'}}>
      <h1 style={{textAlign: 'center'}}>Derivatives</h1>
      <h2>What is a derivative?</h2>
      <p>Derivatives show us the instantaneous rate of change of a function at a given point. They tell us whether a function is increasing or decreasing.</p>
      <TermBox>
        <h3>Example</h3>
        <p>In the old nursery rhyme, “Jack and Jill went up the hill to fetch a pail of water, Jack fell down and broke his crown…”. If we are looking at this statement, we can label the hill as the function in terms of elevation and distance. As Jack and Jill are walking up the hill, our derivative is positive due to their increase in elevation as the hill goes up. Once they reach the top, the hill is at a turning point where they are no longer gaining or losing elevation. This is because the slope of the hill at this turning point is flat. Now as Jack begins to fall, he loses elevation making our derivative negative. 
</p>
      </TermBox>
      <h2>Second Derivative</h2>
      <p>Second derivatives show the instantaneous rate of change of the derivative function. They tell us how a function is increasing or decreasing  (speeding up, slowing down, or increase at the same rate).</p>
      <TermBox>
        <h3>Example</h3>
        <p>In the nursery rhyme example from above, we found our derivative function. If we want to look at how the steepness of the hill changes, we need to analyze the changes in the slope. In other words, while Jack and Jill are navigating the hill, we want to know if, when,  and by how much they are gaining or losing elevation.</p>
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
border: 2px solid indianred;
border-radius: 10px;
background-color: lightsteelblue;
padding: 10px;
margin: 10px;
width: 75%;
color: black;
`

const TermHead = styled.h1`
font-weight: bold;
font-size: 20px;
padding: 10px;
margin: 10px;
`