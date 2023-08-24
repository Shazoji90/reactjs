// Conditional rendering menggunakan props di dalam component
const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- Baru !!!</span>;
};

// Conditional rendering pengecekan di luar component
const NewArticle = () => {
  return <span>--Baru !!</span>;
};

function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, tags: {props.tags.join(",")}{" "}
        {/* {props.isNew ? "-- Baru !!" : ""} */}
        {/* {props.isNew && "-- Baru !!"} */}
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
}

export default Article;
