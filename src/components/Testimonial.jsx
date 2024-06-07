import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>
      <section>
       <TestimonialCard name={"Ritik Lahari"} feedback={"student at NIT JAMSHEDPUR"} />
      
       <TestimonialCard name={"Rahul"} feedback={"student at NIT JAMSHEDPUR"} />
       <TestimonialCard name={"Adarsh"} feedback={"student at NIT JAMSHEDPUR"} />
      </section>
    </div>
  );
};
const TestimonialCard=({name,feedback})=>(
    <article>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/avatar-bg.png' alt='user'/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial
