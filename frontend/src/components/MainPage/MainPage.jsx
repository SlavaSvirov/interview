import styles from './MainPage.module.css';
import React, { useState } from 'react';
import AutoComplete from '../CustomAutoComplete/CustomAutoComplete';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';



const MainPage = ({ data, onSort }) => {

 




  return (
    <div>
      <AutoComplete />
      <div className={styles.sortWrapper}>
        <Sort onSort={onSort} />
      </div>
      <hr />
      {data?.map((review) => {
        return <Reviews key={review.author} review={review} />;
      })}
    </div>
  );
};

export default MainPage;
