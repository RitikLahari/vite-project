import React from 'react'
import {motion} from "framer-motion";


const Services = () => {
    const animation={
        whileInView:{
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            opacity:0,
            x:"-100%",
        },
        twoAndThree:{
            opacity:0,
            y:"-100%",
        },
        four:{
            opacity:0,
            y:"100%",
        },
    }
  return (
    <div id='services'>
      <h2>Services</h2>
      <section>
        <motion.div className='serviceBox1' whileInView={animation.whileInView} initial={animation.one}>
            <h3>1+</h3>
            <p>Years Experience</p>
        </motion.div>
        <motion.div className='serviceBox2' whileInView={animation.whileInView} initial={animation.twoAndThree}>

           <span>Web Devlopment</span>
        </motion.div>
        <motion.div className='serviceBox3' whileInView={animation.whileInView} initial={animation.twoAndThree}>
           <span>UI/UX Design</span>
        </motion.div>
        <motion.div className='serviceBox4' whileInView={animation.whileInView} initial={animation.four}>
           <span>Desktop Devlopment</span>
        </motion.div>
      </section>
    </div>
  )
}

export default Services
