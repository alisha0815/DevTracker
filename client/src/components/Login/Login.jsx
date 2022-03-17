import React from 'react';
import { authentification } from '../../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import styled from 'styled-components';
import COLORS from '../../styles/styled.constants';

const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ; 
  margin: 0.5em;
  padding: 0.5em;
  width: 90%;
  height: 3rem;
  border-radius: 30px;
  background-color: black;
  color: white;
  :hover {
    background-color: ${COLORS.buttonLogin};
    color: white;
    cursor: pointer;
  }
`

function Login({ loggedIn, setLoggedIn }) {

  const SingInWithGoogle = async res => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentification, provider)
      .then(res =>
        localStorage.setItem(
          'uid',
          res.user.uid,
          localStorage.setItem('userPhoto', res.user.photoURL),
          localStorage.setItem('userName', res.user.displayName),
          localStorage.setItem('email', res.user.email)
        )
      )
      .then(() => {
        localStorage.getItem('uid')
          ? setLoggedIn(true)
          : console.log('loading');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const userPhoto = localStorage.getItem('userPhoto');

  const LogOut = async () => {
    signOut(authentification)
      .then(res => {
        console.log(res, 'logged out res');
      })
      .then(setLoggedIn(false))
      .catch(err => {
        console.log(err);
      });
    localStorage.removeItem('uid');
    localStorage.removeItem('userPhoto');
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginButton className="login-button" onClick={SingInWithGoogle}>Sing In With Google</LoginButton>
      ) : (
        <LoginButton className="login-google" onClick={LogOut}>Log out</LoginButton>
      )}
    </div>
  );
}

export default Login;
