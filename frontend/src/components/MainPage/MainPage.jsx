import styles from './MainPage.module.css';
import React, { useEffect } from 'react';
import AutoComplete from '../CustomAutoComplete/CustomAutoComplete';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFetch } from '../../redux/actions/reviewsAC';

const MainPage = () => {
  const data = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFetch());
  }, []);

  return (
    <main className={styles.mainPageDiv}>
      <div className="container container-main">
        <div className={styles.mainPageText}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.mainPageTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ipsa praesentium, veniam facere quas labore?
          </p>
          <div className={styles.mainPageBtn}>
            <a href="">Get Started</a>
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

        <div className={styles.secondMainPage}>
          <div className={styles.secondTitle}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              eveniet.
            </p>
            <AutoComplete />
          </div>
          <div className={styles.sortWrapper}>
            <Sort />
          </div>
          <div className={styles.wrapper}>
          {data.map((review) => {
            return  <Reviews key={review._id} review={review} />;
          })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
