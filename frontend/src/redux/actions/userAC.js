import { AUTH, LOG_OUT, SAGA_LOGIN, SAGA_REGISTER } from '../types/types';

export const sagaRegisterAC = ({ email, password, name, surname }) => {
  return {
    type: SAGA_REGISTER,
    payload: {
      name,
      surname,
      email,
      password,
    },
  };
};

export const registerAC = (user) => {
  return {
    type: AUTH,
    payload: {
      ...user,
      isAuth: true,
    },
  };
};

export const sagaLoginAC = (user) => {
  return {
    type: SAGA_LOGIN,
    payload: {
      ...user
    },
  };
};

export const loginAC = (user) => {
  return {
    type: AUTH,
    payload: {
      ...user,
      isAuth: true,
    },
  };
};

export const logoutAC = () => async (dispatch) => {
  await fetch('http://localhost:3001/user/logout', {
    credentials: 'include',
  });
  dispatch(logout());
};

export const logout = () => {
  return {
    type: LOG_OUT,
    payload: {
      isAuth: false,
    },
  };
};
