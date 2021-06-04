import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { sagaRegisterAC } from '../../../redux/actionCreators/userAC'

function Register() {

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

  const submitHandler = (e) => {
    e.preventDefault()

    const valuesOfFields = Object.fromEntries(new FormData(formRef.current).entries())

    if (Object.keys(valuesOfFields).every(key => valuesOfFields[key].trim())) {
      dispatch(sagaRegisterAC(valuesOfFields))
      formRef.current.reset()
    }
  }


  return (
    <section>
      <form ref={formRef} onSubmit={submitHandler}>
        <div>
          <p>Registration</p>
          <div>
            <label>Name</label>
            <input type='text' name='name' />

            <label>Surname</label>
            <input type='text' name='surname' />

            <label>Telegram</label>
            <input type='text' name='telegram' />

            <label>Email</label>
            <input type='email' name='email' />

            <label>Password</label>
            <input type='password' name='password' />

            <button type='submit'>Register</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Register
