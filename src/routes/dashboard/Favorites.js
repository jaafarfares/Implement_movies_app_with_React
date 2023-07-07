import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/titles/favorite')
      .then((response) => {
        const favoriteMovies = response.data;
        setMovies(favoriteMovies);
      })
      .catch((error) => {
        console.error('Error fetching favorite movies:', error);
      });
  }, []);

  return (
    <div className="favorites">
      <h1>Movies you like</h1>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  );
}
