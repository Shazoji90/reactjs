import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const searchValue = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(lowercasedValue)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  // gunakan multiple useEffect jika tidak ingin melakukan fetching API di atas
  useEffect(() => {
    console.log("ada post baru");
  }, [posts]);

  // gunakan jika butuh tiap kali ada perubahan/rendering
  useEffect(() => {
    console.log("render terus");
  });

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={searchValue} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
      <hr />
      <h2>External Posts</h2>
      {/* {externalPosts.map((item, index) => ( */}
      {externalPosts.map((item) => (
        // <div key={index}>- {item.title}</div>
        <div key={item.id}>- {item.title}</div>
      ))}
    </>
  );
}

export default Homepage;
