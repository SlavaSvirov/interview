import { AUTH, LOG_OUT, SAGA_REGISTER } from "../types/types"


export const sagaRegisterAC = ({ email, password, name, telegram, surname }) => {
  return {
    type: SAGA_REGISTER,
    payload: {
      name,
      surname,
      telegram,
      email,
      password
    }
  }
}

export const registerAC = (name = '') => {
  return {
    type: AUTH,
    payload: {
      name,
      isAuth: true
    }
  }
}


export const logoutAC = () => async (dispatch) => {
  await fetch('http://localhost:3001/user/logout', {
    credentials: 'include'
  })
  dispatch(logout())
}

export const logout = () => {
  return {
    type: LOG_OUT,
    payload: {
      isAuth: false
    }
  }
}
