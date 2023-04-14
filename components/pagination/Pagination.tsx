import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { selectMovies, setPage } from '@/features/movies/moviesSlice';

const Pagination = () => {
  const { pagination, selected } = styles;
  const dispatch = useAppDispatch();
  const { totalResults} = useAppSelector(selectMovies);
  return (
    <>
      <ReactPaginate
       pageCount={Math.ceil(Number(totalResults) / 10)}
       pageRangeDisplayed={10}
       className={pagination}
       onPageChange={(e) => dispatch(setPage((e.selected + 1).toString()))}
       previousLabel="<<"
       nextLabel=">>"
       activeClassName={selected}
       />
    </>
  );
};

export default Pagination;
