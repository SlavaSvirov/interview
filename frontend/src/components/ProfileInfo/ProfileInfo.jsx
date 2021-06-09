import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFetch } from '../../redux/actions/reviewsAC';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';
import UploadPhoto from '../UploadPhoto/UploadPhoto';
import './ProfileInfo.css';

function ProfileInfo() {
  const reviews = useSelector((state) => state.reviews);
  console.log('reviews', reviews);
  const [currentUserReview, setCurrentUserReview] = useState(reviews);
  const [infoFromUser, setInfoFromUser] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const newUser = await fetch('http://localhost:3001/user/getInfo', {
        credentials: 'include',
      });
      const myUser = await newUser.json();
      dispatch(getAllFetch());
      setInfoFromUser(myUser);
    })();
  }, []);

  useEffect(() => {
    const filteredReviews = [...reviews].filter((review) => {
      return review.author._id == infoFromUser._id;
    });
    setCurrentUserReview(filteredReviews);
  }, [reviews]);

  return (
    <div className='container container-main'>
      <div className="main">
        <div className='profile'>
          <form className="profileForm">
            <UploadPhoto />
            <span>Имя : {infoFromUser.name}</span>
            <span>Email : qwe@qwe.ru</span>
            <span>Дата регистрации : 01.01.2000г.</span>
            <span>Какую группу закончил : Бобры</span>
            <span>Написал отзывов : 10</span>
            <span>Рейтинг : {infoFromUser.rating}</span>
            <button>Редактировать профиль</button>
          </form>
        </div>
        <div className="reviews">
          <div className='sortWrap'>
            <Sort />
          </div>
            <p>Мои последние отзывы :</p>
          <div className='wrapper'>
            {currentUserReview.map((review) => {
              return <Reviews key={review._id} review={review} />;
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfileInfo;
