import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './style/logout.css'


function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    // <button className='logout-btn' onClick={() => {logout({ returnTo: window.location.origin });}}>Log out</button>
    <a className="logOut" onClick={() => {logout({ returnTo: window.location.origin });}} >Log out</a>

  );
}

export default LogoutButton;