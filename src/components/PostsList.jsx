import React, {useState, useEffect} from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import s from "./PostsList.module.css";

const PostsList = ({modalIsVisible, onCloseModal}) => {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    // fetch('http://localhost:8080/posts')
    //   .then( response =>  response.json() )
    //   .then ( data => {
    //     console.log(data)
    //     setPosts(data.posts)
    //   })
    //   .catch( e => console.warn('Fetch error' ))
    (async function () {
      try {
        const response = await fetch('http://localhost:8080/posts')
        if (!response.ok) throw new Error('We had not have response');
        const data = await response.json()
        setPosts(data?.posts)
      } catch (e) {
        console.warn('Fetched from server failed', e.message)
      }

    })()

  }, []);

  const onPostSubmit = (name, text) => {

    const newPost = {author: name, body: text}

    fetch('http://localhost:8080/posts', {
      method: "POST", body: JSON.stringify(newPost), headers: {
        'Content-Type': 'application/json'
      }
    })
    const updatedPosts = [...posts, newPost]
    setPosts(updatedPosts)
  }

  return (<>
    {posts.length > 0 && <ul className={s.posts}>
      {posts.map(post => <Post
        author={post.author}
        body={post.body}
        key={post.id || post.body}
      />)}
    </ul>}

    {posts.length === 0 && <>
      <h2>There are not posts yet </h2>
      <p>Start adding some!</p>
    </>}
    {modalIsVisible && <Modal onClose={onCloseModal}>
      <NewPost
        onCancel={onCloseModal}
        onPosted={onPostSubmit}
      />
    </Modal>}
  </>);
};

export default PostsList;
