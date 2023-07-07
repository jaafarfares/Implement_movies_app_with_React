import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import axios from 'axios';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const loadMovies = (page) => {
    axios.get('/api/titles/advancedsearch', {
      params: {
        minYear,
        maxYear,
        genres,
        title,
        sort,
        page,
      },
    })
      .then((response) => {
        const fetchedMovies = response.data;
        setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, title, sort]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="homepage">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        genres={genres}
        setGenres={setGenres}
        sort={sort}
        setSort={setSort}
        title={title}
        setTitle={setTitle}
      />

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>

      <Button text="Load More.." onClick={handleLoadMore} />
    </div>
  );
}
