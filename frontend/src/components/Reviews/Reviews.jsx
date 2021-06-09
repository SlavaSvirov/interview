import React, { createElement, useState } from "react";

import "./reviews.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';


const Reviews = ({ review }) => {
  let history = useHistory();
console.log('=========================',history);
  const companies = useSelector((state) => state.companys);
  const user = useSelector((state) => state.user);
  const reviews = useSelector((state) => state.reviews);
  console.log(reviews);

  console.log(user.isAuth);

  const reviewLogo = (direction) => {
    switch (direction) {
      case "Frontend":
        return "http://localhost:3001/img/front.png";
      case "Backend":
        return "";
      case "Fullstack":
        return "";
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
              height: "190px",
            }}
          >
            <span className="rating">{review.rating}</span>
            <span className="salary">{review.salary}</span>
          </div>
          <div className="block-title">
            <div className="wrap-rating">
              <span className="user-working-pasition">
                {review.direction} Developer
              </span>
              {review.author._id == user._id && user.isAuth &&  history.location.pathname === '/profile' ? (
                <div>
                <span>ED</span>
                <span>DEL</span>

                </div>
              ) : (
                <span></span>
              )}
            </div>
            <p className="company-location">
              {review.companyName},<br />
            </p>
            <div className="wrapper-user-position">
              <span className="user-name">{review.author.name}</span>
              <Link to={`/review/${review._id}`}>More Info</Link>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Reviews;
