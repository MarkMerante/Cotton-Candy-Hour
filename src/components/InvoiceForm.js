import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InvoiceForm.css';

const InvoiceForm = ({ handleInvoice }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInput = {
      firstName,
      lastName,
      email,
    };

    handleInvoice(userInput);
  };

  return (
    <div className="invoice-form-container">
      <p>Please enter your contact information below:</p>
      <form onSubmit={handleSubmit} className="invoice-form">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          require
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="invoice-form-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

InvoiceForm.propTypes = {
  handleInvoice: PropTypes.func.isRequired,
};

export default InvoiceForm;
