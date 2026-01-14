import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {
  const [data , setData] = useState([]);
  const[loading, setLoading]= useState(true);
  const[error,setError]=useState(null);

  useEffect(()=>{

    axios.get("https://fakestoreapi.com/products")
    .then((responce)=>{
      setData(responce.data);
      setLoading(false);
    })
    .catch((error)=>{
      setError("Failed to load");
      setLoading(false);
    });
  },[]);

  if(loading)return <h2>Loading...</h2>
  if(error)return <h2>{error}</h2>


  return (
   <>
   {data.map((item)=>(
    <div key={item.id}>
        <img src={item.image} alt={item.title} width="100" height="100" />
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>
    </div>
   ))}
   </>
  )
}

export default App