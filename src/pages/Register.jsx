import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useLoading from '../components/utils/useLoading';
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');
  const [LoadBul, setLoading] = useLoading();
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm password is required';
      isValid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(errors);
    setLoading(false);
    return isValid;
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 0) {
      strength++;
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength++;
      }
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        strength++;
      }
      if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength++;
      }
    }
    setPasswordStrength(strength);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (validateForm()) {
      try {
        const response = await axios.post('/user/register', {
          name,
          email,
          password,
          confirmPassword,
        });

        if (response?.data && response.data.userId) {
          setLoading(false);
          navigate('/login');
        }
        setBackendError('');
      } catch (error) {
        console.error(error);
        if (error.response) {
          setBackendError(error.response.data.error);
        } else {
          setBackendError('Error while creating user');
        }
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pri  min-h-screen flex items-center justify-center flex-col gap-10 py-4">
      <h1 className="text-white mb-6">Register</h1>
      <LoadBul />
      <div className="bg-white p-10 flex flex-col gap-10 items-center rounded-2xl shadow-2xl w-[80%] max-w-2xl">
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 w-full">
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-400 px-3 py-2 rounded"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-400 px-3 py-2 rounded"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-400 px-3 py-2 rounded"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                calculatePasswordStrength(event.target.value);
              }}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}
            {passwordStrength > 0 && (
              <div className="flex gap-2 mt-2">
                <span
                  className={`flex-1 h-2 rounded ${
                    passwordStrength > 0 ? 'bg-red-500' : 'bg-gray-400'
                  }`}
                ></span>
                <span
                  className={`flex-1 h-2 rounded ${
                    passwordStrength > 1 ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}
                ></span>
                <span
                  className={`flex-1 h-2 rounded ${
                    passwordStrength > 2 ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                ></span>
                <span
                  className={`flex-1 h-2 rounded ${
                    passwordStrength > 3 ? 'bg-blue-500' : 'bg-gray-400'
                  }`}
                ></span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="font-bold" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="border border-gray-400 px-3 py-2 rounded"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword}</span>
            )}
          </div>
          <button className="btn-primary" type="submit">
            Register
          </button>
          {backendError && <span className="text-red-500">{backendError}</span>}
        </form>

        <p className="text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-pri font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
