import classes from './NewPost.module.css';
import {useState} from "react";
import Modal from "../components/Modal.jsx";
import {Link} from "react-router-dom";

function NewPost({onPosted}) {
  const [inputedText, setInputText] = useState("");
  const [inputedName, setInputName] = useState("");
  const changeTextHandler = (evt) => {
    setInputText(evt.target.value);
  };
  const changeNameHandler = (evt) => {
    setInputName(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onPosted(inputedName, inputedText)
  }

  return (<Modal>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea onChange={changeTextHandler} id="body" required rows={3} value={inputedText}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input onChange={changeNameHandler} type="text" id="name" required value={inputedName}/>
        </p>
        <p className={classes.actions}>
          <button className={classes.button}>Add new post</button>
          <Link className={classes.button} to={'..'}>Cancel</Link>
        </p>
      </form>
    </Modal>);
}

export default NewPost;
