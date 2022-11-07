import React,{useState,useEffect} from "react";
import "../stylesheet/Body.css"
import Profile from "./Profile";


const Body=()=>{
const[theme,settheme]=useState("light-theme");
const [btnname,setbtnname]=useState("BLACK MODE")

useEffect(()=>{
    document.body.className=theme;
},[theme,btnname])

    const toggle=()=>{
        if(theme==="dark-theme"){
            settheme("light-theme");
            setbtnname("DARK MODE");

        }else{
            settheme("dark-theme");
            setbtnname("LIGHT MODE");
            
        }
    }

    return(
        <>
            <div className="body_part">
            <button className="themebtn"
            onClick={toggle}
            >{btnname}</button>
            
                <Profile/>
               
                <div className="intro">
                    <h4 >Hello World</h4>
                    
                    <p className="bodypara">
                    A street smart Software engineer with a Bachelors degree 
                    in Computer Science. Currently working as
                     an Independent contractor. I love problem solving and had a revelation
                        few years ago that programming is a delightful journey for
                         Problem solvers. I am someone who doesn't get lost in technicality
                          and stick to product vision because of which I often find myself 
                          connecting professionals in business world with programming world.
                    Programming languages& technologies are like tools in my
                     toolbox and I try to keep them sharpand well oiled by testing,
                      POCs and Prototypes. I maintain my presence on many sites, 
                      forums and conferences to stay up to date with best practices 
                      and often write about important things in life.
Be it Frontend, Backend; You name it I have done it all. </p>
               
                </div>
                <div className="work_express">
                <h4><u>Working Experince</u></h4>
            
                    <li>Intern:FullStack Web Develoment at Newton School</li>
                
                </div>
                <div className="project">
                    <h4>Projects</h4>
                    <p>
                    <a href=""><li>Simple Calculator</li></a>
                    
                    <a href=""><li>Movie Search App</li></a>
                
                    <a href=""><li>This webpage</li></a>
                    </p>
                    
                
                </div>
            
             
                
            </div>
            <div className="footer-container">
               <h5 className="footer-data"> © by Prakash.com</h5>
                </div>
            

        </>
    )

}
export default Body;