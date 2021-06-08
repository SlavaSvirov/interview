import React, { createElement, useState } from 'react';
import { Tooltip, Avatar } from 'antd';
import moment from 'moment';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons';
import './reviews.css';
import { Link } from 'react-router-dom';

const Reviews = ({ review }) => {
  return (
    <div className="container container-main">
      <div className="wrap">
        <div className="block-img">
          <span className="rating">{review.rating}</span>
        </div>
        <div className="block-title">
          <div className="wrap-rating">
            <span className="user-working-pasition">
              Front End Engineer

                  </span>
            <span className="salary">{review.salary}Р</span>
          </div>
          <p className="company-location">{review.companyName}, Москва</p>
          <div className="wrapper-user-position">
            <span className="user-name">{review.author.name}</span>
            <Link to={`review/${review._id}`}>More Info</Link>
            {/* <a href="">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
