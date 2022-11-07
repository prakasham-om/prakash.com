import React from "react";
import img1 from "../imagegallery/jacksparrow.jpg"
import "../stylesheet/Profile.css"
import {FaLinkedinIn,FaGithub} from "react-icons/fa"



const Profile=()=>{
    return(
        <>
        <div className="Body_part">
        <div className="profile_cont">
            <div className="image_cont">
                    <img src={img1} alt="profile" className="profileimg"></img>
            </div>
            <div className="details">
            <div className="name">
                <h3 className="hh2">Prakash Chandra Sahoo</h3>
            </div>
            <div className="social_link">
            <FaGithub className="git"/>
            <FaLinkedinIn className="linked"/>
            

            </div>

            </div>
        </div>
        </div>
        </>
    );
}

export default Profile;