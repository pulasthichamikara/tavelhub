import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Logo from './Logo'; */
export default function Login() {
  /*   const [googleUserData, setGoogleUserData] = useState({}); */

  /*   const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        if (res.data) {
          console.log(res.data);
          const { email, name, sub: googleId, picture } = res.data;
          setGoogleUserData({
            email,
            name,
            token: respose.access_token,
            googleId: JSON.stringify(googleId),
            picture,
          });
          localStorage.setItem('user', JSON.stringify(res.data));
        }
      } catch (err) {}
    },
  }); */

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pri  h-screen flex items-center justify-center flex-col gap-10">
      <h1 className="text-white">Login</h1>
      <div className="bg-white p-10 flex flex-col gap-10 items-center rounded-2xl shadow-2xl  w-[80%] max-w-2xl">
        <form className="flex flex-col gap-10 w-full">
          <input type="email" placeholder="your email address" />
          <input type="password" placeholder="your password" />
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

        {/* <button
          onClick={() => login()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in with Google{' '}
        </button> */}
      </div>
    </div>
  );
}
