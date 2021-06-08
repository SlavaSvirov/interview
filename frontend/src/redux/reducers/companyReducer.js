import { GET_ALL_COMPANYS, GET_ALL_FROM_SERVER } from '../types/types';

function companyReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_COMPANYS:
      return action.payload;

    case GET_ALL_FROM_SERVER:
      return action.payload;
    default:
      return state;
  }
}

export default companyReducer;
