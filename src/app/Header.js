import React from 'react';
import { Search } from '@material-ui/icons';
import './header.css';
import HeaderOption from './HeaderOption';
import {
  Home,
  People,
  Work,
  Textsms,
  Notifications,
  List,
  ArrowDropDown,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from './firebase';
// import PeopleIcon from '@material-ui/icons/People';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1616420420~hmac=6095be279e5cbd0e551a5de7064cf956"
          alt=""
        />
        <div className="header_search">
          <Search />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header_middle">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={People} title="My Network" />
        <HeaderOption Icon={Work} title="Job" />
        <HeaderOption Icon={Textsms} title="Messaging" />
        <HeaderOption Icon={Notifications} title="My Network" />
        <HeaderOption
          avatar={true}
          title="Me"
          arrow={<ArrowDropDown onClick={logoutOfApp} />}
        />
      </div>
      <div className="header_right">
        <HeaderOption Icon={List} title="Work" arrow={<ArrowDropDown />} />
        <p>Retry Premium Free</p>
      </div>
    </div>
  );
}

export default Header;
