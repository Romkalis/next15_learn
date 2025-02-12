import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

import s from "./PostsList.module.css";

const PostsList = ({modalIsVisible, onCloseModal}) => {

  const [inputedText, setInputText] = useState("");
  const [inputedName, setInputName] = useState("");

  const changeTextHandler = (evt) => {
    setInputText(evt.target.value);
  };
  const changeNameHandler = (evt) => {
    setInputName(evt.target.value);
  };


  return (
    <>
      <ul className={s.posts}>
        <Post author={"Roman"} body={"says: OLOLOLOE!!!"} />
        <Post author={inputedName} body={inputedText} />
      </ul>

      {modalIsVisible &&
        <Modal onClose={onCloseModal}>
          <NewPost
            inputedName={inputedName}
            inputedText={inputedText}
            changeNameHandler={changeNameHandler}
            changeTextHandler={changeTextHandler}
          />
        </Modal>
      }
    </>
  );
};

export default PostsList;
