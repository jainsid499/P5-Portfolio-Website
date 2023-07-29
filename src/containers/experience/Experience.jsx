import React from 'react';
import './experience.css';


const Experience = () => {
  return (
    <div className='portfolio__experience section__padding' id='experience'>
        <div className='portfolio__experience-content'>
          <h1 className='gradient__text'>Experience</h1>
          <h4>Wipro(Developer)</h4>
          <h4>Sept2022-Present</h4>
          <p><ul>
            <li>Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, and ReactJS.</li>
            <li>Migrated clients data to the AWS cloud with all feature like S3 buckets, EC2 instances, etc.</li>
            <li>Received positive feedback for dedication and simplifying complex concepts.</li>
          </ul></p>
          <h4>StackRoute (Apprenticeship)</h4>
          <h4>April2022-July2022</h4>
          <p><ul>
            <li>It is a 4 Month (400+ hours) Full Stack Java Training program focusing on Full stack Development.</li>
            <li>Frontend - HTML, CSS, Bootstrap, Javascript || Backend - Core Java, Microservices, Rest API || Database -
                MySQL || Framework - Spring Boot, Angular JS || Container - Docker</li>
            <li>Project:- Created weather App with the help of above technologies.</li>
          </ul></p>
        </div>
    </div>
  )
}

export default Experience