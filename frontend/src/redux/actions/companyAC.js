import { GET_ALL_FROM_SERVER, GET_ALL_COMPANYS, GET_CURRENT_COMPANY } from "../types/types"


export const setAll = (companys)  => {
  return {
    type : GET_ALL_COMPANYS,
    payload : companys
  }
}

export const all = (companies) => {
  return  {
    type : GET_ALL_FROM_SERVER,
    payload : companies
  }
}

export const setCurrentCompany = (id) => {
  return {
    type : GET_CURRENT_COMPANY,
    payload : id

  }
}


export const allFetch = () => async (dispatch) => {
  const com = await fetch("http://localhost:3001/company")
const allCompanies = await com.json()

dispatch(all(allCompanies))
}

export const getAllFetch = (text) => async (dispatch) => {

const result = await fetch("http://localhost:3001/company", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify( {text} ),
})
const allFSearchromServer = await result.json()


dispatch(setAll(allFSearchromServer));
}

export const currentFetch = (id) => async (dispatch) => {

  const result = await fetch(`http://localhost:3001/company/${id}`)
  //  {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify( {id} ),
  // })
  // console.log('result',result);
  const currentSearchromServer = await result.json()
  

  dispatch(setCurrentCompany(currentSearchromServer));
  }
