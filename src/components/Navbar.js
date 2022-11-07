import React,{useState,useEffect} from "react";
import "../stylesheet/Navbar.css"
import {NavLink }from "react-router-dom";



const Navbar=()=>{
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
 }, []);
    return(
        <div>
        <div className="nav_container">
        <h2 className="nav-name">Prakash</h2>
        <div className="wavess">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                </div>
       
          <div className="date_time">
            <p>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
        
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
        </div>
        </div>
       
                <div className="nav">
                
                    <li >
                    <NavLink to="/" className="nav1">Home</NavLink>
                    </li>
                    <li >
                    <NavLink to='/more' className="nav1">More</NavLink>
                    </li>
                    <li> 
                    <NavLink to='/contact' className="nav1">Contact</NavLink>
                    </li>
                    
                </div>

            
            
        </div>
    )
}
export default Navbar;