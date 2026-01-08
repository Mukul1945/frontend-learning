import React, { useEffect, useState } from 'react'
import api from '../services/api';
const Users = () => {
    const[users , setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");

    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                const responce=await api.get("/users");
                setUsers(responce.data);
            }catch(error){
                setError("failed")
            }finally{
                setLoading(false);
            }
        };
    fetchUser();
    },[]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
<div>
    <h2>
        User List
    </h2>
    <ul>
        {users.map((user)=>(
            <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
    </ul>
</div>
  )
}

export default Users