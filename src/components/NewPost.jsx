
import classes from './NewPost.module.css';

function NewPost({
    changeNameHandler,
    changeTextHandler,
    inputedText,
    inputedName
}) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={changeTextHandler} id="body" required rows={3} value={inputedText}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input onChange={changeNameHandler} type="text" id="name" required value={inputedName}/>
      </p>
    </form>
  );
} 

export default NewPost;
