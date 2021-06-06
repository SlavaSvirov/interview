import { GET_ALL_COMPANYS } from "../types/types";



function companyReducer (state = [], action) {

  switch (action.type) {
    case GET_ALL_COMPANYS : 
      
      return action.payload
  
    default:
      return state
  }
}


export default companyReducer

