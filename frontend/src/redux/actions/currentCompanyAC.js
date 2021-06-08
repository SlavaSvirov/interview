import { GET_CURRENT_COMPANY } from '../types/types';

export const setCurrentCompany = (id) => {
  return {
    type: GET_CURRENT_COMPANY,
    payload: id,
  };
};

export const currentFetch = (id) => async (dispatch) => {
  const result = await fetch(`http://localhost:3001/company/${id}`);

  const currentSearchromServer = await result.json();

  dispatch(setCurrentCompany(currentSearchromServer));
};
