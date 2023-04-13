import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setPage } from '@/features/movies/moviesSlice';

const Pagination = () => {
  const { pagination } = styles;
  const dispatch = useAppDispatch();
  return (
    <>
      <ReactPaginate
       pageCount={10}
       className={pagination}
       onPageChange={(e) => dispatch(setPage((e.selected + 1).toString()))}
       previousLabel="<<"
       nextLabel=">>"
       />
    </>
  );
};

export default Pagination;
