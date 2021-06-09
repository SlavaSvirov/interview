import initState from '../initState';
import { CHANGE_LIKE_REVIEW } from '../types/typeReview';
const {
  GET_ALL,
  ADD_REVIEW,
  SORT_REVIEWS,
  PROGINATION_REVIEWS,
  LOG_OUT,
} = require('../types/types');

function reviewsReducer(state = initState.reviews, action) {
  switch (action.type) {
    case GET_ALL:
      return action.payload;

    case ADD_REVIEW:
      return [...state, action.payload];

    case SORT_REVIEWS:
      const field = action.payload.e.target.dataset.name;
      const direction = action.payload.isSorted ? -1 : 1;
      const sortedData = state.sort((a, b) => {
        if (a[field] === b[field]) return 0;
        return a[field] > b[field] ? direction : -direction;
      });
      return [...sortedData];

    case PROGINATION_REVIEWS:
      return [...state, ...action.payload];
    case CHANGE_LIKE_REVIEW:
      return [...state, action.payload];

      case LOG_OUT :
      return initState.reviews

    default:
      return state;
  }
}

export default reviewsReducer;
