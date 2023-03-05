import React from 'react'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react';
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css'

export default function Profile() {

    // const el = useRef(null);

    // useEffect(() => {
    //     const typed = new Typed(el.current, {
    //         strings:[ "Full Stack Developer 💻"],
    //         startDelay: 300,
    //         typeSpeed: 50,
    //         backDelay: 150,
    //         backSpeed: 40,
    //         smartBackspace: true,
    //         showCursor: false,
    //         loop: true,
    //     })
    // })
    
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/dvmendoza" target="_blank">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.google.com/" target="_blank">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/daniel-mendoza-957323220/" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Daniel</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
                {" "}
                <h1>
                  Software Engineer 💻 
                    {/* <span ref={el}></span> */}
                </h1>
            </span>
                <span className="profile-role-tagline">
                I love building applications with front and back end operations.
                </span>
          </div>
          
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> 
            {""}
            Hire Me{""}
            </button>
            <a href="DanielMendoza.pdf" download="Daniel Mendoza.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}