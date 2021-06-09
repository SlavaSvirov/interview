import initState from '../initState';
import { GET_CURRENT_COMPANY, LOG_OUT } from '../types/types';

function currentCompanyReducer(state = initState.currentCompany, action) {
  switch (action.type) {
    case GET_CURRENT_COMPANY:
      return action.payload;

      case LOG_OUT:
      return initState.currentCompany;
    default:
      return state;
  }
}

export default currentCompanyReducer;
