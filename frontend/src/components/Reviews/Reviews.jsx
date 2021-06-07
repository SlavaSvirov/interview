import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons';
import './reviews.css'



const Reviews = () => {

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
  );
};

export default Reviews;
