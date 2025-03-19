import React from 'react'
import './ContactPage.css';

function ContactPage() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>
        Have questions or want to work with us? Fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows="6"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactPage;
