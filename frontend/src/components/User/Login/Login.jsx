import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { sagaLoginAC } from "../../../redux/actionCreators/userAC";
import style from './login.module.css'

function Login() {

  const formRef = useRef(null)

  const dispatch = useDispatch()

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const isAuth = useSelector(state => state.user.isAuth)

  useEffect(() => {
    if (isAuth) {
      history.replace(from)
    }
  }, [isAuth])


  const loginHandler = (e) => {
    e.preventDefault()

    const valuesOfFields = Object.fromEntries(new FormData(formRef.current).entries())

    if (Object.keys(valuesOfFields).every(key => valuesOfFields[key].trim())) {
      dispatch(sagaLoginAC(valuesOfFields))
      formRef.current.reset()
    }

  }

  return (
    <section className={style.sectionLogin}>
      <form ref={formRef} onSubmit={loginHandler}>
        <div className={style.login}>
          <p className={style.logo}>Interv<span>/eW</span>.com</p>
          <p className={style.logoTagline}>Log in and start sharing</p>
          <div className={style.loginInputs}>
            <label>Email address</label>
            <br />
            <input type='text' name='email' />

            <br />
            <label>Password</label>
            <br />
            <input type='password' name='password' />

            <button className={style.button}>Log In</button>
          </div>
          <div>
            <p className={style.loginText}>Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login
