import initState from '../initState';
import { GET_CURRENT_COMPANY } from '../types/types';

function currentCompanyReducer(state = initState.currentCompany, action) {
  switch (action.type) {
    case GET_CURRENT_COMPANY:
      return action.payload;
    default:
      return state;
  }
}

export default currentCompanyReducer;
