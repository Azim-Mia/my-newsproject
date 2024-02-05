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
  },[datas]);
  const handleSubmit=(e)=>{
  e.preventDefault();
  }
  return <div className="text-3xl vardana">
  <form onSubmit={handleSubmit}>
  <div><input type="text" />
  <button className="bg-blue-700 hover:bg-yellow-700" type="submit">searchk_data</button>
  </div>
  </form>
  {
datas?.articles.map((todo)=>{
  return (<div key={todo.author}>
  <h2>{todo.title}</h2>
  <img className="pt-6 pl-4 pr-4 center" src={todo.urlToImage} alt="photos" />
 <p>{todo.description}</p>
  </div>)   
    })
  }
</div>
}
export default Home;
