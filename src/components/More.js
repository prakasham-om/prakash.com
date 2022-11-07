import React from "react";
import "../stylesheet/More.css";
import imgg from "../imagegallery/kkautoclg.jpg"


  const More=()=>{
    return(
        <>
        <div className="more_container">
          <div className="partyimg">
           <img src={imgg} alt="" className="partyimg1"></img>
          </div>
        </div>
        <div className="more-footer-container">
               <h5 className="footer-data"> © by Prakash.com</h5>
                </div>
        </>
    )
  };

  export default More;