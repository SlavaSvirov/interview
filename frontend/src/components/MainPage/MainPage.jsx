import styles from './MainPage.module.css';
import React, { useState, useEffect } from 'react';
import AutoComplete from '../CustomAutoComplete/CustomAutoComplete';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllFetch } from '../../redux/actions/reviewsAC';
import { clear, getLitle } from '../../redux/actions/reviewsAC';

const MainPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reviews);
  const [featching, setFeatching] = useState(false);
  const [index, setIndex] = useState(0);

  const scrollHandler = (e) => {
    const loc =
      e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight);
    // console.log({ loc });
    if (loc <= 100 && 98 <= loc) {
      setFeatching((prev) => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      dispatch(clear());
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    dispatch(getLitle(index));
    setIndex((prev) => prev + 6);
  }, [featching]);

  return (
    <main className={styles.mainPageDiv}>
      <div className={styles.video}>
        <div className={styles.mainPageHexagon}>
          <video autoPlay muted playsInline loop className={styles.cat}>
            <source src="/imgLOGO/city.mp4" type='video/mp4' />
          </video>
          <div className="container container-main">
            <div className={styles.mainPageText}>
              <h1>Будь готов к любому собеседованию!</h1>
              <p className={styles.mainPageTitle}>
                Оставь свой отзыв о прошедшем собеседовании, этим ты поможешь другу, а друг поможет тебе.
              </p>
              <div className={styles.mainPageBtn}>
                <a href="#secondPage">Поухали!</a>

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
          </div>
        </div>
      </div>
      <div className='container container-main'>
        <div className={styles.secondMainPage}>
          <a name="secondPage"></a>
          <div className={styles.secondTitle}>
            <p>Начни с выбора компании!</p>
            <AutoComplete />
            <span>Или посмотри все отзывы, которые у нас есть</span>
          </div>
          <div className={styles.sortWrapper}>
            <Sort />
          </div>
          <div className={styles.wrapper}>
            {data?.map((review) => {
              return <Reviews key={review._id} review={review} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
