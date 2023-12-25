// ProjectsPage.js
import React from 'react';
import phoneBookIcon from './pics/phoneBookIcon.png'
import weatherIcon from './pics/weatherIcon.png'
import stanfordIcon from './pics/stanford-university-logo-1.png'
import DukeSmartHome from './pics/DukeSmartHome.jpg'
import websitePic from './pics/websitePic.png'
import {Link} from 'react-router-dom';
import {Tabs} from './HomePage'


const GridData= [
  {name: "Cache-Memory Stimulator, image: , alt: 'cache-icon',section: 'Programming', project1:'BackEnd', href1: 'https://github.com/claire-hsu0908/cache_memory'}
  { name: 'Phonebook Application', image: phoneBookIcon, alt:'phoneBook icon',section:'Programming',rotate:'-45deg',
  project1:'FrontEnd', href1:'https://github.com/claire-hsu0908/phonebook-frontend',project2:'BackEnd',href2:'https://github.com/claire-hsu0908/phonebook-backend'},
  
  {name:'Personal Website', section:'Programming',project1:'FrontEnd',image:websitePic,width:'150px',radius:'20px',href1:'https://github.com/claire-hsu0908/claire-hsu0908.github.io'},

  { name: 'Weather Application',image:weatherIcon,alt:'weather icon',section:'Programming',project1:'FrontEnd',href1:'https://github.com/claire-hsu0908/weather-app'},
  
  {name: 'Research Abstract',image:stanfordIcon,alt:'stanford icon',section:'Research/Programming',width:'110px',height:'128px',
  project1:'Poster',href1:'https://agu2021fallmeeting-agu.ipostersessions.com/?s=5D-E1-6B-04-8C-6F-BB-98-26-E3-E8-B4-4D-D4-0F-B0',project2:'Presentation',href2:'https://docs.google.com/presentation/d/1Gp4F6XN5REUH4ceqkV3sEz05h-aSNQ07zjIMtBGzREY/edit?usp=sharing'},
  
  {name: 'Engineering Prototype',image:DukeSmartHome, alt: 'Duke Smart Home',section:'Engineering/Product Management',
  project1:'Poster',href1:'https://docs.google.com/presentation/d/16LFBQOqU8ntr1sTfHsTWurl6r5JZThv7/edit?usp=sharing&ouid=107131523918016543664&rtpof=true&sd=true',project2:'Presentation',href2:'https://docs.google.com/presentation/d/109ruQfKxwVJxBw6asKmOb7oBatnKD-qdtm08Je6mR1c/edit?usp=sharing'}
]




const GridContainer = () =>{
  return(
    <div className="flex-container">
      {GridData.map((item, idx) => (
        <div key={`flex-item-${idx}`} className="flex-item">
          <h5>{item.section}</h5>
          {<img src = {item.image} alt = {item.alt} style = {{width:item.width,height:item.height,rotate:item.rotate,borderRadius:item.radius}}/>}          
          <h2>{item.name}</h2>

          <a href= {`${item.href1}`}><button className = 'buttonStyle'>{item.project1}</button></a>
          {item.project2&&<a href = {`${item.href2}`}><button className = 'buttonStyle'>{item.project2}</button></a>}
          {/* //Need to make item.name different for each/Link to new  */}
        </div>
      ))}
    </div>
  )
} 




const ProjectsPage = () => {

  return (
    <>
    <div className = 'background2'>
      <div>
            <Tabs/> 
      </div> 
          <GridContainer/> 
    </div>     
   
</>
  )
  
}

export default ProjectsPage;


// {/* <div className = {'above-gradient'}>      
//         <ProjectHeading/>
//         </div>   */}
//         </div>
//         {/* <div className = 'projects-container'>
//             <Project1/>
//             <Project2/>
//             <Project3/>
//             <Project4/>
//         </div> */}




// const Project1 = ()=>{
//   return(
//       <div className = {'text-box'}>
//       <div className = {'image-container'}>
//       <img src = {Ignite} alt = "Ignite Engineering" style = {{width:600, height:300}}/>
//       </div>
//       <div>
//           <div>Programming </div>
//           <div className = {'project-1'}>
//               PhoneBook Application
//           </div>
//           <div style={{width:"350px"}}>
//                   <ul>
//                   <li>Technologies Used: React.js, HTML, CSS, JavaScript, Axios, Node.js, Express, MongodDB  </li>
//                   <br/>
//                   <li>Architectured and developed a robust RESTful API using Node.js and Express, incorporating CRUD 
//                       (Create, Read, Update, Delete) functionality for phonebook entries via API endpoints 
//                   </li>
//                   <br/>
//                   <li>Created a MongoDB database schema with Mongoose, implementing data validation for the 
//                       “name” and “number” input fields.
//                   </li>
//                   </ul>
//                   <br/>
//           </div>
//           <div style={{display:'flex'}}>
//               <div style = {{padding:"3px"}}>
//               <a href="https://github.com/claire-hsu0908/phonebook-frontend">
//                   <img src = {gitHub} alt = "gitHub icon" style = {{width:35}}/>
//               </a>
//               </div>
//               <div style = {{padding:"3px"}}>
//                  <a href="https://github.com/claire-hsu0908/phonebook-backend">
//                   <img src = {gitHub} alt = "gitHub icon" style = {{width:35}}/>
//               </a> 
//               </div>
              
//           </div>

//       </div>
//   </div> 
//   )
// }

// const Project2 = ()=>{
//   return(
//       <div className = {'text-box'}>
//       <div className = {'image-container'} style = {{borderColor:"black"}}>
//       <img src = {weatherGIF} alt = "Weather-App Gif" style = {{height:700}}/>
//       </div>
//       <div>
//           <div>Programming</div>
//           <div className = {'project-1'}>
//               Weather API
//           </div>
//           <div style={{width:"350px"}}>
//           <ul>
//               <li>Technologies Used: React.js, HTML, CSS, JavaScript, Axios, Express</li>
//               <br/>
//               <li>Implemented API integration with the OpenWeatherMap API to fetch weather statistics based on an user’s input for specific country</li>
//               <br/>
//               <li>Designed responsive user interface using CSS to display current-time weather information, including temperature, 
//                   wind speed, capital, and weather icons for specified locations
//               </li>
//           </ul>
//           </div>
//           <div>
//               <a href = "https://github.com/claire-hsu0908/weather-app">
//                   <img src = {gitHub} alt = "gitHub icon" style = {{width:40}}/>
//               </a>
//           </div>
//       </div>
//   </div> 
//   )
// }

// const Project3=()=>{
//   return(
//   <div className = "text-box">
//           <div className = {"image-container"}>
//           <img src = {StanfordPoster} alt = "Stanford Research Poster" style = {{width:600}}/>
//           </div>
//           <div>
//               <div>
//                   Programming/Research
//               </div>
//               <div className = {'project-1'}>
//                   Stanford Earth GeoSciences
//               </div> 
//               <div>
//                   <ul>
//                   <li> Investigated the relationship between Metabolic Rate and Extinction Probability during the Cenozoic Era </li>
//                   <br/>
//                   <li>Generated statistical plots and analyzed statistical data using R programming language </li>
//                   <br/>
//                   <li>Presented at the American Geophysical Union annual fall conference</li>
//                   </ul>
//                   <br/>
//               </div>
//               <div style={{display:'flex'}}>
//                   <div style = {{padding:"5px"}}>
//                   <a href = "https://agu2021fallmeeting-agu.ipostersessions.com/?s=5D-E1-6B-04-8C-6F-BB-98-26-E3-E8-B4-4D-D4-0F-B0">
//                       <img src = {popIcon} alt = "pop Out icon" style = {{width:30}} />
//                   </a>
//                   </div>
//                   <div style = {{padding:"5px"}}>
//                      <a href = "https://historyoflife.stanford.edu/people/claire-hsu">
//                       <img src = {blogIcon} alt = "blog icon" style = {{width:30}}/>
//                   </a> 
//                   </div> 
//               </div>
//           </div>
//   </div>
//   )}

// const Project4 = ()=>{
//   return(
//   <div className = {'text-box'}>
//           <div className = {'image-container'}>
//           <img src = {ConvectionPoster} alt = "Engineering Poster" style = {{width:600}}/>
//           </div>
//           <div className = {'section-text'}>
//               <div>
//                   Engineering/Product Management
//               </div>
//               <div className = {'project-1'}>
//                   Duke Global Energy FOCUS
//               </div>
//               <div style={{width:"350px"}}>
//                   <ul>
//                       <li>Built a high fidelity prototype for Duke Smart Home, reducing heat convective transfer</li>
//                       <br/>
//                       <li>Identified 8+ pain points and presented 3+ technical memoms evaluating and reporting our engineering process </li>
//                       <br/>
//                       <li>Showcased to 20+ members at the annual Duke Engineering showcase</li>
//                   </ul>
//               </div>
//               <div  style={{display:'flex'}}>
//                   <div style = {{padding:"5px"}}>
//                   <a href = "https://docs.google.com/presentation/d/16LFBQOqU8ntr1sTfHsTWurl6r5JZThv7/edit?usp=sharing&ouid=107131523918016543664&rtpof=true&sd=true">
//                       <img src = {popIcon} alt = "pop Out icon" style = {{width:30}} />
//                   </a>
//                   </div>
//                   <div style = {{padding:"5px"}}>
//                   <a href = "https://m.youtube.com/watch?v=w-Vw5CcVxfo&feature=youtu.be">
//                       <img src = {videoIcon} alt = "video icon" style = {{width:30}}/>
//                   </a>
//                   </div>
//               </div>
//           </div>
//       </div>
// )}

