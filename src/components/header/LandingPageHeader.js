import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchCategoryApi } from "../redux/service/service";
import { handleLogout } from "../redux/features/loginModalSlice";

const LandingPageHeader = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.category);
  const { isLoggedIn } = useSelector((state) => state.modal);

  return (
    <Fragment>
      <div className="header-section header-sticky">
        <div className="header-top d-none d-sm-block">
          <div className="container">
            <div className="header-top-bar-wrap">
              <div className="header-top-bar-wrap__text text-center">
                <p>
                  Keep learning with free resources during{" "}
                  <strong>COVID-19.</strong> <Link to="#">Learn more</Link>
                  <p></p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <div className="header-main-wrapper">
              <div className="header-logo">
                <Link className="header-logo__logo" to="/">
                  <h2>Akademica</h2>
                </Link>
              </div>

              {/* Header Category Heading starts Here */}
              <div className="header-category-menu d-none d-xl-block">
                <Link to="#" className="header-category-toggle">
                  <div className="header-category-toggle__icon">
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 18 18"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="none" stroke-width="1" fill-rule="evenodd">
                        <path d="M2,14 C3.1045695,14 4,14.8954305 4,16 C4,17.1045695 3.1045695,18 2,18 C0.8954305,18 0,17.1045695 0,16 C0,14.8954305 0.8954305,14 2,14 Z M9,14 C10.1045695,14 11,14.8954305 11,16 C11,17.1045695 10.1045695,18 9,18 C7.8954305,18 7,17.1045695 7,16 C7,14.8954305 7.8954305,14 9,14 Z M16,14 C17.1045695,14 18,14.8954305 18,16 C18,17.1045695 17.1045695,18 16,18 C14.8954305,18 14,17.1045695 14,16 C14,14.8954305 14.8954305,14 16,14 Z M2,7 C3.1045695,7 4,7.8954305 4,9 C4,10.1045695 3.1045695,11 2,11 C0.8954305,11 0,10.1045695 0,9 C0,7.8954305 0.8954305,7 2,7 Z M9,7 C10.1045695,7 11,7.8954305 11,9 C11,10.1045695 10.1045695,11 9,11 C7.8954305,11 7,10.1045695 7,9 C7,7.8954305 7.8954305,7 9,7 Z M16,7 C17.1045695,7 18,7.8954305 18,9 C18,10.1045695 17.1045695,11 16,11 C14.8954305,11 14,10.1045695 14,9 C14,7.8954305 14.8954305,7 16,7 Z M2,0 C3.1045695,0 4,0.8954305 4,2 C4,3.1045695 3.1045695,4 2,4 C0.8954305,4 0,3.1045695 0,2 C0,0.8954305 0.8954305,0 2,0 Z M9,0 C10.1045695,0 11,0.8954305 11,2 C11,3.1045695 10.1045695,4 9,4 C7.8954305,4 7,3.1045695 7,2 C7,0.8954305 7.8954305,0 9,0 Z M16,0 C17.1045695,0 18,0.8954305 18,2 C18,3.1045695 17.1045695,4 16,4 C14.8954305,4 14,3.1045695 14,2 C14,0.8954305 14.8954305,0 16,0 Z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="header-category-toggle__text">Category</div>
                </Link>

                {/* Header Category Heading starts Here */}

                <div className="header-category-dropdown-wrap">
                  <ul className="header-category-dropdown">
                    {data.map((item) => {
                      return (
                        <li key={item.id}>
                          <Link to="/design">{item.category_name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="header-inner">
                <div className="header-serach">
                  <form action="#">
                    <input
                      type="text"
                      className="header-serach__input"
                      placeholder="Search..."
                    />
                    <button className="header-serach__btn">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>

                <div className="header-navigation d-none d-xl-block">
                  <nav className="menu-primary">
                    <ul className="menu-primary__container">
                      <li>
                        <Link className="active" to="#">
                          <span>Demo</span>
                        </Link>

                        <ul className="mega-menu">
                          <li>
                            <div className="mega-menu-content">
                              <div className="row">
                                <div className="col-xl-3">
                                  <div className="menu-content-list">
                                    <Link
                                      to="/"
                                      className="menu-content-list__link"
                                    >
                                      Main Demo{" "}
                                      <span className="badge hot">Hot</span>
                                    </Link>
                                    <Link
                                      to="index-course-hub.html"
                                      className="menu-content-list__link"
                                    >
                                      Course Hub
                                    </Link>
                                    <Link
                                      to="index-online-academy.html"
                                      className="menu-content-list__link"
                                    >
                                      Online Academy{" "}
                                      <span className="badge hot">Hot</span>
                                    </Link>
                                    <Link
                                      to="index-university.html"
                                      className="menu-content-list__link"
                                    >
                                      University
                                    </Link>
                                    <Link
                                      to="index-education-center.html"
                                      className="menu-content-list__link"
                                    >
                                      Education Center{" "}
                                      <span className="badge hot">Hot</span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-xl-3">
                                  <div className="menu-content-list">
                                    <Link
                                      to="index-language-academic.html"
                                      className="menu-content-list__link"
                                    >
                                      Language Academic
                                    </Link>
                                    <Link
                                      to="index-single-instructor.html"
                                      className="menu-content-list__link"
                                    >
                                      Single Instructor
                                    </Link>
                                    <Link
                                      to="index-dev.html"
                                      className="menu-content-list__link"
                                    >
                                      Dev <span className="badge new">New</span>
                                    </Link>
                                    <Link
                                      to="index-online-art.html"
                                      className="menu-content-list__link"
                                    >
                                      Online Art{" "}
                                      <span className="badge new">New</span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-xl-6">
                                  <div className="menu-content-banner">
                                    <h4 className="menu-content-banner__title">
                                      Achieve Your Goals With Akademica
                                    </h4>
                                    <Link
                                      to="#"
                                      className="menu-content-banner__btn btn btn-primary btn-hover-secondary"
                                    >
                                      Purchase now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/page404">
                          <span>Become an Instructor</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="header-action">
                  <Link to="#" className="header-action__btn">
                    <i className="fas fa-shopping-basket"></i>
                    <span className="header-action__number">3</span>
                  </Link>

                  <div className="header-mini-cart">
                    <ul className="header-mini-cart__product-list ">
                      <li className="header-mini-cart__item">
                        <Link to="#" className="header-mini-cart__close"></Link>
                        <div className="header-mini-cart__thumbnail">
                          <Link to="shop-single-list-left-sidebar.html">
                            <img
                              src={
                                "https://htmldemo.net/edumall/edumall/shop-single-list-left-sidebar.html"
                              }
                              alt="Product"
                              width="80"
                              height="93"
                            />
                          </Link>
                        </div>
                        <div className="header-mini-cart__caption">
                          <h3 className="header-mini-cart__name">
                            <Link to="/">Awesome for Websites</Link>
                          </h3>
                          <span className="header-mini-cart__quantity">
                            1 × <strong className="amount">$49</strong>
                            <span className="separator">.00</span>
                          </span>
                        </div>
                      </li>
                      <li className="header-mini-cart__item">
                        <Link to="#" className="header-mini-cart__close"></Link>
                        <div className="header-mini-cart__thumbnail">
                          <Link to="shop-single-list-left-sidebar.html">
                            <img
                              src="assets/images/product/product-2.png"
                              alt="Product"
                              width="80"
                              height="93"
                            />
                          </Link>
                        </div>
                        <div className="header-mini-cart__caption">
                          <h3 className="header-mini-cart__name">
                            {" "}
                            <Link to="shop-single-list-left-sidebar.html">
                              Awesome for Websites
                            </Link>
                          </h3>
                          <span className="header-mini-cart__quantity">
                            1 × <strong className="amount">$49</strong>
                            <span className="separator">.00</span>
                          </span>
                        </div>
                      </li>
                      <li className="header-mini-cart__item">
                        <Link to="#" className="header-mini-cart__close"></Link>
                        <div className="header-mini-cart__thumbnail">
                          <Link to="shop-single-list-left-sidebar.html">
                            <img
                              src="assets/images/product/product-3.png"
                              alt="Product"
                              width="80"
                              height="93"
                            />
                          </Link>
                        </div>
                        <div className="header-mini-cart__caption">
                          <h3 className="header-mini-cart__name">
                            {" "}
                            <Link to="shop-single-list-left-sidebar.html">
                              Awesome for Websites
                            </Link>
                          </h3>
                          <span className="header-mini-cart__quantity">
                            1 × <strong className="amount">$49</strong>
                            <span className="separator">.00</span>
                          </span>
                        </div>
                      </li>
                    </ul>

                    <div className="header-mini-cart__footer">
                      <div className="header-mini-cart__total">
                        <p className="header-mini-cart__label">Total:</p>
                        <p className="header-mini-cart__value">
                          $445<span className="separator">.99</span>
                        </p>
                      </div>
                      <div className="header-mini-cart__btn">
                        <Link
                          to="/viewcart"
                          className="btn btn-primary btn-hover-secondary"
                        >
                          View cart
                        </Link>
                        <Link
                          to="/checkout"
                          className="btn btn-primary btn-hover-secondary"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="header-user d-none d-lg-flex">
                  <div className="header-user__button">
                    {!isLoggedIn ? (
                      <Link to="/login">
                        <button
                          className="header-user__signup btn btn-primary btn-hover-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#registerModal"
                        >
                          Login
                        </button>
                      </Link>
                    ) : (
                      <Link to="/">
                        <button
                          className="header-user__signup btn btn-primary btn-hover-primary"
                          onClick={() => dispatch(handleLogout())}
                        >
                          Logout
                        </button>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="header-toggle">
                  <button
                    className="header-toggle__btn d-xl-none"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasMobileMenu"
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                  <button className="header-toggle__btn search-open d-flex d-md-none">
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LandingPageHeader;
