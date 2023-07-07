import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import './movies.css';
import axios from 'axios';

export default function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    axios.get('/api/titles/favorite')
      .then((response) => {
        const favorites = response.data;
        const isMovieFavorite = favorites.some((favMovie) => favMovie.imdbId === movie.imdbId);
        setIsFavorite(isMovieFavorite);
      })
      .catch((error) => {
        console.error('Error fetching favorites:', error);
      });

    axios.get('/api/titles/watchlater')
      .then((response) => {
        const watchLaterTitles = response.data;
        const isMovieInWatchLater = watchLaterTitles.some((watchLaterMovie) => watchLaterMovie.imdbId === movie.imdbId);
        setIsWatchLater(isMovieInWatchLater);
      })
      .catch((error) => {
        console.error('Error fetching watch later titles:', error);
      });
  }, [movie.imdbId]);

  const handleClick = (type) => {
    const endpoint = `/api/titles/${type}/${movie.imdbId}`;

    if (type === 'favorite') {
      if (isFavorite) {
        // Remove from favorites
        axios.delete(endpoint)
          .then(() => {
            setIsFavorite(false);
          })
          .catch((error) => {
            console.error('Error removing from favorites:', error);
          });
      } else {
        // Add to favorites
        axios.post(endpoint)
          .then(() => {
            setIsFavorite(true);
          })
          .catch((error) => {
            console.error('Error adding to favorites:', error);
          });
      }
    } else if (type === 'watchlater') {
      if (isWatchLater) {
        // Remove from watch later list
        axios.delete(endpoint)
          .then(() => {
            setIsWatchLater(false);
          })
          .catch((error) => {
            console.error('Error removing from watch later:', error);
          });
      } else {
        // Add to watch later list
        axios.post(endpoint)
          .then(() => {
            setIsWatchLater(true);
          })
          .catch((error) => {
            console.error('Error adding to watch later:', error);
          });
      }
    }
  };

  return (
    <li className="movie-card">
      <div className="icons">
        <FontAwesomeIcon
          icon={faHeart}
          className={`favorite-icon ${isFavorite ? 'active' : ''}`}
          onClick={() => handleClick('favorite')}
        />
        <FontAwesomeIcon
          icon={faClock}
          className={`watch-later-icon ${isWatchLater ? 'active' : ''}`}
          onClick={() => handleClick('watchlater')}
        />
      </div>
      <h3>{movie.title}</h3>
      <p>{movie.synopsis}</p>
      <div className="genres">
        {movie.genres.map((genre) => (
          <span key={genre} className="genre">{genre}</span>
        ))}
      </div>
    </li>
  );
}
