import React from 'react';
import './resume.css';
import resume from '../../assets/resume.jpg';
import "../../assets/resume.pdf"

const Resume = () => {
  return (
    <div className="portfolio__resume section__padding" id="resume">
      <div className="portfolio__resume-content">
        <h1 className="gradient__text">Resume</h1>
      </div>
      <div className="portfolio__resume-image">
        <img src={resume} alt="resume" />
            <a href="resume.pdf" download>
                Click to download
            </a>
      </div>
    </div>
  )
}

export default Resume