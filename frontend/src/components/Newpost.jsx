import { useState, useEffect } from "react";
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
    fetch("http://localhost:3000/newpost", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    })
    .then((data) => {
      console.log("서버가 말하길...", data);
    })
    .catch((err) => {
      console.log("에러다 에러, ", err)
    })
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
