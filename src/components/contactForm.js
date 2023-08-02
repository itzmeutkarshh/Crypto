import emailjs from '@emailjs/browser';
import React, { useRef, useEffect, useState } from 'react';
import './contact.css';

export default function ContactUs() {
  const emailRef = useRef();
  const nameRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init('O7wJ154jARb26dIaI'), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_ptg227r';
    const templateId = 'template_2kcey69';
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
      });
      alert('Email successfully sent. Check inbox.');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <aside className="aside" />
      <form className="form conform" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input ref={nameRef} type="text" placeholder="Enter your name" />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" placeholder="Enter your email" />
        </div>
        <button className="btn" disabled={loading} type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}
