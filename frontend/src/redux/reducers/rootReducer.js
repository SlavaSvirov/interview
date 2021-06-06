// const {combineReducers} = require('redux')
// const reviewsReducer = require('./reviewsReducer')
// const companyReducer = require('./companyReducer')
import {combineReducers} from 'redux'
import companyReducer from './companyReducer'
import reviewsReducer from './reviewsReducer'


const rootReducer = combineReducers({

  reviews : reviewsReducer,
  companys : companyReducer

})




export default rootReducer
