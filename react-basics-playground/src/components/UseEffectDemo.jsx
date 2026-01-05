import { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <p>Users loaded: {data.length}</p>;
};

export default UseEffectDemo;
