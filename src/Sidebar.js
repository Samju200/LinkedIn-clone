import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './sidebar.css';

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1534005011204-1de39943a967?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <Avatar src={user.photoUrl} className="avatar_sidebar">
          {user.email[0]}{' '}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who veiwed you</p>
          <p className="sidebar_statNumber">2,000</p>
        </div>
        <div className="sidebar_stat">
          <p>Veiws on post</p>
          <p className="sidebar_statNumber">2,000</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('chemist')}
        {recentItem('design')}
        {recentItem('developer')}
        <h3>Group</h3>
        <h3>Event</h3>
        <h3>Followed Hashtags</h3>
        {recentItem('emotionalintelligence')}
        {recentItem('biotechnology')}
        {recentItem('research')}
        {recentItem('chemist')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
