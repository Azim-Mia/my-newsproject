import NaveHeader from '../src/naveheader/nav.jsx';
import "./App.css";
const Aa=()=>{
  return (<div className="flex m-2 bg-black text-[#fff]"> 
  <p className="bg-blue-500 pl-3 text-1xl">Update news</p>
  <marquee className="text-3xl mt-1">gsshhs</marquee>
  </div>)
}
import './App.css'
function App() {
  return (<>
    <div className="top_news_div"><h1 className="top_news">Top News</h1></div>
    <div className=""><Aa /></div>
    <div><NaveHeader /></div>
        </>
  )
}

export default App
