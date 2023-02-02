import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Register from './pages/Register';
import Account from './pages/Account';
import AddEditAccomadation from './components/account/AddEditAccomadation';
import axios from 'axios';
import { useContext } from 'react';
import { UserContex } from './contex/UserContex';

function App() {
  const { user } = useContext(UserContex);

  if (user?.token) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${user.token}`,
    };
  }

  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE;

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="account/:page" element={<Account />} />
        <Route
          path="account/accomadations/add"
          element={<AddEditAccomadation />}
        />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
