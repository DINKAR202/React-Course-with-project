"use client"

// components/Form.js
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [submittedData, setSubmittedData] = useState([]); // State to store submitted data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch('/api/save-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Add the submitted data to the state for display
      setSubmittedData((prevData) => [...prevData, formData]);
      setFormData({ name: '', email: '' }); // Reset form
    } else {
      console.error('Error saving data');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data</h2>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            Name: {data.name}, Email: {data.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
