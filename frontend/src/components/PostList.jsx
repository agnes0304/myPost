import Modal from "./Modal";
import NewPost from "./Newpost";
import Post from "./Post";
import classes from "./Postlist.module.css";

function PostList() {
  return (
    <>
      <Modal>
        <NewPost />
      </Modal>
      <ul className={classes.posts}>
        <Post author={"test author1"} body={"test body1"} />
        <Post author={"test author2"} body={"test body2"} />
      </ul>
    </>
  );
}

export default PostList;
