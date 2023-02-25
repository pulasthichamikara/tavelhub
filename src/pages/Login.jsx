import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import useLoading from '../components/utils/useLoading';
import { useContext } from 'react';
import { UserContex } from '../contex/UserContext';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');
  const [LoadBul, setLoading] = useLoading();
  const { setUser, user } = useContext(UserContex);

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
      setLoading(true);

      if (validateForm()) {
        try {
          const response = await axios.post('/user/login', {
            email,
            password,
          });

          if (response?.data && response.data.token) {
            localStorage.setItem('userdata', JSON.stringify(response.data));
            setUser(response.data);
            setLoading(false);
          }
          setBackendError('');
        } catch (error) {
          console.error(error);
          if (error.response) {
            setBackendError(error.response.data.error);
          } else {
            setBackendError('Error while login user');
          }
          setLoading(false);
        }
      }
    }
  };

  return (
    <>
      {!!user && <Navigate to="/" />}
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pri h-screen flex items-center justify-center flex-col gap-10">
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
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
