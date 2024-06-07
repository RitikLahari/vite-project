import React, { useRef } from 'react'
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import vg from "../assets/image3.jpg";
import Resume from "../assets/RESUME.png"

const Home = () => {

    const  clientcount=useRef(null);
    const projectcount=useRef(null);
    const animationsClientsCount=()=>{
      animate(0,100 ,{
        duration:1,
        onUpdate:(v)=>(clientcount.current.textContent=v.toFixed()),
      });
    };
    const animationsprojectcount=()=>{
        animate(0,100 ,{
          duration:1,
          onUpdate:(v)=>(projectcount.current.textContent= v.toFixed()),
        });
      };
    const  animations={
        h1: {
            initial:{
                x:"-100%",
                opacity: 0,
            },
            whileInView:{
              x:0,
              opacity: 1,
            },
        },
        button: {
            initial:{
                y:"-100%",
                opacity: 0,
            },
            whileInView:{
              y:0,
              opacity: 1,
            },
        },
    };
  return (
    <div id="home"> 
      <section>
        <div>
           <motion.h1 {...animations.h1}>
            Hi ,I am <br></br> RITIK LAHARI
           </motion.h1>
           <Typewriter options={{
            strings :["A Developer","A Designer","A Creator"],
            autoStart:true,
            loop:true,
            cursor:"",
            wrapperClassName:"typewriterpara"
           }}/>
           <div >
            <a href="mailto:lahariritik@gmail.com">Hire Me</a>
            <a href='#work'>Project</a>
            <a href={Resume} download className='resume'>RESUME</a>
           </div>
           <article>
            <p>
                +<motion.span whileInView={animationsClientsCount} ref={clientcount}></motion.span>
            </p>
            <span>Clients Worldwide</span>
           </article>
           <aside>
            <article>
                <p>
                    +<motion.span whileInView={animationsprojectcount} ref={projectcount}>500</motion.span>
                </p>
                <span>Projects Made</span>
            </article>
            <article data-special>
                <p>Contact</p>
                <span>
                    lahariritik@gmail.com
                </span>
            </article>
           </aside>
        </div>
      </section>
      <section>
        <img src={vg} alt='Ritik'/>
      </section>
    </div>
  )
}

export default Home
