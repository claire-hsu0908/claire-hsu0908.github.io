import React from 'react'
import './index.css'
import gitHub from './pics/gitHub icon.png'
import emailIcon from './pics/email-icon.jpg'
import linkedIcon from './pics/linkedIn icon.jpg' 
import profilePic from './pics/profilePic.png'
import {Link} from 'react-router-dom';

const Heading = ()=>{
    return(
        <>
            <img src={profilePic} alt = "profile-pic" className = "profilePic"/>
            <div className = {'centered-style'} style = {{zIndex:"2"}}>
                    Hi. I'm Claire.
                <br/> 
                <div className = 'animated-underline'>
                A Developer.
                </div>
                </div>
                <div style = {{zIndex:"2"}}>
                    <p className = {"subheading-text"}>
                    Maximizing the capabilities of coding to drive transformative innovation through the medium of web development,  
                    sculpting solutions poised to shape the landscape of tomorrow.
                </p>
            </div>
        </>
    )
    }

    const Tabs = ()=>{
        return(
            <div className = "sectionsMain">
                <div className = "sections">
                    <div className = "sections1">
                        <Link to="/" style = {{textDecoration:"0",color:"black"}}>Home</Link>
                    </div>
                    <div className = "sections2">
                        <Link to="/projects" style = {{textDecoration:"0",color:"black"}}>Projects</Link>
                    </div>
                    <div className = "sections3">
                        <Link to = "/college" style = {{textDecoration:"0",color:"black"}}>College</Link>
                    </div>
                </div>
                <div style = {{display:"flex", zIndex:"2"}}>
                <div style = {{marginTop:"16px",marginRight:"10px"}} >
                <a href = "https://github.com/claire-hsu0908?tab=repositories" >
                    <img src = {gitHub} alt = "gitHub icon" className = "gitHubIcon"/>
                </a>
                </div>
                <div style = {{marginTop:"19px",marginRight:"10px",marginLeft:"10px"}}>
                <a href = "https://www.linkedin.com/in/claire-hsu-3634851b7/">
                    <img src = {linkedIcon} alt = "linkedIn icon" className = "linkedInIcon"/>
                </a>
                </div>
                <div style = {{marginRight:"25px",marginLeft:"10px",marginTop:"17px",marginBottom:"17px"}}>
                <a href = "mailto:claire.hsu0908@gmail.com">
                    <img src = {emailIcon} alt = "email icon" className = "emailIcon"/>
                </a>
                </div>
                </div>
            </div>
        
        )
    }


    const Ending= ()=>{
        return(
        <div className = "endings">
        <div style = {{color:"lavender",padding:"40px"}}>
            <div style  = {{marginBottom:"5px"}}>
            Claire Hsu 
            </div>
            Software Developer, Researcher, Engineer
        </div>
    
        <div style = {{color:"lavender",marginTop:"40px",marginRight:"60px"}}>
            <div style = {{marginBottom:"5px", fontWeight:"bold"}}>
            Contact
            </div>
            <a href = "mailto:claire.hsu0908@gmail.com" style = {{color:"lavender"}}>
                Email
            </a>
    
        </div>
        </div>
    )}
    
const HomePage = () => {
    return (
        <div className = {'background'}>
        <div>
            <Tabs/>
        </div>
        <div className = {'centered-title'}>
            <Heading/>            
        </div>        
        <Ending/>
        </div>
    )
  }
  
  export default HomePage;
  export {Tabs};
  