import React, { useState } from "react";
import IsaacNewton from './IsaacNewton.jpg'
import Gottfried from './Gottfried.jpg'

const Origin = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', marginTop: '70px'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
         <h1 style={{fontSize: '30px', color: 'white'}}>What is Calculus?</h1>
         <p style={{fontSize: '18px', marginRight: '70px', color: 'white'}}>Change is inevitable and infinite. It wasn’t until the late 1600s that we were able to better understand how to study the rates at which everything in our universe is moving. This concept is calculus; prior to its development, mathematicians were limited to examining the static nature of objects in their environments. This was problematic due to the fact that the vast majority of things, living or otherwise, experience motion at some point during their existence. 
The operations used in calculus vary from that of basic math because though they integrate similar types of equations, the components involve the relationship of multiple variables and how they are constantly changing.
Calculus is used in conjunction with a multitude of different fields as a necessary component in understanding astronomy, biology, economics, physics and so much more.
</p>
         <h1 style={{fontSize: '30px', color: 'white'}}>Origin and Founder</h1>
          <p style={{fontSize: '18px', marginRight: '70px', color: 'white'}}>Two mathematicians are independently responsible for the founding of calculus: Gottfried Leibniz and Isaac Newton. 
It took a mere two months for Leibniz (1646-1716) to implement his completed theory of differential and integral calculus. He co-founded a scholarly  journal Acta Eruditorium (Reports of Scholars) and used it to introduce Europe to his developments of calculus during the 1680’s. It was Leibniz who coined the term ‘calculus’ and established notations still used today.
Newton (1643-1727) did not publish his cultivation of calculus right away, fearing the unconventional nature of the concept may attract a great deal of negative attention. His exploration stemmed from his previous work with physics and movement. Initially, Newton attempted to describe the speed of a falling object when he found the speed actually increased with every second that went by. The realization that this idea had not yet been mathematically described furthered his exploration of the concept and eventually led to the development of his Fundamental Theorem of Calculus.
</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
          <img style={{margin: '10px', width: '300px', height: 'auto'}} src={IsaacNewton} />
          <p style={{fontWeight: 'bold', textAlign: 'center', fontSize: '15px', color: 'white'}}>ISAAC NEWTON 1642 - 1727</p>
          <img style={{margin: '10px', width: '300px', height: '300px'}} src={Gottfried} />
          <p style={{fontWeight: 'bold', textAlign: 'center', fontSize: '15px', color: 'white'}}>GOTTFRIED LEIBNIZ 1646 - 1716</p>
          </div>
    </div>
  )
}

export default Origin;