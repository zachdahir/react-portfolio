import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function ContactMe () {
  
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wquh1a5', 'template_dz7o40r', form.current, 'ADUeJMCIvaqqw1FLD')
        .then((result) => {
            console.log(result.text);
            alert("Your message was sent");
            document.getElementById("contactForm").reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
            <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="bgdark" height="75" width="auto" display="flex">
            <path d="M0 0 L50 100 L100 0 Z" fill="#f4f4f4"></path>
            </svg>
            <div className="contact">
                <div className="container flex">
                <h2 className="text-center display-4 contact-header" id="contact">Contact</h2>
                <h4 className='text-center hlblue'>Have a question or want to work together?</h4>
                
                <form ref={form} id='contactForm' onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="text" id="name" name='name' placeholder="Enter Name..." className="form-control"></input>
                    </div>
                    
                    <div className="form-group">
                        <input type="email" id="name" name='email' placeholder="Enter Email..." className="form-control"></input>
                    </div>
            
                    <div className="form-group">
                        <textarea id="message" name='message' placeholder="Enter Message..." rows="5" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default ContactMe