import React,{Fragment} from 'react';
import logo from "../assets/images/dark-logo.png";
import {Link} from 'react-router-dom';
const Footer = () =>{

    return(
        <Fragment>
        <div className="footer-section footer-bg-1">
          <div className="footer-widget-area section-padding-01">
            <div className="container">
              <div className="row gy-6">
                <div className="col-lg-8">
                  <div className="row gy-6">
                    <div className="col-sm-4">
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">About</h4>

                        <ul className="footer-widget__link">
                         
                          <li>
                            <Link to="course-grid-left-sidebar.html">Courses</Link>
                          </li>
                          <li>
                            <Link to="instructors.html">Instructor</Link>
                          </li>
                          <li>
                            <Link to="event-grid-sidebar.html">Events</Link>
                          </li>
                          <li>
                            <Link to="become-an-instructor.html">
                              Become A Teacher
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">Links</h4>

                        <ul className="footer-widget__link">
                          <li>
                            <Link to="blog-grid-left-sidebar.html">
                              News & Blogs
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Library</Link>
                          </li>
                          <li>
                            <Link to="#">Gallery</Link>
                          </li>
                          <li>
                            <Link to="#">Partners</Link>
                          </li>
                          <li>
                            <Link to="#">Career</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">Support</h4>

                        <ul className="footer-widget__link">
                          <li>
                            <Link to="#">Documentation</Link>
                          </li>
                          <li>
                            <Link to="faqs.html">FAQs</Link>
                          </li>
                          <li>
                            <Link to="#">Forum</Link>
                          </li>
                          <li>
                            <Link to="#">Sitemap</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-widget text-center">
                    <Link to="#" className="footer-widget__logo">
                      <img src={logo} alt="Logo" width="150" height="32" />
                    </Link>
                    <div className="footer-widget__social">
                      <Link to="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link to="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link to="https://www.youtube.com/" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                    <p className="footer-widget__copyright">
                      &copy; 2023 <span> EduMall </span> Made with{" "}
                      <i className="fa fa-heart"></i> by{" "}
                      <Link to="https://1.envato.market/c/417168/275988/4415?subId1=hastheme&subId2=demo&subId3=https%3A%2F%2Fthemeforest.net%2Fuser%2Fbootxperts%2Fportfolio&u=https%3A%2F%2Fthemeforest.net%2Fuser%2Fbootxperts%2Fportfolio">
                        BootXperts
                      </Link>
                    </p>
                    <ul className="footer-widget__link flex-row gap-8 justify-content-center">
                      <li>
                        <Link to="#">Terms of Use</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </Fragment>
    )
};

export default Footer;