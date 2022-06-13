import React, { useState, useEffect } from 'react';
import './feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import { Image, YouTube, Event, Subject } from '@material-ui/icons';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={YouTube} title="VIdeo" color="#e7a33e" />
          <InputOption Icon={Event} title="Event" color="#cocbcd" />
          <InputOption Icon={Subject} title="Write Article" color="#7fc15e" />
        </div>
      </div>
      {/* post */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              id={id}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
