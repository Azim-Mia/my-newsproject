import React, {useState, useEffect} from 'react'
const Home=()=>{
  const [datas, setDatas]=useState(null);
  useEffect(()=>{
    const fetchData=async()=>{
      const res= await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-01-05&sortBy=publishedAt&apiKey=c6ea3bb4b0da469ea359894e99949365");
  const data= await res.json();
   setDatas(data);
    }
     fetchData(); 
  },[]);
  return <div className="text-3xl vardana">
  <h1>hello</h1>
  {
datas?.articles.map((todo)=>{
  return <h2 key={todo.author}>{todo.url}</h2>    
    })
  }
</div>
}
export default Home;
