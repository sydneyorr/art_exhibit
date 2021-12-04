import React from 'react';
import styled from 'styled-components'
import { Image } from 'semantic-ui-react';

const Terminology = () => {

 const terms = [
   {
     head: 'Constant Function',
     body: 'asdf'
  },
  {
    head: 'asdf',
    body: 'asdf'
  }
 ]


  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    <div style={{color: 'white', alignItems: 'flex-start', marginRight: '60px'}}>
      <h2>Important terminology</h2>
      <h3>Differentiable</h3>
      <ul><li>A function is differentiable at some point if there is a defined derivative at that point.</li></ul>
      <h3>Continuous</h3>
      <ul><li>A function is continuous if it has no breaks or gaps. The h(x) function in figure 1 models a continuous function, whereas function f(x) shows a gap where x=1 and is therefore not continuous.</li></ul>
      <h3>Concavity</h3>
      <ul><li>Concavity is directly related to derivatives and second derivatives. Concave up is the result of a derivative that starts out negative, is briefly 0, and then becomes positive. The second derivative of a concave up function is always positive. Similarly, a function that is concave down starts with a positive derivative, is briefly 0, and then is negative. The second derivative of this function will be negative.</li></ul>
      <h3>Domain</h3>
      <ul><li>The domain of a function consists of all the possible values of the independent variable (x-axis).</li></ul>
      <h3>Limits</h3>
      <ul><li>The limit is the value of a function as it gets closer and closer to some number in the domain. In figure 1, we can see in each function that as x approaches 1, the value gets closer and closer to 3.</li></ul>
      <h3>Tangent lines</h3>
      <ul><li>A tangent line is a line that touches a point on a curve. It must only touch one point and the slope of the tangent line is the slope of the function at that particular point. This is also called the instantaneous rate of change. Tangent Line examples are modeled in figure 2.</li></ul>
      <h3>Secant lines</h3>
      <ul><li>A secant line is a line that touches two different points of the same function. This line is used to calculate the average rate of change between these two points. Secant line examples are modeled in figure 3.</li></ul>
      <h3>Extreme Values</h3>
      <ul><li>For some continuous interval on a function there must be a maximum and a minimum in that interval. These are called the extreme values.</li></ul>
      <h3>Global Optimization</h3>
      <ul><li>Global optimization is the method of finding the global minima and maxima of a function.</li></ul>
      <h3>Applied Optimization</h3>
      <ul><li>Applied optimization is the method of maximizing or minimizing a quantity in a practical problem.</li></ul>
      <h3>Related Rates</h3>
      <ul><li>When multiple quantities are related through an equation and are changing over time, we can differentiate that equation to find the related rates.
</li></ul>
    </div>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    <Image src="https://activecalculus.org/single/images/1_7_Cont.svg" style={{height: '350px'}}/>
    <p style={{textAlign: 'center'}}>Figure 1</p>
    </div>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    <Image src="https://activecalculus.org/single/images/1_8_Options.svg" style={{height: '350px'}}/>
    <p style={{textAlign: 'center'}}>Figure 2</p>
    </div>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    <Image src="https://activecalculus.org/single/images/1_3_SecToTanSeq.svg" style={{height: '350px'}}/>
    <p style={{textAlign: 'center'}}>Figure 3</p>
    </div>
    </div>
    </div>
  );
};

export default Terminology;

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

