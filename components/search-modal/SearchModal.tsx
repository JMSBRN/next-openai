import {
  selectMovies,
  setFormData,
  setPage,
  setSelectedSort,
} from '@/features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import React, { useEffect, useState } from 'react';
import styles from './SearchModal.module.css';

const SearchModal = () => {
  const { container, form } = styles;
  const [modalDisplayed, setModalDisplayed] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { formData } = useAppSelector(selectMovies);
  const [formValue, setFormValue] = useState(formData);

  useEffect(()=> {
      if(localStorage.getItem('formData')) {
        const formDataLocal = JSON.parse(localStorage.getItem('formData') || '{}');
      if (formDataLocal) {
        dispatch(setFormData(formDataLocal));
      }
    }
  },[dispatch]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    if(name === 'sort') {
      dispatch(setSelectedSort(value));
    }
  };
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFormData(formValue));
    dispatch(setPage('1'));
    localStorage.setItem('formData', JSON.stringify(formValue) || '{}');
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
            <input
              type="text"
              id="search-input"
              name="search"
              placeholder="Search..."
              onChange={handleInputChange}
            />
          </label>
          <label>
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
            <select id="sort-select" name="sort" onChange={handleInputChange}>
              <option value="a">Sort by Title A-Z</option>
              <option value="b">Sort by Title Z-A</option>
              <option value="c">Sort by Year max-min</option>
              <option value="d">Sort by Year min-max</option>
            </select>
          </label>
          <label>
            <div>
              <label htmlFor="genre-comedy">
                Movie
                <input
                  type="radio"
                  id="type-movie"
                  name="type"
                  value="movie"
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="genre-action">
                Series
                <input
                  type="radio"
                  id="type-series"
                  name="type"
                  value="series"
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="genre-drama">
                Episode
                <input
                  type="radio"
                  id="type-episode"
                  name="type"
                  value="episode"
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </label>
          <input type="submit" />
        </form>
      )}
    </div>
  );
};

export default SearchModal;
