import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useLoading from '../components/utils/useLoading';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');
  const [LoadBul, showLoading, hideLoading] = useLoading();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

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
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      showLoading();

      try {
        const response = await axios.post('/user/login', {
          email,
          password,
        });

        if (response?.data && response.data.userId) {
          navigate('/');
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const errorMsg = error.response.data;
          setBackendError(errorMsg);
        } else {
          setBackendError('Error while logging in');
        }
      } finally {
        hideLoading();
      }
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pri  h-screen flex items-center justify-center flex-col gap-10">
        <h1 className="text-white mb-6">Login</h1>
        <LoadBul />
        <div className="bg-white p-10 flex flex-col gap-10 items-center rounded-2xl shadow-2xl w-[80%] max-w-2xl">
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
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
                onChange={(event) => setPassword(event.target.value)}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}
            </div>
            {backendError && (
              <span className="text-red-500">{backendError}</span>
            )}
            <button className="btn-primary" type="submit">
              Login
            </button>
          </form>
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-pri font-bold">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
