import styles from './MainPage.module.css';
import React, { useState } from 'react';
import AutoComplete from '../CustomAutoComplete/CustomAutoComplete';
import Reviews from '../Reviews/Reviews';

const MainPage = ({ data }) => {
  return (
    <div>
      <AutoComplete />
      {data.map((review) => {
        return <Reviews review={review} />;
      })}
    </div>
  );
};

export default MainPage;
