import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';

export default function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/titles/watchlater')
      .then((response) => {
        const watchLaterMovies = response.data;
        setMovies(watchLaterMovies);
      })
      .catch((error) => {
        console.error('Error fetching watch later movies:', error);
      });
  }, []);

  return (
    <div className="watch-later">
      <h1>Movies to watch later</h1>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  );
}
