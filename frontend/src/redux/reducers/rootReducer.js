import { combineReducers } from "redux";
import reviewsReducer from "./reviewsReducer";
import companyReducer from "./companyReducer";

import userReducer from "./userReducer";

const appReducer = combineReducers({
  user: userReducer,
  reviews: reviewsReducer,
  companys: companyReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
