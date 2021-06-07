import { GET_ALL, SORT_REVIEWS } from '../types/types';
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

export const getAllFetch = (text) => async (dispatch) => {
  const result = await axios('http://localhost:3001/review');

  // console.log(allFromServer);
  dispatch(setAll(result.data));
};
