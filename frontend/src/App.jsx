// import { useState } from "react";
import PostList from "./components/PostList";
import Header from "./components/Header";

function App() {
  // const [ isVisible, setVisible ] = useState(true);



  // function showModalHandler() {
  //   setVisible(true);
  // }
  return (
    <>
      <Header />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default App;
