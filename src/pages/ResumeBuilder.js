import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', skills: '', experience: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resume Data:', formData);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400" onChange={handleChange} />
        <textarea name="skills" placeholder="Skills" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400" onChange={handleChange}></textarea>
        <textarea name="experience" placeholder="Experience" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400" onChange={handleChange}></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
