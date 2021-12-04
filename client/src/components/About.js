import React from 'react';
import { Image } from 'semantic-ui-react';

const About = () => {
  return (
    <>
    <img src='./MEbackground.JPG' alt='cassidy' style={{width: '200px', height: '200px' }}/>
    <div>
      <p style={styles.paragraph}>
          As a straight, white, female growing up on the east side of Salt Lake City, I am very fortunate and grateful for the learning environment I’ve grown so accustomed to. The members of my family are all well-educated individuals and are the best support system I could ask for. All in all, the resources available to me have played a huge role in my education today and will continue to help me in the future. 
     </p>
      <p style={styles.paragraph}>  I remember having a rough start when it came to mathematics. My next door neighbor and best friend was and continues to be one of the smartest people I know. In elementary school, everything came so easily to him. He made it into the ‘gifted and talented’ program and I didn’t, though I tried very hard to match his skill-set and academic achievements. I now realize that those frustrating moments in my early childhood were the challenges that helped me become the mathematician I am today. </p>
    <p style={styles.paragraph}> In high school my love for math flourished as did my mathematical capabilities. I learned to enjoy the lack of subjective thinking that comes with math. The creativity that English class demanded was exhausting so when most of what I learned in math had an absolute ‘right’ answer, it became my favorite subject (though now I know not all math is like this). Once I started taking programming classes and applying my knowledge, math became EVEN more fun.</p>
    <p style={styles.paragraph}> I love math. It is hard, complicated and always proving me wrong. It is also a fun, motivating and fascinating subject that is well worth the work to me. There are still a few topics that I find hard to grasp or hard to remember, but I almost always figure it out in the end. Writing about math however, is not a strong suit of mine (hah!).
</p>
<p style={styles.paragraph}>During this calculus course, I have come to discover how many real world problems can be approximated and/or solved using calculus. I hadn't realized the benefits that knowing how to find limits for example, could have on situations where the domain ranges to infinity or from negative infinity. I also discovered during this course that there are no perfect circles. This seems small, but our perfect circle task opened up my mind. In this task, I came to the conclusion that there's no evidence of the existence of perfect circles in the physical world. That got me thinking, where was this conclusion coming from? It came from humans which I then realized that there's no evidence of perfect circles in human reality. There are so many things in this universe that us humans either do not understand or do not even know about. But, with the help of newfound knowledge, skills and machinery, we continue to work towards understanding or solving unknowns. When I think of calculus now, I see it as a tool that is used to find what is unknown. To value mathematics isn't enough. We all rely upon mathematics in everyday life and our future relies on mathematics as well.</p>
    </div>
    </>
  );
};

export default About;

const styles = 
{
  paragraph: {
    textIndent: '40px'
  }
}

