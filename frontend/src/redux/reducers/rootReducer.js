const {combineReducers} = require('redux')
const reviewsReducer = require('./reviewsReducer')

const rootReducer = combineReducers({

  reviews : reviewsReducer

})




module.exports = rootReducer
