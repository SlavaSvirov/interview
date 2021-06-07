import {useParams} from "react-router-dom"
import './currentCompany.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";




function CurrentCompany () {
const companies = useSelector(state => state.companys)

  const {id} = useParams()
  
  // console.log(currentCompany);
  
  const currentCompany = companies.find(com => com._id === id)
  useEffect(() => {
  
})

  return (
<div className='currentCompany'>
  <h1>{currentCompany ? currentCompany.companyName : 'dfhdfhddgd'}</h1>
</div>
  )
}



export default CurrentCompany
