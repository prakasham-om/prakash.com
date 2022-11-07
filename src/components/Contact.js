import React from "react";
import "../stylesheet/Contact.css";

const Contact=()=>{
    return(
        <>

        <div className="container1">
        <h1>For any Questions</h1>
            <div className="container_2">
                 <div className="container-3">
                 <input type="text" className="contact_cont1" 
                    placeholder="enter your name" / ><br/>
                    <input type="email"  className="contact_cont1" 
                    placeholder="enter your email" /><br/>
                    <label className="contact_cont" >
                        +91
                    
                    <input type ="tel" 
                    placeholder="enter your no." pattern="0-9" /><br/>
                    </label>
                    <button>submit</button>
                 </div>
            </div>
             
        </div>

        </>
    )
};
export default Contact;