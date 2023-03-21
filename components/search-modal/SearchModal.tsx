import React, { useState } from 'react';
import styles from './SearchModal.module.css';

const SearchModal = () => {
  const { container, form } = styles;
  const [modalDisplayed, setModalDisplayed] = useState<boolean>(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div
      onMouseLeave={() => setModalDisplayed(false)}
      onMouseOver={() => setModalDisplayed(true)}
      className={container}
    >
      {modalDisplayed && (
          <form className={form} onSubmit={(e) => submit(e)}>
            <label>
              Search:
              <input
                type="text"
                id="search-input"
                name="search"
                placeholder="Search..."
              />
            </label>
            <label>
              Year:
              <input
                type="number"
                id="year-input"
                name="year"
                max={2030}
                min={1990}
                placeholder="Year..."
              />
            </label>
            <label>
              Sort by:
              <select id="sort-select" name="sort">
                <option value="title">Title</option>
                <option value="year">Year</option>
              </select>
            </label>

            <label>
              <div>
                <input
                  type="radio"
                  id="genre-action"
                  name="genre"
                  value="action"
                />
                <label htmlFor="genre-action">Action</label>
                <input
                  type="radio"
                  id="genre-drama"
                  name="genre"
                  value="drama"
                />
                <label htmlFor="genre-drama">Drama</label>
                <input
                  type="radio"
                  id="genre-comedy"
                  name="genre"
                  value="comedy"
                />
                <label htmlFor="genre-comedy">Comedy</label>
              </div>
            </label>
            <input type="submit" />
          </form>
      )}
    </div>
  );
};

export default SearchModal;
