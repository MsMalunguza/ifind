/*import React,{useState} from 'react';
const SignUp = () => {
    const [formData, setFormaData] = useState ({
        FirstName: '',
        LastName: '',
        Email: '',
        PassWord: '',
        confirmPassword: '',
        isAgent: false
    });
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormaData({
            ...formData,
            [name]: type === 'checkbox'? checked : value
        });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Form submitted:',formData);
    };
    
  return(
    <div className="min-h-screen flex items-centre justify-center bg-gray-100">
        <div class name="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-center mb-6">
            <img src="/path-to-logo.png" alt="Logo" className="w-20"/>
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800mb-2">
                Sign Up for iFinf
            </h2>
            <p className="text-gray-600 text-center mb-8">
                Discover the perfect accommodation for your next stay
            </p>
            <form onSubmit={handleSubmit}
            className="space-y-4"
        </div>
    </div>
  )
        

        
    
};
export default SignUp;*/
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAgent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/path-to-logo.png" alt="Logo" className="w-20" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Sign Up for iFind
        </h2>
        <p className="text-gray-600 text-center mb-8">
          discover the perfect accommodation for your next stay
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isAgent"
              checked={formData.isAgent}
              onChange={handleChange}
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Register as Agent/Property owner</span>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <button className="mt-2 w-full p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

