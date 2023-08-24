import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <div>
        Cari Artikel : <input onChange={changeSearch} />
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
