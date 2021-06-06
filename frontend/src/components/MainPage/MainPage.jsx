import styles from './MainPage.module.css';
import React, { useState } from 'react';
import AutoComplete from '../CustomAutoComplete/CustomAutoComplete';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';

const MainPage = ({ data, onSort }) => {
  return (
    <main className={styles.mainPageDiv}>
      <div className="container container-main">

        <div className={styles.mainPageText}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.mainPageTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsa praesentium, veniam facere quas labore?</p>
          <div className={styles.mainPageBtn}>
          <button>Get Started</button>
          </div>
        </div>

        <div className={styles.wrapperHexagons}>
          <div className={styles.hexagon}>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
                <img src="/imgLOGO/1.jpg" alt="logo" />
              </div>
            </div>
          </div>

          <div className={styles.hexagon}>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
                <img src="/imgLOGO/1.jpg" alt="logo" />
              </div>
            </div>
          </div>

          <div className={styles.hexagon}>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
                <img src="/imgLOGO/1.jpg" alt="logo" />
              </div>
            </div>
          </div>

          <div className={styles.hexagon}>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
                <img src="/imgLOGO/1.jpg" alt="logo" />
              </div>
            </div>
          </div>

        </div>
        <AutoComplete />
        <div className={styles.sortWrapper}>
          <Sort onSort={onSort} />
        </div>
        <hr />
        {data?.map((review) => {
          return <Reviews key={review.author} review={review} />;
        })}
      </div>
    </main>
  );
};

export default MainPage;
