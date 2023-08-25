import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  // const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const searchValue = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(lowercasedValue)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  // React versi lama menggunakan 3 lifecycle
  // componentDidMount -> komponen yg dijalankan ketika halaman pertamakali di-render
  // componentDidUpdate -> ketika state berubah
  // componentWillUnmount -> ketika komponen akan dibuang/ditutup

  useEffect(() => {
    // console.log("render");  -> akan muncul 2 kata render di console
    // karena pada file main.jsx ada StrictMode yg nantinya tidak dipakai dalam production
    console.log("render");

    // Ini merupakan Unmount, biasanya digunakan untuk membersihkan side effect yg terjadi
    // misalkan kita menghapus eventlister saat component ditutup agar tidak berjalan terus
    // atau untuk menghapus setInterval agar tidak berjalan terus meski component ditutup
    // agar aplikasi tidak berat
    return () => {
      // removeEventListener;
      // clearInterval;
      console.log("cleanup");
    };
  }, [posts]);
  {
    /* -> array [] kosong untuk menghentikan render */
  }

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={searchValue} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
