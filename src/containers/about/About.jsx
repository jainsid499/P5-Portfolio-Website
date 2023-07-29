import React from 'react';
import './about.css';
import { Feature } from '../../components';

const About = () => {
  return (
    <div className="portfolio__about section__margin" id="about">
      {/* <div className="portfolio__about-feature">
        <Feature />
      </div> */}
      <div className="portfolio__about-heading">
        <h1 className="gradient__text">About</h1>
      </div>
      <div className="portfolio__about-container">
        <p>I intent to be the part of an organization where i can constantly learn and develop my technical and management skills and make best use of it for the growth of the organization. I look forward to establizing myself by adapting new technologies as well.</p>
        
      <Feature title="Languages" text="C, Java, Javascript, HTML+CSS" />
      <Feature title="Libraries and Frameworks" text="Java Collections, ReactJs, AngularJS, SpringBoot, Hibernate"/>
      <Feature title="Cloud/Databases" text="MongoDb, Relational Database(mySql, RDS)"/>
      <Feature title="Development Tools" text="VScode, Git, Github, , IntelliJ IDEA"/>
      <Feature title="Soft Skills" text="Problem Solving, Self-learning, Presentation, Adaptability" />
      <Feature title="IT Constructs" text="Data Structures and Algorithm, Operating Systems, Object Oriented Programming, Database Management System, Software Engineering, System Design"/>
      </div>
    </div>
  )
}

export default About