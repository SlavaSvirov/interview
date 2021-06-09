import React, { createElement, useState } from "react";
import { Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import "./reviews.css";
import ColumnGroup from "antd/lib/table/ColumnGroup";

const Reviews = (props) => {
  return (
    <>
      {props.review?.rating &&
      props.review?.salary &&
      props.review?.companyName &&
      props.review?.author ? (
        <div className="container container-main">
          <div className="wrap">
            <div className="block-img">
              <span className="rating">{props.review.rating}</span>
            </div>
            <div className="block-title">
              <div className="wrap-rating">
                <span className="user-working-pasition">
                  Front End Engineer
                </span>
                <span className="salary">{props.review.salary}Р</span>
              </div>
              <p className="company-location">
                {props.review.companyName}, Москва
              </p>
              <div className="wrapper-user-position">
                <span className="user-name">{props.review.author.name}</span>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Reviews;
