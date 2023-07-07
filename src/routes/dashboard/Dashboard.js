import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="dashboard">
        <Header userUsername={userUsername} logout={logout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
