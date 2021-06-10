import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allFetch } from '../../redux/actions/companyAC';
import style from './company.module.css';
import { useLoaderContext } from '../../context/LoaderContext';
import Loader from '../Loader/Loader';

export default function Company() {
  const dispatch = useDispatch();

  const companies = useSelector((state) => state.companys);

  const { loader, showLoader, hideLoader } = useLoaderContext();

  useEffect(() => {
    showLoader();
    dispatch(allFetch()).then(() => hideLoader());
  }, []);

  return (
    <div className="container container-main">
      {loader ? (
        <Loader />
      ) : (
        <div className={style.company}>
          {companies.length ? (
            companies?.map((el) => (
              <div className={style.wrap} key={el._id}>
                <div className={style.wrapper}>
                  <span className={style.rating}>{el.rating}</span>
                </div>
                <p className={style.location}>
                  <div
                    style={{
                      background: `url(${el.logo['240']}) no-repeat center`,
                      height: '180px',
                    }}
                  ></div>
                  {el.companyName}, {el.area}
                </p>
                <Link className={style.link} to={`company/${el._id}`}>
                  Read More
                </Link>
              </div>
            ))
          ) : (
            <h1 className={style.info}>NO companies</h1>
          )}
        </div>
      )}
    </div>
  );
}
