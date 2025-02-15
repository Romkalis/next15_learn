import React, {useState, useEffect} from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import s from "./PostsList.module.css";

const PostsList = ({modalIsVisible, onCloseModal}) => {

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true)
        const response = await fetch('http://localhost:8080/posts')
        if (!response.ok) {
          console.warn('We had not have response')
        }
        const data = await response.json()
        setPosts(data?.posts)
      } catch (e) {
        console.warn('Fetched  from server failed', e.message)
      } finally {
        setIsLoading(false)

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
    </ul>
    }

    {isLoading &&
      <h2>Loading...</h2>
    }

    {!isLoading && posts.length === 0 && <>
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
