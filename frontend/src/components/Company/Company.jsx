// // import { useEffect } from "react";
// import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';

// function createMarkup() {
//   return { __html: descriptionCompany.description };
// }

// export default function Company() {
// const { id } = useParams();
//const reviews = useSelector(state => state.reviews);

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(setDataFromApiCompany())
// }, []);

// const companysFromSate = useSelector(state => state.companys);
//const reviewsForCompany =reviews.filter(elem=>{elem.companys==})

//   return (
//     <>
//       <h1>{company.name} </h1>
//       <div>
//         <div>
//           container for logo
//           <img src={company.logo_urls.original} alt={company.name}></img>
//         </div>
//         <div dangerouslySetInnerHTML={createMarkup()} />
//         {/* <h2>REVIEWS</h2> */}
//         <ul>
//           {reviewsForCompany.map((item) => (
//             <li key={item._id}>
//               <div>{item.author} </div>
//               <div>{item.info} </div>
//               <div>{item.date} </div>
//               <div>{item.company} </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allFetch } from '../../redux/actions/companyAC';
import style from './company.module.css';

export default function Company() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companys);

//================================тесты, можно удалять
  // const scrollHandler = (e) => {
    
    // if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)

    // // console.log('scrollHeigth', e.target.documentElement.scrollHeight);
    // // console.log('scrollTop', e.target.documentElement.scrollTop);
    // // console.log('innerHeight', window.innerHeight);
    // console.log('scroll');
    
    //   }
    
    //   useEffect(() => {
    // document.addEventListener('scroll',scrollHandler )
    // return function () {
    //   document.removeEventListener('scroll', scrollHandler)
    // }
    //   },[])
  //=====================================================================

  useEffect(() => {
    dispatch(allFetch());
  }, []);

  return (
    <div className="container container-main">
      <div className={style.company}>
        {companies?.map((el) => (
          <div className={style.wrap} key={el._id}>
            <div className={style.wrapper}>
              <span className={style.rating}>10</span>
            </div>
            <p className={style.location}>
              {el.companyName}, {el.area}
            </p>
            <Link className={style.link} to={`company/${el._id}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
