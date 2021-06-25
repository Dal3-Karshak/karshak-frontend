  
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function LoginButton() {
  const { isAuthenticated, loginWithRedirect, } = useAuth0();

  return !isAuthenticated && (
    <>
      {/* <button className='btn btn-ghost' onClick={loginWithRedirect}>Get Started</button> */}
      <a className="btn btn-ghost" onClick={loginWithRedirect}>Get Started</a>
    </>

  );
}

export default LoginButton;