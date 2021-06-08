import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allFetch } from '../../redux/actions/companyAC';
import style from './company.module.css';

export default function Company() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companys);

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
              <div style={{
                background: `url(${el.logo['240']}) no-repeat center`,
                height: '150px',
              }}>

              </div>
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
