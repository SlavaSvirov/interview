import React, { createElement, useState } from 'react';
import { Tooltip, Avatar } from 'antd';
import moment from 'moment';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons';
import './reviews.css'

const Reviews = ({ review }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  return (
    <section>
      <div className='container container-main'>
        <div className='row'>
          <div className='post col-lg-4 col-md-6 col-sm-12'>

            <div className='wrap'>
              <div className='block-img'>
                <span className='rating'>10</span>
              </div>
              <div className='block-title'>
                <div className='wrap-rating'>
                <span className='user-working-pasition'>Front End Engineer</span>
                  <span className='salary'>2500$</span>
                </div>
                <p className='company-location'>Google, Texac</p>
                <div className='wrapper-user-position'>
                <span className='user-name'>Игорь Королёв</span>
                <a href="">Read More</a>
                </div>
              </div>
            </div>

            <div className='wrap'>
              <div className='block-img'>
                <span className='rating'>10</span>
              </div>
              <div className='block-title'>
                <div className='wrap-rating'>
                <span className='user-working-pasition'>Full Stack Engineer</span>
                  <span className='salary'>2500$</span>
                </div>
                <p className='company-location'>Google, Texac</p>
                <div className='wrapper-user-position'>
                <span className='user-name'>Игорь Королёв</span>
                <a href="">Read More</a>
                </div>
              </div>
            </div>

            <div className='wrap'>
              <div className='block-img'>
                <span className='rating'>10</span>
              </div>
              <div className='block-title'>
                <div className='wrap-rating'>
                <span className='user-working-pasition'>Back End Engineer</span>
                  <span className='salary'>2500$</span>
                </div>
                <p className='company-location'>Google, Texac</p>
                <div className='wrapper-user-position'>
                <span className='user-name'>Игорь Королёв</span>
                <a href="">Read More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section >
    )
  /* return (
    <>
      <div className="d-flex">
        <div className="avatar">
          <Avatar src={`http://localhost:3001/${review.image}`} size={64} />
        </div>
        <div className="main">
          <div className="author d-flex">
            <span>{review?.author?.name}</span>{' '}
            <span>{moment().fromNow()}</span>
          </div>
          <div>
            <span>{review.created}</span>
          </div>
          <span>{review.rating}</span>
          <div className="companyName">
            Название компании: {review.companyName}
          </div>
          <div>ЗП: {review.salary}</div>
          <div>Собеседовал: {review.interviewee}</div>
          <div>Вопросы на собеседовании: {review.questions}</div>
          <div className="content">
            <p>{review.review}</p>
          </div>
        </div>
      </div>
    </>
  ); */
};

export default Reviews;
