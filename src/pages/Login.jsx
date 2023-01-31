import React, { useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserContex } from '../contex/UserContex';
export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { setUser, user } = useContext(UserContex);

  const navigate = useNavigate();
  const registerSubmit = async (ev) => {
    ev.preventDefault();
    axios
      .post('/user/login', { email, password })
      .then((res) => {
        console.log('dat', res.data);
        localStorage.setItem('userdata', JSON.stringify(res.data));
        setUser(res.data);
        navigate('/');
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <>
      {!!user && <Navigate to="/" />}
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pri  h-screen flex items-center justify-center flex-col gap-10">
        <h1 className="text-white">Login</h1>
        <div className="bg-white p-10 flex flex-col gap-10 items-center rounded-2xl shadow-2xl  w-[80%] max-w-2xl">
          <form
            className="flex flex-col gap-10 w-full"
            onSubmit={registerSubmit}
          >
            <input
              type="email"
              placeholder="your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn-primary" type="submit">
              Login
            </button>
          </form>
          <p>
            Don't you have an account ?{' '}
            <Link to={'/register'} className="font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
