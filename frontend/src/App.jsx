import { useState } from "react";
import PostList from "./components/PostList";
import Header from "./components/Header";

function App() {
  const [isVisible, setVisible] = useState(true);

  function hideModalHandler(event) {
    setVisible(false);
  }
 
  function showModalHandler(event) {
    setVisible(true);
  }

  return (
    <>
      <Header onCreatePost={showModalHandler}/>
      <main>
        <PostList isPosting={isVisible} onStopPost={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
