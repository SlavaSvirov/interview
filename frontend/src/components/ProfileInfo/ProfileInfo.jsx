import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useLoaderContext } from '../../context/LoaderContext';
import { getAllFetch } from '../../redux/actions/reviewsAC';
import { changeAvatarFetch } from '../../redux/actions/userAC';
import Loader from '../Loader/Loader';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';
import './ProfileInfo.css';

function ProfileInfo() {
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);
  const [currentUserReview, setCurrentUserReview] = useState(reviews);
  const [infoFromUser, setInfoFromUser] = useState({});
  const inputFile = useRef(null);
  const avatar = useSelector((state) => state.user.avatar);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loader, showLoader, hideLoader } = useLoaderContext();

  useEffect(() => {
    (async () => {
      const newUser = await fetch(`http://localhost:3001/user/${id}/getInfo`, {
        credentials: 'include',
      });
      showLoader();
      const myUser = await newUser.json();
      dispatch(getAllFetch()).then(() => hideLoader());
      setInfoFromUser(myUser);
    })();
  }, [id]);

  useEffect(() => {
    const filteredReviews = reviews.filter((review) => {
      return review.author._id == id;
    });
    setCurrentUserReview(filteredReviews);
  }, [reviews]);

  const avatarChange = (e) => {
    dispatch(changeAvatarFetch(e.target.files[0], user._id));
  };

  return (
    <div className="container container-main">
      <div className="main">
        <div className="profile">
          <form className="profileForm">
            <div className="user">
              <div
                className="userPhoto"
                style={{
                  background: `url('http://localhost:3001/${avatar}) 100%/100% no-repeat `,
                }}
              ></div>
              {user._id == id && (
                <span
                  className="addImg"
                  onClick={() => {
                    inputFile.current.click();
                  }}
                >
                  <i className="fa fa-plus"></i>
                </span>
              )}

              <input
                name="image"
                className="input"
                type="file"
                ref={inputFile}
                onChange={(e) => {
                  avatarChange(e);
                }}
              />
            </div>

            <div className='userInfo'>
              <span className='name'>{user.name}</span>
              <span className='rating'>{user.rating}</span>
              {user._id == id && <button className='btn'>Редактировать профиль</button>}
            </div>


          </form>
        </div>
        <div className="reviews">
          <div className="sortWrap">
            <Sort />
          </div>

          <p className="myReviews">Мои последние отзывы :</p>
          {loader ? (
            <Loader />
          ) : (
            <div className="wrapper">
              {currentUserReview.map((review) => {
                return (
                  <div>
                    <Reviews key={review._id} review={review} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
