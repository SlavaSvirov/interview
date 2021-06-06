import { GET_ALL } from '../types/types';
import axios from 'axios';
export const setAll = (reviews) => {
  return {
    type: GET_ALL,
    payload: reviews,
  };
};

export const getAllFetch = (text) => async (dispatch) => {
  const result = await axios('http://localhost:3001/review');

  // console.log(allFromServer);
  console.log(result.data);
  dispatch(setAll(result.data));
};
