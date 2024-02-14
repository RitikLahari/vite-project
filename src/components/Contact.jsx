import React, { useState } from 'react'
import vg from "../assets/contact.jpg";
import toast from "react-hot-toast";
const Contact = () => {

  
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const submitHandler=(e)=>{
      e.preventDefault();
      console.log(name,email,message);
      toast.success("message send");
    }
  return (
    <>
    <div id='contact'>
        <section>
            <form onSubmit={submitHandler}>
                <h2>Contact ME</h2>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='your name' required></input>
                <input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='your email' required></input>
                <input type='text'  value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='your Message' required></input>
              <button type='submit'>Send</button>
            </form>
        </section>
      <aside>
        <img src={vg} alt='back'></img>
      </aside>
    </div>
      <footer>
    <div className='footer'>
       <div className='wave'>
         <div className='wave' id='wave1'></div>
         <div className='wave' id='wave2'></div>
         <div className='wave' id='wave3'></div>
         <div className='wave' id='wave4'></div>

       </div>
        <div className='social-icon'>
          <ul>
            <li><a href='#'><i class="zmdi zmdi-github-alt"></i></a></li>
            <li><a href='#'><i class="zmdi zmdi-linkedin"></i></a></li>
            <li><a href='#'><i class="zmdi zmdi-instagram"></i></a></li>
            <li><a href='#'><i class="zmdi zmdi-twitter"></i></a></li>
            <li><a href='#'><i class="zmdi zmdi-google-maps"></i></a></li>
            
          </ul>
          <ul className='menu'>
            <li><a href='#'>Home</a></li>
            <li><a href='about'>About</a></li>
            <li><a href='contact'>Contact</a></li>
            <li><a href='register'>Signup</a></li>
            <li><a href='signin'>Login</a></li>
            
          </ul>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Contact
