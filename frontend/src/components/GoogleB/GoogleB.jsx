import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { registerAC } from '../../redux/actions/userAC';

export default function GoogleB() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    if (isAuth) {
      history.replace(from);
    }
  }, [isAuth]);

  const handleLogin = async googleData => {
    console.log(googleData);
    const res = await fetch("http://localhost:3001/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      }
    })

    const data = await res.json()
    if (data._id) { dispatch(registerAC({name:data.name,id:data._id}))}
    else console.log("error");
  }
  return (
    <div class="g-signin2" data-onsuccess="onSignIn">
      <GoogleLogin
        clientId="1074219333942-jlp6l6mu4i6p8ofasch5vkpsb0n20uo5.apps.googleusercontent.com"

        buttonText="Log In with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}
