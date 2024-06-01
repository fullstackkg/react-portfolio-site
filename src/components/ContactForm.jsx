import React from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-form">
      <form action="">
        <div className="form-content">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-content">
          <label htmlFor="name">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-content">
          <label htmlFor="name">Message:</label>
          <textarea name="message" id="message" required></textarea>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
