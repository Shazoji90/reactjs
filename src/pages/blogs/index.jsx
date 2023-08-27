// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {
  // const [posts, setPosts] = useState([]);
  const posts = useLoaderData();

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json));
  // }, []);

  return (
    <>
      <h2>My Blog Posts</h2>
      {posts.map((item, index) => (
        // <div key={index}>- {item.title}</div>
        <div key={index}>
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blog;
