import { useParams } from 'react-router-dom';
import './currentCompany.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { currentFetch } from '../../redux/actions/currentCompanyAC.js';
import nologo from '../../img/nologo.svg';
import { getAllFetch } from '../../redux/actions/companyAC';
import Reviews from '../Reviews/Reviews';

function CurrentCompany() {
  const { id } = useParams();
  const currentCompany = useSelector((state) => state.currentCompany);

  function createMarkup() {
    return { __html: currentCompany.description };
  }
  const checkLogo = (logoObj) => {
    let logoValid;
    if (logoObj) {
      let arrFromObjLogo = Object.values(logoObj);
      let logoValidArr = arrFromObjLogo.filter((elem) => elem !== 'null');
      logoValid = logoValidArr[0];
    } else {
      logoValid = nologo;
    }
    return logoValid;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentFetch(id));
  }, []);

  return (
    <div className="currentCompany">
      <h1>{currentCompany.companyName} </h1>
      <div>
        <div>
          <img
            src={checkLogo(currentCompany.logo)}
            alt={currentCompany.name}
          ></img>
          <a href={currentCompany.companyUrl} alt={currentCompany.companyUrl}>
            {currentCompany.companyUrl}
          </a>
        </div>
        <div dangerouslySetInnerHTML={createMarkup()} />
        {/* <h2>REVIEWS</h2> */}

        {currentCompany?.reviews?.map((review) => {
          return <Reviews review={review} />;
        })}
      </div>
    </div>
  );
}

export default CurrentCompany;
