import { GET_ALL, SORT_REVIEWS } from '../types/types';
import { CHANGE_LIKE_REVIEW } from '../types/typeReview';
import axios from 'axios';

export const setAll = (reviews) => {
  return {
    type: GET_ALL,
    payload: reviews,
  };
};

export const sortReviews = (reviews) => {
  return {
    type: SORT_REVIEWS,
    payload: reviews,
  };
};

export const changeLikeReviews = (oneReview) => {
  return {
    type: CHANGE_LIKE_REVIEW,
    payload: oneReview
  };
};

export const getAllFetch = () => async (dispatch) => {
  const result = await axios('http://localhost:3001/review');

  // console.log(allFromServer);
  dispatch(setAll(result.data));
};

export const getCurrentReviews = (id) => async (dispatch) => {
  const result = await axios('http://localhost:3001/review');

  // console.log(allFromServer);
  dispatch(setAll(result.data));
};

export const changeLikeFetch = (id) => async (dispatch) => {
  const result = await axios.post(`http://localhost:3001/review/${id}`);
  dispatch(changeLikeReviews(result.data));
}
