import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons';

const Reviews = ({ review }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === 'disliked' ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <>
      <div className="d-flex">
        <div className="avatar">
          <Avatar src={`http://localhost:3001/${review.image}`} size={64} />
        </div>
        <div className="main">
          <div className="author d-flex">
            <span>{review.author.name}</span> <span>{moment().fromNow()}</span>
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
  );
};

export default Reviews;
