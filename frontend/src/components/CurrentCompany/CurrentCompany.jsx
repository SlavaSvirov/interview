import {useParams} from "react-router-dom"
import './currentCompany.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import {currentFetch} from '../../redux/actions/companyAC'





function CurrentCompany () {
const currentCompany = useSelector(state => state.companys)
// console.log('zxaafdsdfdfbhdfg',currentCompany);
const dispatch = useDispatch()

  const {id} = useParams()
  // console.log('//////////', id);
  
  
  
  // const currentCompany = companies.find(com => com._id === id)
  useEffect(() => {
  dispatch(currentFetch(id))
},[])

  return (
<div className='currentCompany'>
  <h1>{currentCompany ? currentCompany.companyName : 'dfhdfhddgd'}</h1>
</div>
  )
}



export default CurrentCompany
