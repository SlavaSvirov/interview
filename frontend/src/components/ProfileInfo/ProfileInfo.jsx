import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';
import UploadPhoto from '../UploadPhoto/UploadPhoto';
import './ProfileInfo.css';

function ProfileInfo() {
  const reviews = useSelector((state) => state.reviews);

  const [currentUserReview, setCurrentUserReview] = useState([]);
  const [infoFromUser, setInfoFromUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const newUser = await fetch('http://localhost:3001/user/getInfo', {
        credentials: 'include',
      });
      const myUser = await newUser.json();

      setInfoFromUser(myUser);
      const filteredReviews = reviews.filter((review) => {
        return review.author._id == infoFromUser._id;
      });
      setCurrentUserReview(filteredReviews);
    })();
  }, []);

  return (
    <div className="main">
      <div>
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
        <Sort />
        Мои последние отзывы :
        {currentUserReview?.map((review) => {
          return <Reviews key={review._id} review={review} />;
        })}
      </div>
    </div>
  );
}

export default ProfileInfo;
