import React, { useState } from "react";
import Typed from 'typed.js'
import { useEffect, useRef } from 'react';
import axios from "axios";
import { toast } from "react-toastify";


import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer"
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const el = useRef(null);

  // useEffect(() => {
  //     const typed = new Typed(el.current, {
  //         strings:["📧", "✌️", "🤟", "🖖", "👋" ],
  //         startDelay: 300,
  //         typeSpeed: 100,
  //         backDelay: 150,
  //         backSpeed: 100,
  //         smartBackspace: true,
  //         showCursor: false,
  //         loop: true,
  //     })
  // })

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            Get In Touch 📧
            {/* <span ref={el}></span> */}
          </h2>{" "}
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}