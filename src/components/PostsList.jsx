import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

import s from "./PostsList.module.css";

const PostsList = ({modalIsVisible, onCloseModal}) => {

  const [posts, setPosts] = useState([{
    author: "Roman",
    text: "Olololoee!!"
  }])

  const onPostSubmit = (name, text) => {
    setPosts( prev => [...prev, {[name]: text}])
  }

  return (
    <>
      <ul className={s.posts}>
        {posts.map( post => <Post
          author={post.author}
          body={post.text}
          key={post.text + post.author}
        />)}
      </ul>

      {modalIsVisible &&
        <Modal onClose={onCloseModal}>
          <NewPost
            onCancel={onCloseModal}
            onPosted={onPostSubmit}
          />
        </Modal>
      }
    </>
  );
};

export default PostsList;
