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

export const registerAC = (name = '') => {
  return {
    type: AUTH,
    payload: {
      name,
      isAuth: true,
    },
  };
};

export const sagaLoginAC = ({ email, password }) => {
  return {
    type: SAGA_LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const loginAC = () => {
  return {
    type: AUTH,
    payload: {
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
