import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});
  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
  
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };
  
    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
    //here we have
    const programmingSkillsDetails = [
      { skill: "JavaScript", ratingPercentage: 85 },
      { skill: "React JS", ratingPercentage: 85 },
      { skill: "React Native", ratingPercentage: 85 },
      { skill: "Express JS", ratingPercentage: 89 },
      { skill: "Node JS", ratingPercentage: 89 },
      { skill: "Mongo Db", ratingPercentage: 70 },
      { skill: "Core Java", ratingPercentage: 80 },
      { skill: "HTML", ratingPercentage: 80 },
      { skill: "CSS", ratingPercentage: 80 },
    ];
  
    const projectsDetails = [
      {
        title: "Personal Portfolio Website",
        duration: { fromDate: "2023", toDate: "2023" },
        description:
          "A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: "Technologies Used: React JS, Bootsrap",
      },
      {
        title: "Chatterbox (Under Construction)",
        duration: { fromDate: "2022", toDate: "2023" },
        description:
          "An social-media application designed to chat with friends and meet new ones. OAuth integration as well as increased user security by integrating bcrypt to hash passwords.",
        subHeading:
          "Technologies Used:  Python, Flask, MySQL and socket.io.",
      },
      {
        title: "joyBundler",
        duration: { fromDate: "2023", toDate: "2023" },
        description:
          "Web application for expecting parents to research names for their baby.",
        subHeading:
          "Technologies Used: Java, MySQL, Spring, Eclipse IDE",
      },
    ];
  
    const resumeDetails = [
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"Coding Dojo"}
          subHeading={"FULL STACK SOFTWARE DEVELOPER"}
          fromDate={"Aug2022"}
          toDate={"Nov2022"}
        />
  
        <ResumeHeading
          heading={"Everett Community College"}
          subHeading={"Computer Science Degree (Credits) Java, C++, Eclipse IDE"}
          fromDate={"2016"}
          toDate={"2022"}
        />
        <ResumeHeading
          heading={"High School"}
          subHeading={"Rancho Verde / Corona Centennial High School"}
          fromDate={"2009"}
          toDate={"2013"}
        />
      </div>,
  
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
        <ResumeHeading
            heading={"Software Engineer"}
            subHeading={"Full Stack Software Engineer"}
            fromDate={"2022"}
            toDate={"Present"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Currently working as MERN stack web and mobile developer.
            </span>
          </div>
          <br />
          <ResumeHeading
            heading={"City of Redmond / Whatcom County"}
            subHeading={"Police Officer / Deputy Sheriff"}
            fromDate={"2018"}
            toDate={"2022"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
            Leverage strong communication, decision making, and negotiation skills to mitigate conflict.
            </span>
          </div>
          <br />
          <ResumeHeading
            heading={"United States Navy"}
            subHeading={"Aviation Support Equipmentt Technician"}
            fromDate={"2014"}
            toDate={"2018"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
            Successfully oversaw and maintained over $400M worth of equipment and aircraft.
            </span>
          </div>
          <br />
        </div>
      </div>,
  
      /* PROGRAMMING SKILLS */
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,
  
      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>,
  
      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Fishing / Hiking"
          description="Apart from being a tech enthusiast and code writer, I also love to fish and explore the outdoors. Washington State had some of the best salmon fishing opportunities and breathtaking views."
        />
        <ResumeHeading
          heading="Videography"
          description="I love to live in the moment but also love to capture those moments. Many times I sat back and smiled with joy thinking about moments I've shared with my wife and kids. Today, I am able look back and watch those same memories."
        />
        <ResumeHeading
          heading="Competitive Gaming"
          description="I like to challenge my reflexes a lot while competing in FPS games such as Apex Legends, Call of Duty and Overwatch 2."
        />
      </div>,
    ];
  
    const handleCarousel = (index) => {
      let offsetHeight = 360;
  
      let newCarouselOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarouselOffsetStyle(newCarouselOffset);
      setSelectedBulletIndex(index);
    };
  
    const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousel(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`)}
            alt="B"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };
  
    const getResumeScreens = () => {
      return (
        <div
          style={carouselOffsetStyle.style}
          className="resume-details-carousel"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
    useEffect(() => {
      return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
      };
    }, [fadeInSubscription]);
  
    return (
      <div
        className="resume-container screen-container fade-in"
        id={props.id || ""}
      >
        <div className="resume-content">
          <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
  
            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;