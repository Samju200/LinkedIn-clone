import React, { useEffect } from 'react';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';
import Header from './app/Header';
import Sidebar from './Sidebar';
import Feed from './app/Feed';
import { useDispatch, useSelector } from 'react-redux';
import Login from './app/Login';
import { auth } from './app/firebase';
import Widgets from './app/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {/* header} */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
