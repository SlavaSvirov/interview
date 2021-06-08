import React, { useState } from 'react';
import './Sort.css';
import { useDispatch } from 'react-redux';
import { sortReviews } from '../../redux/actions/reviewsAC';
import { Link } from 'react-router-dom';


const Sort = () => {
  const dispatch = useDispatch();
  const [isSorted, setisSorted] = useState(false);

  const handleSort = (e, isSorted) => {
    dispatch(sortReviews({ e, isSorted }));
    setisSorted(!isSorted);
  };
  return (
    <div className="sort d-flex justify-content-between">
      <button className="sort-item" data-name="created" onClick={(e) => handleSort(e,isSorted)}>
        Дата создания
      </button>
      <button className="sort-item" data-name="salary" onClick={(e) => handleSort(e,isSorted)}>
        Зарплата
      </button>
      <button className="sort-item" data-name="rating" onClick={(e) => handleSort(e,isSorted)}>
        Рейтинг
      </button>
      <Link className='add-item' to="/review/addReview"> Добавить отзыв</Link>
      {/* <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Станция метро"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </div> */}
    </div>
  );
};

export default Sort;
