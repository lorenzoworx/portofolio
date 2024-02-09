import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import './styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    website: '',
    message: '',
  })

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    setFormErrors(errors);
    return Object.keys(errors.length === 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
  
    if (isFormValid) {
      try {
        const response = await fetch('https://formspree.io/f/mayrewyk', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Form submitted successfully');
          setFormData({
            name: '',
            email: '',
            number: '',
            website: '',
            message: '',
          });
          setFormErrors({});
          setFormSubmitted(true);
        } else {
          console.error('Form submission failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error.message);
      }
    }
  };

  return(
    <>
    <form className='contact-form' id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mayrewyk" method="post" onSubmit={handleSubmit}>
      <div id="fs-frm-inputs" className='contact-grid'>
        <div>
          <label for="full-name">Full Name</label>
          <input className="input-field" type="text" name="name" id="full-name" placeholder="Surname Firstname Others" required="" onChange={handleChange} value={formData.name}></input>
        </div>
        <div>
          <label for="email-address">Email Address</label>
          <input className="input-field" type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" onChange={handleChange} value={formData.email}></input>
        </div>
        <div>
          <label for="phone-number">Phone Number</label>
          <input className="input-field" type="number" name="number" id="phone-number" placeholder="Phone Number" onChange={handleChange} value={formData.number}></input>
        </div>
        <div>
          <label for="website">Website</label>
          <input className="input-field" type="text" name="web-site" id="website" placeholder="Website" onChange={handleChange} value={formData.name}></input>
        </div>
        <div className="double-width">
          <label for="message">Message</label>
          <textarea rows="5" name="message" id="message" placeholder="Type your message here" required="" onChange={handleChange} value={formData.message}></textarea>
        </div>
        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
      </div>
      <div className='submit'>
        <input type="submit" value="Submit"></input>
        {Object.keys(formErrors).map((errorField) => (
        <div key={errorField} className="error-message">
          {formErrors[errorField]}
        </div>
      ))}

      {formSubmitted && <div className="success-message">Form submitted successfully!</div>}

      </div>
      <div className='contact-links'>
        <Link to='https://github.com/lorenzoworx'>
          <FaIcons.FaGithubSquare className='contact-icon' />        
        </Link>
        <Link>
          <FaIcons.FaTwitterSquare className='contact-icon' />        
        </Link>
        <Link to="https://www.linkedin.com/in/oshokeokolo/">
          <FaIcons.FaLinkedin className='contact-icon' />        
        </Link>
      </div>
    </form>
    </>  
  )
};

export default Contact;
