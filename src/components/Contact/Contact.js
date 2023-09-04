import React, { useState, useRef } from 'react';
import Navbar from '../NavBar/NavBar';
import arrow from '../../assets/photos/arrow-beige.svg'
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [disabled, setDisabled] = useState(false)


    const form = useRef();


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Configure EmailJS parameters
        const serviceId = 'service_3he2gyt'; // Replace with your EmailJS service ID
        const templateId = 'template_syggb8c'; // Replace with your EmailJS template ID
        const userId = '7pBNhZJLJQJfY9Jcn'; // Replace with your EmailJS user ID

        // Prepare the email data to be sent
        const emailData = {
            from_name: formData.name,
            to_name: 'Client Services Coordination',
            subject: `🫨 Portfolio Inquiry | ${formData.name}`,
            message: `\nHi, my name is ${formData.name} and I'm looking for ${formData.service}\n
            Get in touch with me at ${formData.email}\n\n`,
        };


        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, emailData, userId)
            .then((response) => {
                // Email sent successfully, you can show a success message or redirect the user
                console.log('Email sent!', response);
                setDisabled(true)
                window.location.href = '/thank-you';
            })
            .catch((error) => {
                // Handle error, display an error message, etc.
                console.error('Error sending email:', error);
            });
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>
            <Navbar />
            <div className='contact-container'>
                <p className='get-in-touch'>/ Get in touch</p>
                <p class='schedule'>Schedule a meeting</p>
                <form onSubmit={handleSubmit}>
                <h1 className='contact-sentence'>Hi, my name is <input
                        type="text"
                        placeholder="Your Name"
                        name="name" 
                        value={formData.name} onChange={handleInputChange} required                        className='input'
                    /> and I'm looking for <select
                    className='input'
                    name="service" 
                    value={formData.service} onChange={handleInputChange} required                >
                    <option value=""></option>
                    <option value="a job">a job</option>
                    <option value="a project">a project</option>
                    <option value="an opportunity">an opportunity</option>
                </select>. Get in touch with me at <input
                        type="email"
                        placeholder="Your Email"
                        name="email" 
                        value={formData.email} onChange={handleInputChange} required                        className='input'
                    /></h1>
                    <button className="send-btn" type="submit">Connect <img src={arrow} /></button>
                    </form>
            </div>
        </>

    );
};

export default Contact;
