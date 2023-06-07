import { useState } from "react";
import classes from "./Post.module.css";

import Detail from "./Detail";
import Modal from "./Modal";

function Post(props) {
  const [data, setData] = useState({});
  const [isData, setisData] = useState(false);

  function viewMore(event) {
    // 여기서 /posts/:id get요청을 보내면
    // 근데 포스트 id를 어떻게 알아? 
    console.log(props);
    // props에 author와 body만 있음.
    // uuid를 클라이언트 쪽으로 옮김 -> 이제 id까지 나옴. 
    // let postId = props.id
    // fetch(`http://localhost:3000/posts/${postId}`)

    let dname = event.currentTarget.querySelector(`.${classes.author}`).textContent;
    let dbody = event.currentTarget.querySelector(`.${classes.text}`).textContent;
    let postdata = {
      name: dname,
      body: dbody,
    };
    setisData(true);
    setData(postdata);
  }
  function closeModal(){
    setisData(false);
  }

  return (
    <>
      <li className={classes.post} onClick={viewMore}>
        <h2 className={classes.author}>{props.author}</h2>
        <p className={classes.text}>{props.body}</p>
      </li>
      { isData ? <Modal><Detail data={data} onClose={closeModal} /></Modal> : null}
    </>
  );
}

export default Post;