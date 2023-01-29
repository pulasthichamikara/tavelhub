import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Logo from './Logo'; */
export default function Register() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pri  h-screen flex items-center justify-center flex-col gap-10">
      <h1 className="text-white">Register</h1>
      <div className="bg-white p-10 flex flex-col gap-10 items-center rounded-2xl shadow-2xl  w-[80%] max-w-2xl">
        <form className="flex flex-col gap-10 w-full">
          <input type="email" placeholder="your email address" />
          <input type="password" placeholder="your password" />
          <button className="btn-primary" type="submit">
            Register
          </button>
        </form>
        <p>
          Do you already have an account ?{' '}
          <Link to={'/login'} className="font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
