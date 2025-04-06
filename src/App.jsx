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
  const handleMarkAsRead = (time) => {
    const newCount = readingCount + time;
    setReadingCount(newCount);
  };
  console.log(readingCount);
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
            <p>{mark.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
