function Register() {
  return (
    <section>
      <div>
        <p>Registration</p>
        <div>
          <label>Name</label>
          <input name='name' />

          <label>Surname</label>
          <input name='surname' />

          <label>Telegram</label>
          <input name='telegram' />

          <label>Email</label>
          <input name='email' />

          <label>Password</label>
          <input name='password' />

          <button>Register</button>
        </div>
      </div>
    </section>
  )
}

export default Register
