import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Logo from './Logo';
export default function Login() {
  const [googleUserData, setGoogleUserData] = useState({});

  const login = useGoogleLogin({
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
          const { email, name, sub: googleId } = res.data;
          setGoogleUserData({
            email,
            name,
            token: respose.access_token,
            googleId: JSON.stringify(googleId),
          });
        }
      } catch (err) {}
    },
  });

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  h-screen flex items-center justify-center">
      <div className="bg-white p-20 flex flex-col gap-10 items-center rounded-2xl shadow-2xl">
        <h1>Login</h1>
        <Logo />

        <button
          onClick={() => login()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in with Google{' '}
        </button>
      </div>
    </div>
  );
}
