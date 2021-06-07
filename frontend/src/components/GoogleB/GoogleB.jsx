import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

function GoogleB() {
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
    console.log(data);
    // store returned user somehow
  }

  return (
    <div class="g-signin2" data-onsuccess="onSignIn">
      <GoogleLogin
        clientId="1074219333942-jlp6l6mu4i6p8ofasch5vkpsb0n20uo5.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleB
