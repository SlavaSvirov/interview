import { Link } from "react-router-dom";

function Header() {
  return (
    <section>
      <nav className='burger'>
        <Link to='/'><span className='logo'>LOGO</span></Link>
        <div className='secondBurger'>
          <ul>
            <li><Link to='/company'>Company</Link></li>
            <li><Link to='/'>Home</Link></li>
          </ul>
        </div>
        <div className="thirdBurger">
          <ul>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/logout'>Log Out</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Header
