import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import {useState} from "react";

import s from "./PostsList.module.css";

const PostsList = ({modalIsVisible, onCloseModal}) => {

  const isLocalStateData = () => {
    try {
      return JSON.parse(localStorage.getItem('posts')) || []
      // проверка - если дата невалидная, то вернет пустой массив, если нет свойства - ошибка, где вернем пустой массив
    } catch (e) {
      return []
    }
  }

  const [posts, setPosts] = useState(isLocalStateData())

  const onPostSubmit = (name, text) => {
    const newPost = [...posts, {author: name, text: text}]
    setPosts(newPost)
    localStorage.setItem( "posts",  JSON.stringify(newPost))
  }

  return (
    <>
      {posts.length > 0 &&
      <ul className={s.posts}>
        {posts.map(post => <Post
          author={post.author}
          body={post.text}
          key={post.text + post.author}
        />)}
      </ul>
      }

      {posts.length === 0 &&
      <>
        <h2>There are not posts yet </h2>
        <p>Start adding some!</p>
      </>}

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
