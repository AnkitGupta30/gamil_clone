import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter, Route, Link, Routes} from "react-router-dom"
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import {useDispatch, useSelector} from "react-redux";
import{selectsendMessageIsOpen} from "./features/mailSlice";
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        // the user is logged in
        dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
        }))
      }
      else{
        // the user is looged out 
      }
    })
  }, [])
  return (
    <BrowserRouter>
    {!user ? (<Login/>) : (
      <div className="app">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Routes>
        <Route path='/mail' element={<Mail/>}></Route>
        <Route path='/' element={<EmailList/>}></Route>
      </Routes>
      {sendMessageIsOpen && <SendMail/>}
      </div>
    </div>
    )}
    </BrowserRouter>
  );
}

export default App;
