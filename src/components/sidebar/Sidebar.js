import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
      <div class="sidebar">
        <div class="profile-picture">
          <img src="" />
        </div>
        <h3>Aimee UMUHOZA</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#whatIdo">What I do</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
  )
}

export default Sidebar