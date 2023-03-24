import { setIsApiError } from '@/features/movies/moviesSlice';
import { useAppDispatch } from '@/hooks/reduxHooks';
import React from 'react';
import styles from './ErrorModal.module.css';

interface ErrorModalProps {
  message: string;
}
const ErrorModal = ({ message }: ErrorModalProps) => {
  const disparch = useAppDispatch();
    const {container, title} = styles;
  return (
    <div onClick={() => disparch(setIsApiError(false))} className={container}>
      <div className={title}>{message}</div>
      <div>click for close</div>
    </div>
  );
};

export default ErrorModal;
