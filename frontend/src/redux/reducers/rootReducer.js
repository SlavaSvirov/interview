
import { combineReducers } from 'redux'
import reviewsReducer from './reviewsReducer'
import companyReducer from './companyReducer'

import userReducer from "./userReducer";

const appReducer = combineReducers({
  reviews: reviewsReducer,
  companys : companyReducer,
  user: userReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
