import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import InputOption from './InputOption';
import './post.css';
import { ThumbUpAlt, Share, Comment, Send } from '@material-ui/icons';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../features/userSlice';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  // const user = useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpAlt} title="Like" />
        <InputOption Icon={Comment} title="Comment" />
        <InputOption Icon={Share} title="Share" />
        <InputOption Icon={Send} title="Send" />
      </div>
    </div>
  );
});

export default Post;
