import classes from "./NewPost.module.css";
// import { useState } from "react";

function NewPost() {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Message</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="author">Name</label>
        <input id="author" required />
      </p>
      <p className={classes.actions}>
        <button type="button">
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
