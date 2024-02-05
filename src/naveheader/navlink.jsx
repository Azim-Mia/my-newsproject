import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

const Navlink=()=>{
  return (
<div className="navlink_container">
<div className="link pt-2"><Link to="/home">Home</Link></div>
<div className="link pt-2"><Link to="/sport">Sport</Link></div>
<div className="link pt-2"><Link to="/education">Education</Link></div>
<div className="link"><Link to="/job">Job News</Link></div>
<div className="link"><Link to="/home">Job News</Link></div>
<div className="link"><Link to="/home">Job News</Link></div>
<div className="link"><Link to="/home">Job News</Link></div>
<div className="link"><Link to="/home">Job News</Link></div>
<div className="link"><Link to="/home">Job News</Link></div>
</div>
    )
}
export default Navlink;