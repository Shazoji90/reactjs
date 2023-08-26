import { useState, useEffect } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h2>My Blog Posts</h2>
      {posts.map((item) => (
        <div key={item.id}>- {item.title}</div>
      ))}
    </>
  );
}

export default Blog;
