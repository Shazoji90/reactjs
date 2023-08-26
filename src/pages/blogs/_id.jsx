import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <>
      {/* tanda ? disebut "optional chaining" jadi fungsi dari Operator "?."
    akan menghentikan evaluasi jika bagian sebelum "?." undefined atau null
    dan mengembalikan nilainya menjadi undefined daripada mengembalikan sebuah error (null-safe)
    Konsep ini dikenal sebagai "Nullish Coalescing" di javascript */}
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </>
  );
}

export default SinglePost;
