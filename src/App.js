import './index.css'
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectsPage from './ProjectsPage'
import HomePage from './HomePage'
import College from './College'

const App = ()=>{
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<HomePage />} />
                <Route path="/projects" element={<ProjectsPage/>} />
                <Route path = "/college" element = {<College/>}/>
            </Routes>
        </Router>
    )
}

export default App