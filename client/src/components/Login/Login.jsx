import React from 'react';
import { authentification } from '../../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

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
        <button onClick={SingInWithGoogle}>Sing In With Google</button>
      ) : (
        <button onClick={LogOut}>Log out</button>
      )}
    </div>
  );
}

export default Login;
