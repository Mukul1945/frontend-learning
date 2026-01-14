import React, { useEffect ,useState} from 'react'
import axios from "axios"

const App = () => {
  const [data, setData]=useState([]);
  const[error,setError]=useState(null);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{

    const fetching = async ()=>{
      try{
        const response= await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        
      }
      catch(error){
       setError("Failed to load");

      }
      finally {
        setLoading(false);
      }
    };
      fetching();

  },[]);
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
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