import {
  AUTH,
  LOG_OUT,
  SAGA_LOGIN,
  SAGA_REGISTER,
  SET_USER,
} from '../types/types';

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
      ...user,
    },
  };
};

export const loginAC = (user) => {
  console.log(user);
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

export const changeAvatar = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const changeAvatarFetch = (file, id) => async (dispatch) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('id', id);

  const response = await fetch('http://localhost:3001/user/changeAvatar', {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });
  const newUser = await response.json();
  dispatch(changeAvatar(newUser));
};
