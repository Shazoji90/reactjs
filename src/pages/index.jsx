import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  // const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState(postsData);

  const searchValue = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(lowercasedValue)
    );
    setPosts(filteredPosts);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={searchValue} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
