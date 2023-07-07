import React, { useState, useEffect } from 'react';
import './navigation.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Activity from '../Activity';

export default function SideBar() {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const setPage = (pageName) => {
    setSelected(pageName);
    let path = '/';
    if (pageName === 'favorites') {
      path = '/favorites';
    } else if (pageName === 'watchLater') {
      path = '/watchlater';
    }
    navigate(path);
  };

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/activity')
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  const renderActivities = activities.slice(0, 10).map((activity, index) => (
    <Activity key={index} activity={activity} />
  ));

  return (
    <nav className={small ? 'sidebar small' : 'sidebar'}>
      <ul className="navigation">
        <li className={selected === 'home' ? 'selected' : ''} onClick={() => setPage('home')}>
          <i className="fas fa-home"></i>
          <span>Home</span>
        </li>
        <li className={selected === 'favorites' ? 'selected' : ''} onClick={() => setPage('favorites')}>
          <i className="fas fa-star"></i>
          <span>Favorites</span>
        </li>
        <li className={selected === 'watchLater' ? 'selected' : ''} onClick={() => setPage('watchLater')}>
          <i className="fas fa-clock"></i>
          <span>Watch Later</span>
        </li>
      </ul>
      <ul className="activity-list">
        {renderActivities}
      </ul>
    </nav>
  );
}
