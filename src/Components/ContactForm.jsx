/* eslint-disable no-unused-vars */
// src/components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS IDs
    const serviceID = 'service_xikwnga';
    const templateID = 'template_gfnb61l';
    const userID = 'tfa-Snb3OURHbcbMB';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatusMessage(`Message sent successfully !`);
        setFormData({ name: '', email: '', message: '' });
        setIsSuccess(true);
      })
      .catch((error) => {
        setStatusMessage('Failed to send message, please try again later.');
        setIsSuccess(false);
      });
  };


  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail} id="contact-form">
        <h4><img title="mobile" src="https://static.vecteezy.com/system/resources/previews/004/956/037/original/phone-call-icon-vector.jpg" width="50px" height="50px"  />        <p style={{display:"inline",width: "150px"}}>6380720250 / 8148932075</p></h4>
        <h4><img title="mail" src="https://static.vecteezy.com/system/resources/previews/020/009/614/non_2x/email-and-mail-icon-black-free-png.png" width="50px" height="50px"  /><p style={{display:"inline",width: "150px"}}>gunasekar17329777557amma@gmail.com</p></h4>

          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email123@example.com"
          />
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
          />
        <br />
        <button type="submit">Send</button>
                {statusMessage && (
            <p className={isSuccess === true ? 'success-message' : 'error-message'}>
            {statusMessage}
            </p>
        )}
      </form>

    </section>
  );
};

export default ContactForm;
