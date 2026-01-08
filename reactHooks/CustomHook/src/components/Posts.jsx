import useFetch from "../hooks/useFetch";

function Posts() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return <h2>{loading ? "Loading..." : data.length + " Posts"}</h2>;
}

export default Posts;