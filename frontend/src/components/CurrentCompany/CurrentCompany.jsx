import { useParams } from 'react-router-dom';
import './currentCompany.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  currentFetch,
  setCompanyFetch,
} from '../../redux/actions/currentCompanyAC.js';
import nologo from '../../img/nologo.svg';
import Reviews from '../Reviews/Reviews';
import { useLoaderContext } from '../../context/LoaderContext';
import Loader from '../Loader/Loader';

function CurrentCompany() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
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

  const { loader, showLoader, hideLoader } = useLoaderContext();

  const dispatch = useDispatch();

  useEffect(() => {
    showLoader();
    dispatch(currentFetch(id)).then(() => hideLoader());
  }, []);

  const handleChangeJob = (id, userId) => {
    dispatch(setCompanyFetch(id, userId));
  };

  return (
    <div className="container container-main">
      {loader ? (
        <Loader />
      ) : (
        <div className="currentCompany">
          <div style={{ padding: '15px' }}>
            <div className="company">
              <a href={currentCompany.companyUrl} alt={currentCompany.name}>
                <img
                  src={checkLogo(currentCompany.logo)}
                  alt={currentCompany.name}
                ></img>
              </a>
              <h1>{currentCompany.companyName} </h1>
              <div>
                {!currentCompany.graduates?.includes(user._id) ? (
                  <button
                    onClick={() =>
                      handleChangeJob(currentCompany._id, user._id)
                    }
                    className="btn"
                  >
                    Я здесь работаю!
                  </button>
                ) : (
                  'Вы здесь работаете'
                )}
                <div>
                  {currentCompany.graduates?.length} выпускников Elbrus работают
                  в этой компании!
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={createMarkup()} />
            <hr />
            <div className="wrapper">
              {currentCompany?.reviews?.map((review) => {
                return <Reviews key={review._id} review={review} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentCompany;
