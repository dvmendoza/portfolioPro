import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import redmond from "../../../src/assets/Testimonial/redmond.png";
import kirkland from "../../../src/assets/Testimonial/kirkland.jpg";
import navy from "../../../src/assets/Testimonial/navy.png";
import shape from "../../../src/assets/Testimonial/shape-bg.png";

export default function Testimonial(props) {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    const options = {
      loop: true,
      margin: 0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    };
  
    return (
      <div>
        <ScreenHeading
          title={"Testimonial"}
          subHeading={"What My Friends Say About Me"}
        />
        <section className="testimonial-section fade-in" id={props.id || ""}>
          <div className="container">
            <div className="row">
              <OwlCarousel
                className="owl-carousel"
                id="testimonial-carousel"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        It was a pleasure working with Officer Mendoza.
                        One of my best evaluation reports was for Officer Mendoza
                        and his tenacious work ethic.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img src={redmond} alt="no internet connection"></img>
                      <h5>Jesse Bollerud</h5>
                      <p>RedmondPD, Sergeant</p>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Daniel always showed up ready to work and ready to help
                        others get the job done.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img src={navy} alt="no internet connection"></img>
                      <h5>Jessica Bowlby</h5>
                      <p>USN, Supervisor</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Thank you for being the person that you are. Daniel is a great friend
                        and an even better man.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img src={redmond} alt="no internet connection"></img>
                      <h5>Evan Barnard</h5>
                      <p>RedmondPD</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        This guy is incredibly awesome, anytime I needed help
                        training I knew I could count on Mendoza. He never said no
                        and always gave 100%.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img src={kirkland} alt="no internet connection"></img>
                      <h5>Daniel Hopkins</h5>
                      <p>KirklandPD</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        <div className="footer-image">
          <img src={shape} alt="Phot0 not responding" />
        </div>
      </div>
    );
  }