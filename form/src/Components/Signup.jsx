import React from 'react'
import signupImg from "../assets/Untitled design (2).svg";
import Template from './Template';

function Signup({ setIsLoggedIn, addUserData, addAdminData }) {
  return (
    <Template
      title="Join Us and Break Language Barriers"
      desc1="Connect to India's Voices"
      desc2="Be Part of the Multilingual Revolution"
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      addUserData={addUserData}
      addAdminData={addAdminData}
    />
  );
}

export default Signup