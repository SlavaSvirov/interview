import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './header.module.css';
import { logoutAC } from '../../redux/actions/userAC';
import GoogleB from '../GoogleB/GoogleB';
import { useState } from 'react';

function Header() {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logoutAC());
  };

  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.burger}>
          <Link to="/">
            <span className={style.logo}>
              Interv<span>/eW</span>
            </span>
          </Link>
          <div className={style.secondBurger}>
            {isAuth ? (
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/company">Company</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/" onClick={() => logOutHandler()}>
                    Log Out
                  </Link>
                </li>
              </ul>
            ) : (
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/company">Company</Link>
                  </li>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                  <li>
                    <GoogleB />
                  </li>
                </ul>
              )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
