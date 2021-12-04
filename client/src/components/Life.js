import React from 'react';
import { Image } from 'semantic-ui-react';

const Life = () => {
  return (
    <div style={{color: 'white'}}>
      <h1 style={{textAlign: 'center'}}>Relates to Life</h1>
      <ul style={{fontSize: '20px'}}>
        <li style={{margin: '10px'}}>The rise and fall of economies</li>
        <li style={{margin: '10px'}}>Analysis of altitude and speed</li>
        <li style={{margin: '10px'}}>Rates of radioactive decay in chemistry</li>
        <li style={{margin: '10px'}}>Prediction of birth and death rates</li>
        {/* <Image src="data:image/png;base64,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"/> */}
        <li style={{margin: '10px'}}>Gravity</li>
        <li style={{margin: '10px'}}>Robotics</li>
        <li style={{margin: '10px'}}>Engineering</li>
        <li style={{margin: '10px'}}>Artificial Intelligence</li>
        <li style={{margin: '10px'}}>Charting the orbits of planets and stars, as well as the expansion of the universe itself</li>
        {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKBY0hItGK4gf1iXL5-u_VnMjhNOpCUi89w&usqp=CAU"/> */}
        <li style={{margin: '10px'}}>Video games</li>
        <li style={{margin: '10px'}}>Following the paths of electrons and protons</li>
        <li style={{margin: '10px'}}>Measuring the spread of infectious diseases, such as COVID-19</li>
        {/* <Image src="data:image/png;base64,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"/> */}
      </ul>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Image style={{margin: '20px'}} src="data:image/png;base64,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"/>
      <Image style={{margin: '20px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKBY0hItGK4gf1iXL5-u_VnMjhNOpCUi89w&usqp=CAU"/>
      <Image style={{margin: '20px'}} src="data:image/png;base64,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"/>
        </div>
        <p style={{fontSize: '20px'}}>Applied Optimization is another useful concept within the realm of calculus. Optimization refers to the process of identifying the maximum or minimum value of a particular function that is confined by specific limitations. One application of optimization would be maximizing the area contained by a fence.</p>
        <p style={{fontSize: '20px'}}>When multiple quantities are related through an equation and are changing over time, we can differentiate that equation to find the related rates. Real life examples of related rates include the movement of a shadow, the leaking of a conical tank, the height of a conical pile of, etc.</p>
    </div>
  );
};

export default Life;