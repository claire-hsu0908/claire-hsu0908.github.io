import React from 'react'
import {Tabs} from './HomePage'
import DukeSkyLine from './pics/DukeSkyline.jpg'
import DukeChapel from './pics/DukeChapel.jpg'
import LDOC from './pics/DukeLDOC.jpg'
import WU from './pics/DukeWU.jpg'

const College = ()=>{
    return(
<div className = 'background'>
        <div>
              <Tabs/> 
        </div> 
        <div style = {{marginLeft:'50px'}}>
        <h1 style = {{color:'rgb: (0, 48, 135)'}}>College</h1>
        <h4>Each semester at Duke University💙, <br/>pursuing a major in Computer Science and Electrical Engineering</h4>
        <div>
            <img src = {DukeSkyLine} style = {{width:'300px',height:'200px',marginLeft:'0px',position:'relative',zIndex:'1'}}/>
            <img src = {LDOC} style = {{width:'300px',height:'200px',position:'relative',zIndex:'1'}}/>
            <img src = {WU} style = {{width:'300px',height:'200px',position:'relative',zIndex:'1'}}/>
        </div>
         <h2 style = {{marginTop:'50px'}}>Fall 2023</h2>
        <ul>
            <li><b>PHYSICS 152L:</b> Introduction to Electricity, Magnetism, and Optics</li>
            <li><b>ECE 110:</b> Fundamentals of Electrical Computing</li>
            <li><b>ECE 250:</b> Computer Architecture</li>
            <li><b>EDUC 240:</b> Educational Psychology</li>
        </ul>

        <h2 style = {{marginTop:'50px'}}>Spring 2023</h2>
        <ul>
            <li><b>COMPSCI 210:</b> Data Structures & Algorithms</li>
            <li><b>MATH 219:</b> Multivariable Calculus</li>
            <li><b>CEE 132L:</b> Engineering the Planet</li>
            <li><b>WRITING 101:</b> Masterminds</li>
        </ul>

        <h2 style = {{marginTop:'50px'}}>Fall 2022</h2>
        <ul>
            <li><b>EGR 103L:</b> Computational Methods in Engineering</li>
            <li><b>MATH 218D-2:</b> Matrices & Vectors</li>
            <li><b>EGR 95FS:</b> Engineering Design </li>
            <li><b>ENERGY 190FS:</b> Energy Policy for Changing World</li>
        </ul>
        </div>
      </div>       
      )}

export default College
  

