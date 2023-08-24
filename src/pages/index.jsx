import posts from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  //   const changeSearch = (event) => {
  //     console.log(event.target.value);
  //     setSearch(event.target.value);
  //   };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search />
      {/* <div>
        Cari Artikel : <input onChange={changeSearch} />
      </div>
      <small>
        Ditemukan 0 data dengan pencarian kata{" "}
        <i>
          <b>{search}</b>
        </i>
      </small> */}
      {/* {posts.map((blog) => ( */}
      {/* {posts.map(({ title, tags, date }, index) => ( */}
      {posts.map((props, index) => (
        // <Article title={blog.title} tags={blog.tags} date={blog.date} />
        // <Article title={title} tags={tags} date={date} />
        // <Article {...{ title, tags, date }} key={index} />
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
