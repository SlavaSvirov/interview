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

const Reviews = ({ review }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  console.log(review.companyName);
  return (
    <section>

      <div className="container container-main">
        <div className="row">
          <div className="post col-lg-4 col-md-6 col-sm-12">
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
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
