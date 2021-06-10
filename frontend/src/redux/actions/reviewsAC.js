import {
  CLEAR_ALL,
  GET_ALL,
  PROGINATION_REVIEWS,
  SORT_REVIEWS,
} from '../types/types';
import { CHANGE_LIKE_REVIEW } from '../types/typeReview';
import axios from 'axios';

export const setAll = (reviews) => {
  return {
    type: GET_ALL,
    payload: reviews,
  };
};

export const clear = () => {
  return {
    type: CLEAR_ALL,
  };
};

export const sortReviews = (reviews) => {
  return {
    type: SORT_REVIEWS,
    payload: reviews,
  };
};

export const pogination = (litleReview) => {
  return {
    type: PROGINATION_REVIEWS,
    payload: litleReview,
  };
};

export const changeLikeReviews = (oneReview) => {
  return {
    type: CHANGE_LIKE_REVIEW,
    payload: oneReview,
  };
};

export const getAllFetch = () => async (dispatch) => {
  const result = await axios('http://localhost:3001/review');

  dispatch(setAll(result.data));
};

export const getCurrentReviews = (id) => async (dispatch) => {
  const result = await axios('http://localhost:3001/review');

  dispatch(setAll(result.data));
};

export const getLitle = (index) => async (dispatch) => {
  const result = await axios('http://localhost:3001/review');

  const litle = result.data.slice(index, index + 6);

  dispatch(pogination(litle));
};
export const changeLikeFetch = (id, userId) => async (dispatch) => {
  const result = await axios.post(`http://localhost:3001/review/${id}`, {
    userId,
  });
  dispatch(changeLikeReviews(result.data));
};
