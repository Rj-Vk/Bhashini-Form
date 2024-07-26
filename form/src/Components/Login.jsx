import React from 'react'
import loginImg from "../assets/Untitled design.svg";
import Template from './Template';

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back!"
      desc1="Login in to Bridge Language Barriers"
      desc2="Rejoin the Movement for Linguistic Inclusion"
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}


export default Login