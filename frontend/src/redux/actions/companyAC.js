import { GET_ALL_COMPANYS } from "../types/types"


export const setAll = (companys)  => {
  return {
    type : GET_ALL_COMPANYS,
    payload : companys
  }
}

export const getAllFetch = (text) => async (dispatch) => {

const result = await fetch("http://localhost:3001", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify( {text} ),
})
const allFromServer = await result.json()

// console.log(allFromServer);

dispatch(setAll(allFromServer));
}
