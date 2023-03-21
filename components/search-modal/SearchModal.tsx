import React, { useState } from 'react';
import styles from './SearchModal.module.css';

const SearchModal = () => {
  const { container, form } = styles;
  const [modalDisplayed, setModalDisplayed] = useState<boolean>(false);
  const [formValue, setFormValue] = useState({
    search: '',
    year: '',
    sort: 'title',
    genre: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name , value } = e.target;
    setFormValue({...formValue, [name]: value});
  };
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValue);
  };
  return (
    <div
      onMouseLeave={() => setModalDisplayed(false)}
      onMouseOver={() => setModalDisplayed(true)}
      className={container}
    >
      {modalDisplayed && (
          <form className={form} onSubmit={submitForm}>
            <label>
              Search:
              <input
                type="text"
                id="search-input"
                name="search"
                placeholder="Search..."
                onChange={handleInputChange}
              />
            </label>
            <label>
              Year:
              <input
                type="number"
                id="year-input"
                name="year"
                max={2099}
                min={1900}
                placeholder="Year..."
                onChange={handleInputChange}
              />
            </label>
            <label>
              Sort by:
              <select id="sort-select" name="sort" onChange={handleInputChange}>
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
                  onChange={handleInputChange}
                />
                <label htmlFor="genre-action">Action</label>
                <input
                  type="radio"
                  id="genre-drama"
                  name="genre"
                  value="drama"
                  onChange={handleInputChange}
                />
                <label htmlFor="genre-drama">Drama</label>
                <input
                  type="radio"
                  id="genre-comedy"
                  name="genre"
                  value="comedy"
                  onChange={handleInputChange}
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
