import React, { createElement, useState } from 'react';

import './reviews.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Reviews = ({ review }) => {
  let history = useHistory();
  const companies = useSelector((state) => state.companys);
  const user = useSelector((state) => state.user);
  const reviews = useSelector((state) => state.reviews);


  const reviewLogo = (direction) => {
    switch (direction) {
      case 'Frontend':
        return 'http://localhost:3001/img/frontStack.png';
      case 'Backend':
        return 'http://localhost:3001/img/backStack.png';
      case 'FullStack':
        return 'http://localhost:3001/img/fullStack.png';
      default:
        break;
    }
  };

  return (
    <div className="container container-main">
      <div className="wrap">
        <>
          <div
            className="block-img"
            style={{
              background: `url(${reviewLogo(
                review.direction
              )}) no-repeat center`,
              height: '190px',
              'background-size': 'cover'
            }}
          >
            <span className="rating">{review?.rating}</span>
            <span className="salary">{review?.salary}</span>
          </div>
          <div className="block-title">
            <div className="wrap-rating">
              <span className="user-working-pasition">
                {review?.direction} Developer
              </span>

              {review?.author?._id == user._id &&
              user.isAuth &&
              history.location.pathname === `/user/${user._id}` ? (
               <div className='icons'>
                  <i className='fa fa-edit'></i>
                  <i className='fa fa-trash'></i>
                </div>
              ) : (
                <span></span>
              )}
            </div>
            <p className="company-location">
              {review.companyName},<br />
            </p>
            <div className="wrapper-user-position">
              <Link to={`/user/${review?.author?._id}`}>
                <span className="user-name">{review?.author?.name}</span>
              </Link>
              <Link to={`/review/${review._id}`}>More Info</Link>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Reviews;
