import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    setBookmark([...bookmark, blog]);
  };
  const handleMarkAsRead = (time, id) => {
    const newCount = readingCount + time;
    setReadingCount(newCount);
    handleRemoveFromBookmark(id);
  };
  const handleRemoveFromBookmark = (id) => {
    const remainingBookmark = bookmark.filter((mark) => mark.id !== id);
    setBookmark(remainingBookmark);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time: {readingCount}</h1>
          <h1>Bookmarked count: {bookmark.length}</h1>
          {bookmark.map((mark) => (
            <p className="bg-red-600 p-2 shadow m-2 text-white">{mark.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
