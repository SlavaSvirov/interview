
import { combineReducers } from 'redux'
import reviewsReducer from './reviewsReducer'
import userReducer from "./userReducer";

const appReducer = combineReducers({
  reviews: reviewsReducer,
  user: userReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
