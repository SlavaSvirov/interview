import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { sagaRegisterAC } from '../../../redux/actions/userAC';
import style from './register.module.css';

function Register() {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (isAuth) {
      history.replace(from);
    }
  }, [isAuth]);

  const submitHandler = (e) => {
    e.preventDefault();

    const valuesOfFields = Object.fromEntries(
      new FormData(formRef.current).entries()
    );

    if (
      Object.keys(valuesOfFields).every((key) => valuesOfFields[key].trim())
    ) {
      dispatch(sagaRegisterAC(valuesOfFields));
      formRef.current.reset();
    }
  };

  return (
    <section className={style.registerSection}>
      <form
        ref={formRef}
        onSubmit={submitHandler}
        className={style.registerForm}
      >
        <div className={style.registerDiv}>
          <p className={style.logo}>
            Interv<span>/eW</span>.com
          </p>
          <p className={style.registerText}>Sign up and start shortening</p>
          <div className={style.registerInputs}>
            <label>Name</label>
            <br />
            <input type="text" name="name" />
            <br />

            <label>Surname</label>
            <br />
            <input type="text" name="surname" />
            <br />

            <label>Email</label>
            <br />
            <input type="email" name="email" />
            <br />

            <label>Password</label>
            <br />
            <input type="password" name="password" />

            <button type="submit" className={style.registerBtn}>
              Sign Up
            </button>
          </div>
          <p className={style.login}>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;
