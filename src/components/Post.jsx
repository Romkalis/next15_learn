import React from "react";
import s from './Post.module.css'


function Post (props) {
    return (
    <li className={s.post}>
      <h4 className={s.author}> {props.author}</h4>
      <p className={s.text}>{props.body}</p>
    </li>
  );
};

export default Post