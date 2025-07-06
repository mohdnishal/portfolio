import React, { useState } from 'react';
import './contact.css';
import { FaLocationCrosshairs,FaEnvelope} from "react-icons/fa6";
import { IoIosCall,IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name:formData.name,
        from_email:formData.email,
        message:formData.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(()=>{
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
    }).catch((error)=>{
      console.error('EmailJS Error:', error);
       alert('Failed to send message. Please try again.');
    })

    
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><IoMdMail /></div>
              <div className='contact-label'><h4>Email</h4><p>nishalutd@gmail.com</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><IoIosCall /></div>
              <div className='contact-label'><h4>Phone</h4><p>+91 9946158519</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FaLocationCrosshairs /></div>
              <div className='contact-label'><h4>Kondotty, Malappuram</h4><p>Kerala, India</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
