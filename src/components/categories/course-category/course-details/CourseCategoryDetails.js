import { Link , useParams} from "react-router-dom";
import { useBreadCrumb } from "../../../hooks/useBreadCrumb";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductApi } from "../../../redux/service/service";
import { addToCart } from "../../../redux/features/cartSlice";
const CourseCategoryDetails = () => {
  const dispatch = useDispatch();
  const params = useParams() ;
  console.log("product id", params.id);
  const breadCrumb = useBreadCrumb();

  useEffect(() =>{
    dispatch(fetchProductApi(params));
  },[dispatch , params])

  return (
    <main className="main-wrapper">
      {/* <!-- Page Banner Section Start --> */}
      {breadCrumb}
      {/* <!-- Page Banner Section End --> */}

      {/* <!-- Tutor Course Top Info Start --> */}
      <div className="tutor-course-top-info section-padding-01 bg-color-11">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- Tutor Course Top Info Start --> */}
              <div className="tutor-course-top-info__content">
                <div className="tutor-course-top-info__badges">
                  <span className="onsale">-39%</span>
                  <Link className="badges-category" to="#">
                    Data Modeling
                  </Link>
                </div>
                <h1 className="tutor-course-top-info__title">
                  Mastering Data Modeling Fundamentals
                </h1>
                <div className="tutor-course-top-info__meta">
                  <div className="tutor-course-top-info__meta-instructor">
                    <div className="instructor-avatar">
                      <img
                        src="assets/images/instructor/instructor-01.jpg"
                        alt="Instructor"
                        width="36"
                        height="36"
                      />
                    </div>
                    <div className="instructor-name">Owen Christ</div>
                  </div>
                  <div className="tutor-course-top-info__meta-update">
                    Last Update December 1, 2020
                  </div>
                </div>
                <div className="tutor-course-top-info__meta">
                  <div className="tutor-course-top-info__meta-rating">
                    <div className="rating-average">
                      <strong>4.38</strong> /5
                    </div>
                    <div className="rating-star">
                      <div
                        className="rating-label"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <div className="rating-count">(8)</div>
                  </div>
                  <div className="tutor-course-top-info__meta-action">
                    <i className="meta-icon fas fa-user-alt"></i> 0 already
                    enrolled
                  </div>
                </div>
              </div>
              {/* <!-- Tutor Course Top Info End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Tutor Course Top Info End --> */}

      {/* <!-- Tutor Course Main content Start --> */}
      <div className="tutor-course-main-content section-padding-01 sticky-parent">
        <div className="container custom-container">
          <div className="row gy-10">
            <div className="col-lg-8">
              {/* <!-- Tutor Course Main Segment Start --> */}
              <div className="tutor-course-main-segment">
                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment">
                  <h4 className="tutor-course-segment__title">
                    Course Prerequisites
                  </h4>

                  {/* <!-- Tutor Course Segment Prerequisites Start --> */}
                  <div className="tutor-course-segment__prerequisites">
                    <div className="tutor-course-segment__prerequisites-warning">
                      <i className="fas fa-exclamation-triangle"></i>
                      Please note that this course has the following
                      prerequisites which must be completed before it can be
                      accessed
                    </div>
                    <ul className="tutor-course-segment__prerequisites-list">
                      <li>
                        <Link className="prerequisites-item" to="#">
                          <div className="prerequisites-item__thumbnail">
                            <img
                              src="assets/images/courses/courses-36.jpg"
                              alt="Courses"
                              width="70"
                              height="47"
                            />
                          </div>
                          <div className="prerequisites-item__title">
                            Artificial Intelligence & Machine Learning
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Tutor Course Segment Prerequisites End --> */}
                </div>
                {/* <!-- Tutor Course Segment End --> */}

                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment">
                  <h4 className="tutor-course-segment__title">
                    About This Course
                  </h4>

                  {/* <!-- Tutor Course Segment Content Wrapper Start --> */}
                  <div className="tutor-course-segment__content-wrap">
                    <p>
                      In this course, I take you from the fundamentals and
                      concepts of data modeling all the way through a number of
                      best practices and techniques that you’ll need to build
                      data models in your organization. You’ll find many
                      examples that clearly demonstrate the key concepts and
                      techniques covered throughout the course.
                    </p>
                    <p>
                      By the end of the course, you’ll be all set to not only
                      put these principles to work, but also to make the key
                      data modeling and design decisions required by the “art”
                      of data modeling that transcend the nuts-and-bolts
                      techniques and design patterns.
                    </p>
                    <p>
                      Organisations, or groups of organisations, may establish
                      the need for master data management when they hold more
                      than one copy of data about a business entity. Holding
                      more than one copy of this master data inherently means
                      that there is an inefficiency in maintaining a “single
                      version of the truth” across all copies. Unless people,
                      processes and technology are in place to ensure that the
                      data values are kept aligned across all copies, it is
                      almost inevitable that different versions of information
                      about a business entity will be held.
                    </p>
                  </div>
                  {/* <!-- Tutor Course Segment Content Wrapper End --> */}

                  {/* <!-- Tutor Course Segment Tags Start --> */}
                  <div className="tutor-course-segment__tags">
                    <div className="tutor-course-segment__tags-title">
                      <i className="fas  fa-tags"></i>
                    </div>
                    <div className="tutor-course-segment__tags-list">
                      <Link to="#"> big data,</Link>
                      <Link to="#">data,</Link>
                      <Link to="#">data analysis,</Link>
                      <Link to="#">data modeling</Link>
                    </div>
                  </div>
                  {/* <!-- Tutor Course Segment Tags End --> */}
                </div>
                {/* <!-- Tutor Course Segment End --> */}

                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment benefits-wrap">
                  <h4 className="tutor-course-segment__title">
                    Learning Objectives
                  </h4>

                  {/* <!-- Tutor Course Segment Benefits Items Start --> */}
                  <div className="tutor-course-segment__benefits-items">
                    <div className="tutor-course-segment__benefit-item">
                      <div className="tutor-course-segment__benefit-content">
                        <i className="fas fa-check"></i>
                        <span className="benefit-text">
                          Ready to begin working on real-world data modeling
                          projects,
                        </span>
                      </div>
                    </div>
                    <div className="tutor-course-segment__benefit-item">
                      <div className="tutor-course-segment__benefit-content">
                        <i className="fas fa-check"></i>
                        <span className="benefit-text">
                          Expanded responsibilities as part of an existing role
                        </span>
                      </div>
                    </div>
                    <div className="tutor-course-segment__benefit-item">
                      <div className="tutor-course-segment__benefit-content">
                        <i className="fas fa-check"></i>
                        <span className="benefit-text">
                          Find a new position involving data modeling.
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Tutor Course Segment Benefits Items End --> */}
                </div>
                {/* <!-- Tutor Course Segment End --> */}

                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment">
                  <h4 className="tutor-course-segment__title">Requirements</h4>

                  {/* <!-- Tutor Course Segment Requirements Items Start --> */}
                  <div className="tutor-course-segment__requirements-content">
                    <ul className="tutor-course-segment__list-style-01">
                      <li>
                        Basic understanding of data management concepts and
                        constructs such as relational database tables
                      </li>
                      <li>
                        Know how different pieces of data logically relate to
                        one another.
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Tutor Course Segment Requirements Items End --> */}
                </div>
                {/* <!-- Tutor Course Segment End --> */}

                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment audience-wrap">
                  <h4 className="tutor-course-segment__title">
                    Target Audience
                  </h4>

                  {/* <!-- Tutor Course Segment Requirements Items Start --> */}
                  <div className="tutor-course-segment__audience-content">
                    <ul className="tutor-course-segment__list-style-02">
                      <li>A business analyst</li>
                      <li>Data engineer, or database designer</li>
                      <li>
                        Who desires to build a personal toolbox of data modeling
                        best practices and techniques.
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Tutor Course Segment Requirements Items End --> */}
                </div>
                {/* <!-- Tutor Course Segment End --> */}

                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment">
                  <div className="tutor-course-segment__header">
                    <h4 className="tutor-course-segment__title">Curriculum</h4>

                    <div className="tutor-course-segment__lessons-duration">
                      <span className="tutor-course-segment__lessons">
                        4 Lessons
                      </span>
                      <span className="tutor-course-segment__duration">
                        15h 15m
                      </span>
                    </div>
                  </div>

                  <div className="course-curriculum accordion">
                    <div className="accordion-item">
                      <button
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        {" "}
                        <i className="tutor-icon"></i> IT background
                      </button>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionCourse"
                      >
                        <div className="course-curriculum__lessons">
                          <div className="course-curriculum__lesson">
                            <span className="course-curriculum__title">
                              <i className="fas fa-file-alt"></i>
                              The importance of data nowsaday
                            </span>
                            <span className="course-curriculum__icon">
                              <i className="fas fa-lock-alt"></i>
                            </span>
                          </div>
                          <div className="course-curriculum__lesson">
                            <span className="course-curriculum__title">
                              <i className="fas fa-file-alt"></i>
                              Why my organization should know about data
                            </span>
                            <span className="course-curriculum__icon">
                              <i className="fas fa-lock-alt"></i>
                            </span>
                          </div>
                          <div className="course-curriculum__lesson">
                            <span className="course-curriculum__title">
                              <i className="fas fa-file-edit"></i>
                              Assignments
                            </span>
                            <span className="course-curriculum__icon">
                              <i className="fas fa-lock-alt"></i>
                            </span>
                          </div>
                          <div className="course-curriculum__lesson">
                            <span className="course-curriculum__title">
                              <i className="fas fa-question-circle"></i>
                              First quiz
                            </span>
                            <span className="course-curriculum__icon">
                              <i className="fas fa-lock-alt"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        {" "}
                        <i className="tutor-icon"></i> Key concepts
                      </button>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionCourse"
                      >
                        <div className="course-curriculum__lessons">
                          <div className="course-curriculum__lesson">
                            <span className="course-curriculum__title">
                              <i className="fas fa-file-alt"></i>
                              Basic understanding of data management concepts
                            </span>
                            <span className="course-curriculum__icon">
                              <i className="fas fa-lock-alt"></i>
                            </span>
                          </div>
                          <div className="course-curriculum__lesson">
                            <span className="course-curriculum__title">
                              <i className="fas fa-file-edit"></i>
                              2nd Assignments
                            </span>
                            <span className="course-curriculum__icon">
                              <i className="fas fa-lock-alt"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        {" "}
                        <i className="tutor-icon"></i> Apply the principles
                      </button>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionCourse"
                      >
                        <div className="course-curriculum__lessons">
                          <div className="course-curriculum__lesson">
                            <span className="course-curriculum__title">
                              <i className="fas fa-file-alt"></i>
                              Final Lesson
                            </span>
                            <span className="course-curriculum__icon">
                              <i className="fas fa-lock-alt"></i>
                            </span>
                          </div>
                          <div className="course-curriculum__lesson">
                            <span className="course-curriculum__title">
                              <i className="fas fa-file-edit"></i>
                              Assignments
                            </span>
                            <span className="course-curriculum__icon">
                              <i className="fas fa-lock-alt"></i>
                            </span>
                          </div>
                          <div className="course-curriculum__lesson">
                            <span className="course-curriculum__title">
                              <i className="fas fa-question-circle"></i>
                              First quiz
                            </span>
                            <span className="course-curriculum__icon">
                              <i className="fas fa-lock-alt"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Tutor Course Segment End --> */}

                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment">
                  <h4 className="tutor-course-segment__title">
                    Your Instructors
                  </h4>

                  <div className="tutor-course-segment__instructor">
                    <div className="tutor-instructor">
                      <div className="tutor-instructor__avatar">
                        <img
                          src="assets/images/team/team-member-07.jpg"
                          alt="instructor"
                          width="200"
                          height="246"
                        />
                      </div>
                      <div className="tutor-instructor__instructor-info">
                        <h4 className="tutor-instructor__name">Owen Christ</h4>
                        <div className="tutor-instructor__ratings">
                          <div className="rating-star">
                            <div
                              className="rating-label"
                              style={{ width: "90%" }}
                            ></div>
                          </div>

                          <div className="rating-average">
                            <span className="rating-average__average">
                              4.75
                            </span>
                            <span className="rating-average__total">/5</span>
                          </div>
                        </div>
                        <div className="tutor-instructor__meta">
                          <span>
                            <i className="fas fa-play-circle"></i> 42 Courses
                          </span>
                          <span>
                            <i className="fas fa-comment-alt"></i> 4 Reviews
                          </span>
                          <span>
                            <i className="fas fa-user"></i> 73 Students
                          </span>
                        </div>
                        <Link className="tutor-instructor__link" to="#">
                          <i className="fas fa-plus"></i> See more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Tutor Course Segment End --> */}

                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment">
                  <h4 className="tutor-course-segment__title">
                    Student Feedback
                  </h4>

                  <div className="tutor-course-segment__feedback">
                    <div className="tutor-course-segment__reviews-average">
                      <div className="count">4.4</div>
                      <div className="reviews-rating-star">
                        <div className="rating-star">
                          <div
                            className="rating-label"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="rating-total">8 Ratings</div>
                    </div>
                    <div className="tutor-course-segment__reviews-metar">
                      <div className="course-rating-metar">
                        <div className="rating-metar-star">
                          <div className="rating-star">
                            <div
                              className="rating-label"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-col">
                          <div className="rating-metar-bar">
                            <div
                              className="rating-metar-line"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-text">75%</div>
                      </div>

                      <div className="course-rating-metar">
                        <div className="rating-metar-star">
                          <div className="rating-star">
                            <div
                              className="rating-label"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-col">
                          <div className="rating-metar-bar">
                            <div
                              className="rating-metar-line"
                              style={{ width: "13%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-text">13%</div>
                      </div>

                      <div className="course-rating-metar">
                        <div className="rating-metar-star">
                          <div className="rating-star">
                            <div
                              className="rating-label"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-col">
                          <div className="rating-metar-bar">
                            <div
                              className="rating-metar-line"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-text">0%</div>
                      </div>

                      <div className="course-rating-metar">
                        <div className="rating-metar-star">
                          <div className="rating-star">
                            <div
                              className="rating-label"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-col">
                          <div className="rating-metar-bar">
                            <div
                              className="rating-metar-line"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-text">0%</div>
                      </div>

                      <div className="course-rating-metar">
                        <div className="rating-metar-star">
                          <div className="rating-star">
                            <div
                              className="rating-label"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-col">
                          <div className="rating-metar-bar">
                            <div
                              className="rating-metar-line"
                              style={{ width: "13%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="rating-metar-text">13%</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Tutor Course Segment End --> */}

                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment">
                  <h4 className="tutor-course-segment__title">
                    Reviews <span className="count">(3)</span>
                  </h4>

                  <div className="tutor-course-segment__review-commnet">
                    <ul className="comment-list-02">
                      <li>
                        <div className="comment-item-02">
                          <div className="comment-item-02__header">
                            <div className="comment-item-02__author">
                              <img
                                src="assets/images/avatar/avatar-02.jpg"
                                alt="Avatar"
                                width="52"
                                height="52"
                              />
                            </div>
                            <div className="comment-item-02__info">
                              <h6 className="comment-item-02__name">
                                <Link to="#">Chérif Akadiry</Link>
                              </h6>
                              <p className="comment-item-02__date">
                                2 weeks ago
                              </p>
                            </div>
                          </div>
                          <div className="comment-item-02__body">
                            <div className="rating-star">
                              <div
                                className="rating-label"
                                style={{ width: "80%" }}
                              ></div>
                            </div>

                            <p>el mejor de la historia</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="comment-item-02">
                          <div className="comment-item-02__header">
                            <div className="comment-item-02__author">
                              <img
                                src="assets/images/avatar/avatar-03.jpg"
                                alt="Avatar"
                                width="52"
                                height="52"
                              />
                            </div>
                            <div className="comment-item-02__info">
                              <h6 className="comment-item-02__name">
                                <Link to="#">Edumall Website</Link>
                              </h6>
                              <p className="comment-item-02__date">
                                2 weeks ago
                              </p>
                            </div>
                          </div>
                          <div className="comment-item-02__body">
                            <div className="rating-star">
                              <div
                                className="rating-label"
                                style={{ width: "100%" }}
                              ></div>
                            </div>

                            <p>el mejor de la historia</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="comment-item-02">
                          <div className="comment-item-02__header">
                            <div className="comment-item-02__author">
                              <img
                                src="assets/images/avatar/avatar-04.jpg"
                                alt="Avatar"
                                width="52"
                                height="52"
                              />
                            </div>
                            <div className="comment-item-02__info">
                              <h6 className="comment-item-02__name">
                                <Link to="#">Adeniyi David</Link>
                              </h6>
                              <p className="comment-item-02__date">
                                2 weeks ago
                              </p>
                            </div>
                          </div>
                          <div className="comment-item-02__body">
                            <div className="rating-star">
                              <div
                                className="rating-label"
                                style={{ width: "100%" }}
                              ></div>
                            </div>

                            <p>el mejor de la historia</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Tutor Course Segment End --> */}

                {/* <!-- Tutor Course Segment Start --> */}
                <div className="tutor-course-segment">
                  <h4 className="tutor-course-segment__title">
                    Write a review
                  </h4>

                  <div className="tutor-course-segment__reviews">
                    <button
                      className="tutor-course-segment__btn btn btn-primary btn-hover-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseForm"
                    >
                      Write a review
                    </button>

                    <div className="collapse" id="collapseForm">
                      {/* <!-- Comment Form Start --> */}
                      <div className="comment-form">
                        <form action="#">
                          <div className="comment-form__rating">
                            <label className="label">Your rating: *</label>
                            <ul id="rating" className="rating">
                              <li className="star" title="Poor" data-value="1">
                                <i className="fas fa-star"></i>
                              </li>
                              <li className="star" title="Poor" data-value="2">
                                <i className="fas fa-star"></i>
                              </li>
                              <li className="star" title="Poor" data-value="3">
                                <i className="fas fa-star"></i>
                              </li>
                              <li className="star" title="Poor" data-value="4">
                                <i className="fas fa-star"></i>
                              </li>
                              <li className="star" title="Poor" data-value="5">
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="row gy-4">
                            <div className="col-md-6">
                              <div className="comment-form__input">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Your Name *"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="comment-form__input">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Your Email *"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="comment-form__input">
                                <textarea
                                  className="form-control"
                                  placeholder="Your Comment"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="comment-form__input form-check">
                                <input type="checkbox" id="save" />
                                <label for="save">
                                  Save my name, email, and website in this
                                  browser for the next time I comment.
                                </label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="comment-form__input">
                                <button className="btn btn-primary btn-hover-secondary">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* <!-- Comment Form End --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- Tutor Course Segment End --> */}
              </div>
              {/* <!-- Tutor Course Main Segment End --> */}
            </div>
            <div className="col-lg-4">
              <div className="sidebar-sticky">
                {/* <!-- Tutor Course Sidebar Start --> */}
                <div className="tutor-course-sidebar">
                  {/* <!-- Tutor Course Price Preview Start --> */}
                  <div className="tutor-course-price-preview">
                    <div className="tutor-course-price-preview__thumbnail">
                      <div className="ratio ratio-16x9">
                        <iframe
                          src="https://www.youtube.com/embed/tXr3wCyBE9I"
                          title="YouTube video"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="tutor-course-price-preview__price">
                      <div className="tutor-course-price">
                        <span className="sale-price">
                          $46<span className="separator">.00</span>
                        </span>
                        <span className="regular-price">
                          $76<span className="separator">.00</span>
                        </span>
                      </div>
                      <div className="tutor-course-price-badge">39% off</div>
                    </div>
                    <div className="tutor-course-price-preview__meta">
                      <ul className="tutor-course-meta-list">
                        <li>
                          <div className="label">
                            <i className="fas fa-sliders-h"></i> Level{" "}
                          </div>
                          <div className="value">Beginner</div>
                        </li>
                        <li>
                          <div className="label">
                            <i className="fas fa-clock"></i> Duration{" "}
                          </div>
                          <div className="value">15.3 hours</div>
                        </li>
                        <li>
                          <div className="label">
                            <i className="fas fa-play-circle"></i> Lectures{" "}
                          </div>
                          <div className="value">4 lectures</div>
                        </li>
                        <li>
                          <div className="label">
                            <i className="fas fa-tag"></i> Subject{" "}
                          </div>
                          <div className="value">
                            <Link to="#">Data Modeling</Link>
                          </div>
                        </li>
                        <li>
                          <div className="label">
                            <i className="fas fa-globe"></i> Language{" "}
                          </div>
                          <div className="value">Russian</div>
                        </li>
                      </ul>
                    </div>
                    <div className="tutor-course-segment">
                      <h4 className="tutor-course-segment__title">
                        Material Includes
                      </h4>

                      <ul className="tutor-course-segment__list-style-01">
                        <li>Videos</li>
                        <li>Booklets</li>
                      </ul>
                    </div>
                    <div className="tutor-course-price-preview__btn">
                      <button onClick = {() => dispatch(addToCart(params))}>
                      <Link to = "/viewcart" className="btn btn-primary btn-hover-secondary w-100">
                        {" "}
                        <i className="fas fa-shopping-basket"></i> Add to cart{" "}
                      </Link>
                      </button>
                      <Link
                        to="#"
                        className="btn btn-light btn-hover-primary w-100"
                      >
                        Add to wishlist
                      </Link>
                    </div>
                    <div className="tutor-course-price-preview__social">
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-tumblr"></i>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- Tutor Course Price Preview End -->

                                <!-- Sidebar Widget Start --> */}
                  <div className="sidebar-widget">
                    <h3 className="sidebar-widget__title">Course categories</h3>

                    <ul className="sidebar-widget__link">
                      <li>
                        <Link to="#">Art & Design</Link>
                      </li>
                      <li>
                        <Link to="#">Business</Link>
                      </li>
                      <li>
                        <Link to="#">Data Science</Link>
                      </li>
                      <li>
                        <Link to="#">Development</Link>
                      </li>
                      <li>
                        <Link to="#">Finance</Link>
                      </li>
                      <li>
                        <Link to="#">Health & Fitness</Link>
                      </li>
                      <li>
                        <Link to="#">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="#">Marketing</Link>
                      </li>
                      <li>
                        <Link to="#">Music</Link>
                      </li>
                      <li>
                        <Link to="#">Personal Development</Link>
                      </li>
                      <li>
                        <Link to="#">Photography</Link>
                      </li>
                      <li>
                        <Link to="#">Teaching & Academics</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Sidebar Widget End -->

                                <!-- Sidebar Widget Start --> */}
                  <div className="sidebar-widget">
                    <h3 className="sidebar-widget__title">Related Courses</h3>

                    <div className="sidebar-widget__course">
                      <div className="sidebar-widget__course-item">
                        <div className="sidebar-widget__course-thumbnail">
                          <Link to="course-single-layout-01.html">
                            <img
                              src="assets/images/courses/courses-21.jpg"
                              alt="Courses"
                              width="120"
                              height="72"
                            />
                          </Link>
                        </div>
                        <div className="sidebar-widget__course-content">
                          <h4 className="sidebar-widget__course-title">
                            <Link to="course-single-layout-01.html">
                              Artificial Intelligence: Reinforcement Learning in
                              Python
                            </Link>
                          </h4>
                          <div className="sidebar-widget__course-price">
                            <span className="sale-price">
                              $46<span className="separator">.00</span>
                            </span>
                            <span className="regular-price">
                              $76<span className="separator">.00</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="sidebar-widget__course-item">
                        <div className="sidebar-widget__course-thumbnail">
                          <Link to="course-single-layout-01.html">
                            <img
                              src="assets/images/courses/courses-15.jpg"
                              alt="Courses"
                              width="120"
                              height="72"
                            />
                          </Link>
                        </div>
                        <div className="sidebar-widget__course-content">
                          <h4 className="sidebar-widget__course-title">
                            <Link to="course-single-layout-01.html">
                              Statistics for Data Science and Business Analysis
                            </Link>
                          </h4>
                          <div className="sidebar-widget__course-price">
                            <span className="sale-price">
                              $25<span className="separator">.00</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="sidebar-widget__course-item">
                        <div className="sidebar-widget__course-thumbnail">
                          <Link to="course-single-layout-01.html">
                            <img
                              src="assets/images/courses/courses-33.jpg"
                              alt="Courses"
                              width="120"
                              height="72"
                            />
                          </Link>
                          <div className="sidebar-widget__course-badge">
                            <span className="onsale">-38%</span>
                          </div>
                        </div>
                        <div className="sidebar-widget__course-content">
                          <h4 className="sidebar-widget__course-title">
                            <Link to="course-single-layout-01.html">
                              Artificial Intelligence: Reinforcement Learning in
                              Python
                            </Link>
                          </h4>
                          <div className="sidebar-widget__course-price">
                            <span className="sale-price">
                              $28<span className="separator">.00</span>
                            </span>
                            <span className="regular-price">
                              $45<span className="separator">.00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Sidebar Widget End --> */}
                </div>
                {/* <!-- Tutor Course Sidebar End --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Tutor Course Main content End --> */}
    </main>
  );
};
export default CourseCategoryDetails;