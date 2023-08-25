import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  // const changeSearch = (event) => {
  const changeSearch = () => {
    // console.log(event.target.value);
    // setSearch(event.target.value);
    // props.onSearchChange(event.target.value);
    props.onSearchChange(search);
  };

  // const handleClick = () => {
  //   console.log("test");
  // };

  const searchKeyUp = (e) => {
    if (e.key === "Enter") {
      changeSearch();
    }
  };

  return (
    <>
      <div>
        {/* Cari Artikel : <input onChange={changeSearch} /> */}
        Cari Artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={searchKeyUp}
        />
        <button onClick={changeSearch}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata{" "}
        <i>
          <b>{search}</b>
        </i>
      </small>
    </>
  );
}
export default Search;
