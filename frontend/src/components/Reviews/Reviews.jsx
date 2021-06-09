import React, { createElement, useState } from 'react';

import './reviews.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Reviews = ({ review }) => {

  const companies = useSelector((state) => state.companys);

  return (
    <div className="container container-main">
      <div className="wrap">
        {
          companies?.map((el) => (
            <>
              <div className="block-img" style={{
                background: `url(${el.logo['240']}) no-repeat center`,
                height: '190px',
              }}>
                <span className="rating">{review.rating}</span>
                <span className="salary">{review.salary}Р</span>
              </div>
              <div className="block-title">
                <div className="wrap-rating">
                  <span className="user-working-pasition">
                    {review.direction} Developer
                  </span>
                </div>
                <p className="company-location">{review.companyName},<br /> {el.area}</p>
                <div className="wrapper-user-position">
                  <span className="user-name">{review.author.name}</span>
                  <Link to={`/review/${review._id}`}>More Info</Link>
                </div>
              </div>
            </>
          ))
        }

      </div>
    </div>
  );
};

export default Reviews;
