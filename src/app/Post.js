import { Avatar } from '@material-ui/core';
import React, { forwardRef, useEffect, useState } from 'react';
import { db } from './firebase';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  doc,
  serverTimestamp,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import firebase from 'firebase';
import InputOption from './InputOption';
import './post.css';
import { ThumbUpAlt, Share, Comment, Send } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Post = forwardRef(({ id, name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);
  const [comment, setComment] = useState();
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment('');
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      name: user.displayName,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      )[(db, id)]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs)
      )[(db, id)]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === user?.user?.uid) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'post', id, 'likes', user.user.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', user.user.uid), {
        name: user.user.displayName,
      });
    }
  };

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
        <InputOption Icon={ThumbUpAlt} title="Like" onClick={likePost} />
        <InputOption Icon={Comment} title="Comment" />
        <InputOption Icon={Share} title="Share" />
        <InputOption Icon={Send} title="Send" />
      </div>
    </div>
  );
});

export default Post;
