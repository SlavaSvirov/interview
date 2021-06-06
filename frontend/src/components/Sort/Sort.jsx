import React, { useState } from 'react';
import './Sort.css';
import { useDispatch } from 'react-redux';
import { sortReviews } from '../../redux/actions/reviewsAC';

const Sort = () => {
  const dispatch = useDispatch();
  const [isSorted, setisSorted] = useState(false);

  const handleSort = (e, isSorted) => {
    dispatch(sortReviews({ e, isSorted }));
    setisSorted(!isSorted);
  };
  return (
    <div className="sort d-flex justify-content-between">
      <div
        className="sort-item"
        data-name="created"
        onClick={(e) => handleSort(e, isSorted)}
      >
        Дата создания
      </div>
      <div
        className="sort-item"
        data-name="salary"
        onClick={(e) => handleSort(e, isSorted)}
      >
        Зарплата
      </div>
      <div
        className="sort-item"
        data-name="rating"
        onClick={(e) => handleSort(e, isSorted)}
      >
        Рейтинг
      </div>
    </div>
  );
};

export default Sort;
