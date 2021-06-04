import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import style from './header.module.css'
import { logoutAC } from '../../redux/actionCreators/userAC';

function Header() {
  
  const dispatch = useDispatch()

const logOutHandler = () => {
  dispatch(logoutAC())
}

  
  return (
    <section className={style.header}>
      <nav className={style.burger}>
        <Link to="/">
          <span className={style.logo}>LOGO</span>
        </Link>
        <div className={style.secondBurger}>
          <ul>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className={style.thirdBurger}>
          <ul>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to='/' onClick={() =>logOutHandler()}>Log Out</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Header;
