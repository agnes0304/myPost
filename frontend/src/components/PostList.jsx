import { useState, useEffect } from "react";
import Modal from "./Modal";
import NewPost from "./Newpost";
import Post from "./Post";
import classes from "./Postlist.module.css";

function PostList(props) {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data))
  })

  function addPostHandler(postData) {
    setPosts((oldPost) => [postData, ...oldPost]);
  }

  return (
    <>
      { props.isPosting ? (
        <Modal onClose={props.onStopPost}>
          <NewPost onCancel={props.onStopPost} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      { posts.length > 0 && (<ul className={classes.posts}>
          {posts.map((post) => 
          <Post key={post.author} author={post.author} body={post.body} />)}
        </ul>)}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>There are no posts yet.</h1>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
