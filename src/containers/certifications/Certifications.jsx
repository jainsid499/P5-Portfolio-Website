import React from 'react';
import './certifications.css';
import aws from '../../assets/AWS.jpg';
import javaFSD from '../../assets/javaFSD.jpg';

const Certifications = () => {
  return (
    <div className='portfolio__certifications section__padding' id='certifications'>
      <h1 className='gradient__text'>Certifications</h1>
      <div className='portfolio__certifications-maincontainer'>
      <div className='portfolio__certifications-container'>
        <div className='portfolio__certifications-image'>
          <img src={aws} alt='aws' />
        </div>
        <div className='portfolio__certifications-content'>
          <h4>AWS Cloud Practitioner</h4>
          <div class="download-text-certificates">
                    <a href="https://aw.certmetrics.com/amazon/public/verification.aspx" target="_blank">
                        Verification Link</a>
          </div> <p>(Validation number - VTXXBHS14EF413G2)</p>
          <p>The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.</p>
        </div>
      </div>
      <div className='portfolio__certifications-container'>
        <div className='portfolio__certifications-image'>
          <img src={javaFSD} alt='javaFSD' />
        </div>
        <div className='portfolio__certifications-content'>
          <h4>Java Fullstack Development</h4>
          <div class="download-text-certificates">
                    <a href="https://verifyawards.stackroute.in/verify?url=https://awards.stackroute.in/public/assertions/vZ3P2UpkTy6LWFSy3ecr_w.json?v=2_0"
                    target="_blank">
                    Verification Link</a>
          </div>
          <p>Full Stack Java developer - Core Java + JSP Servlets + Hibernate +Spring + Java Web-service/RestFul API + Spring boot + Database.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Certifications