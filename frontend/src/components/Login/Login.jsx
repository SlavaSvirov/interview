import { Link } from "react-router-dom";

function Login() {
  return (
    <section>
      <div>
        <p>LOGO</p>
        <div>
          <label>Email</label>
          <input name='email' />

          <label>Password</label>
          <input name='password' />

          <button>Log In</button>
        </div>
        <div>
          <p>If you don't have a account,
            you can <Link to='/register'>create</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
