import { Link } from "react-router-dom";
import style from './login.module.css'

function Login() {
  return (
    <section className={style.sectionLogin}>
      <div className={style.login}>
        <p className={style.logo}>LOGO</p>
        <div className={style.loginInputs}>
          <label>Email</label>
          <input name='email' />

          <label>Password</label>
          <input name='password' />

          <button>Log In</button>
        </div>
        <div>
          <p className={style.loginText}>Don't you have account? <Link to='/register'>Registration</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
