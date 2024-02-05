import React, {useState, useEffect} from 'react'
const Sport=()=>{
  const [datas, setDatas]=useState(null);
  useEffect(()=>{
    const fetchData=async()=>{
      const res= await fetch("http://localhost:4020/api/users/getAllUser")
  const data= await res.json();
    return setDatas(data);
    }
    fetchData();
  },[]);
  return <div>
  <h1>hello</h1>
  {
  datas?.payload.users.map((todo)=>{
  return <p key={todo.id}>{todo.name}</p>    
    })
  }
</div>
}
export default Sport;
