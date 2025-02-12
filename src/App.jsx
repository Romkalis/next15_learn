import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)

  const showModalHandler = () => {
    setModalIsVisible(true)
  }

  const closeModalHandler = () => {
    setModalIsVisible(false)
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>

      <main>
        <PostsList modalIsVisible={modalIsVisible} onCloseModal={closeModalHandler}/>
      </main>
    </>
  );
}

export default App;
