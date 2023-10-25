import React from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = ()=>{
    auth.signOut().then(()=>{
      dispatch(logout());
    })
  }
  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
              <MenuIcon/>
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png" alt="" />

        </div>
        <div className="header__middle">
            <SearchIcon/>
            <input type="text" placeholder='Search mail' />
            <TuneIcon className='header__inputcaret'/>
        </div>
        <div className="header__right">
        <HelpIcon/>
        <SettingsIcon/>
        <AppsIcon/>
        <Avatar onClick={signOut} src={user?.photoUrl} style={{cursor:'pointer'}}/>
        </div>
    </div>
  )
}

export default Header;
