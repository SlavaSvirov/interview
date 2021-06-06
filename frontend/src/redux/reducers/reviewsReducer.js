const { GET_ALL, ADD_REVIEW } = require("../types/types");



function reviewsReducer(state =[], action) {

  switch (action.type) {
    case GET_ALL:
      
    return action.payload
  
    case ADD_REVIEW :
      return [...state, action.payload];
   
    default:
      return state
  }
  
  }
  
  
  export default reviewsReducer
  