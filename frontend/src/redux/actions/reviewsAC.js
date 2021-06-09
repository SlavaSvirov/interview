import { GET_ALL, PROGINATION_REVIEWS, SORT_REVIEWS } from "../types/types";
import axios from "axios";
import ColumnGroup from "antd/lib/table/ColumnGroup";

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

export const pogination = (litleReview) => {
 
  
  return {
    type: PROGINATION_REVIEWS,
    payload: litleReview,
  };
};

export const getAllFetch = (index) => async (dispatch) => {
  const result = await axios("http://localhost:3001/review");

  dispatch(setAll(result.data));
};

export const getCurrentReviews = (id) => async (dispatch) => {
  const result = await axios("http://localhost:3001/review");

  dispatch(setAll(result.data));
};

export const getLitle = (index) => async (dispatch) => {
  const result = await axios("http://localhost:3001/review");

  const litle = result.data.slice(index, index+6);
  
  
  dispatch(pogination(litle));
};
