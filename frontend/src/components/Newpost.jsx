import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost(props) {
  const [enteredBody, setBody] = useState("");
  const [enteredAuthor, setAuthor] = useState("");

  function bodyHandler(event) {
    setBody(event.target.value);
  }

  function authorHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
    };
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Message</label>
        <textarea id="body" required rows={3} onChange={bodyHandler} />
      </p>
      <p>
        <label htmlFor="author">Name</label>
        <input id="author" required onChange={authorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
