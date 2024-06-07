import React, { useState } from 'react';
import vg from "../assets/contact.jpg";
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        // Log the input values
        console.log(name, email, message);

        // Prepare the data to send
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Replace with your EmailJS service ID, template ID, and user ID
        const serviceID = 'service_q3lq29h';
        const templateID = 'template_3rqy7yx';
        const userID = 'LK0o4qotPYz7_Fy-4';

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Message sent successfully');
                // Clear the form fields after successful submission
                setName("");
                setEmail("");
                setMessage("");
            }, (error) => {
                console.error('FAILED...', error);
                toast.error('Failed to send message');
            });
    };

    return (
        <>
            <div id='contact'>
                <section>
                    <form onSubmit={submitHandler}>
                        <h2>Contact ME</h2>
                        <input 
                            type='text' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder='Your Name' 
                            required 
                        />
                        <input 
                            type='email'  
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder='Your Email' 
                            required 
                        />
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder='Your Message' 
                            required 
                        />
                        <button type='submit'>Send</button>
                    </form>
                </section>
                <aside>
                    <img src={vg} alt='background' />
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
                            <li><a href='#'><i className="zmdi zmdi-github-alt"></i></a></li>
                            <li><a href='#'><i className="zmdi zmdi-linkedin"></i></a></li>
                            <li><a href='#'><i className="zmdi zmdi-instagram"></i></a></li>
                            <li><a href='#'><i className="zmdi zmdi-twitter"></i></a></li>
                            <li><a href='#'><i className="zmdi zmdi-google-maps"></i></a></li>
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
    );
};

export default Contact;
