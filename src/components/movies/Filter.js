import React from 'react';
import './movies.css';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from '../movies/Tag';

export default function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  const tags = ['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war'];

  return (
    <div className="filter">
      <SearchBar title={title} setTitle={setTitle} />
      <div className="year-inputs">
        <Input
          label="Min Year:"
          type="number"
          value={minYear}
          setValue={setMinYear}
          className="year-input"
        />
        <Input
          label="Max Year:"
          type="number"
          value={maxYear}
          setValue={setMaxYear}
          className="year-input"
        />
      </div>
      <SelectInput
        label="Sort By:"
        options={[
          { value: 'latest', label: 'Latest' },
          { value: 'oldest', label: 'Oldest' },
          { value: 'highestrated', label: 'Highest Rated' },
          { value: 'lowestrated', label: 'Lowest Rated' },
        ]}
        value={sort}
        setValue={setSort}
        className="sort-input"
      />
      <ul className="tags">
        {tags.map((tag) => (
          <Tag
            key={tag}
            genre={tag}
            filter
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
}
