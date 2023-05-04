import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryApi } from "../../redux/service/service";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination as SwiperPagination } from "swiper";
import { fetchCourseApi } from "../../redux/service/service";
import AOS from "aos";
import "aos/dist/aos.css";
import Filter from "../../filter/Filter";
import { useBreadCrumb } from "../../hooks/useBreadCrumb";
import { usePagination } from "../../hooks/usePagination";
import { CustomSwiper } from "../../hooks/CustomSwiper";
import {setToggleClassTrending} from "../../redux/features/swiperSlice"
const CourseCategory = () => {

  const breadCrumb = useBreadCrumb();
  const pagination = usePagination();
  const dispatch = useDispatch();

  const { data: categoryData } = useSelector((state) => state.category);
  const { data: paginationData } = useSelector((state) => state.course);
  const { toggleClassTrending } = useSelector((state) => state.swiper)

  // for(let key in paginationData){
  //   console.log(`${key}: ${paginationData[key].tag_ids[0]}`);
  // }

  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    dispatch(fetchCategoryApi());
    dispatch(fetchCourseApi());
  }, [dispatch]);

  return (
    <Fragment>
      <main class="main-wrapper">
        {/* <!-- Page Banner Section Start --> */}
        {breadCrumb}
        {/* <!-- Page Banner Section End -->


        {/* <!-- Courses Category Start --> */}
        <div class="courses-category-section section-padding-02">
          <div class="container">
            {/* <!-- Courses Tabs Menu Start --> */}
            <div className="courses-tab-menu-03">
              <ul className="nav">
                <li>
                  <button
                    className={`${toggleClassTrending ? "active" : ""}`}
                    // onClick={() => setToggleClassTrending(true)}
                    onClick={() => dispatch(setToggleClassTrending(true))}
                  >
                    Most <mark>popular</mark>
                  </button>
                </li>
                <li>
                  <button
                    className={`${!toggleClassTrending ? "active" : ""}`}
                    // onClick={() => setToggleClassTrending(false)}
                    onClick={() => dispatch(setToggleClassTrending(false))}
                  >
                    Trending
                  </button>
                </li>
              </ul>
            </div>
            {/* <!-- Courses Tabs Menu End --> */}

            <div class="tab-content course-tab-active swiper-dots-style">
              <div
                className={`tab-pane fade ${
                  toggleClassTrending ? "show active" : ""
                }`}
              >
                <CustomSwiper/>
              </div>
              <div
                className={`tab-pane fade ${
                  !toggleClassTrending ? "show active" : ""
                }`}
                id="trending"
              >
                <Swiper
                  slidesPerView={5}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 10,
                  }}
                  modules={[SwiperPagination]}
                  className="mySwiper"
                >
                  {paginationData &&
                    paginationData
                      .filter((item) => item.tag_ids.includes("trending"))
                      .map((items) => (
                        <SwiperSlide key={items._id}>
                          {/* <!-- Course Start --> */}
                          <div className="course-item">
                            <div className="course-header">
                              <div className="course-header__thumbnail ">
                                <Link to="/courseCategoryDetails">
                                  <img
                                    src={items.img_url}
                                    alt="courses"
                                    width="258"
                                    height="173"
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="course-info">
                              <span className="course-info__badge-text badge-all">
                                {items.level}
                              </span>
                              <h3 className="course-info__title">
                                <Link to="/courseCategoryDetails">
                                  {items.title}
                                </Link>
                              </h3>
                              <Link
                                to="/courseCategoryDetails"
                                className="course-info__instructor"
                              >
                                {items.instructor}
                              </Link>
                              <div className="course-info__price">
                                <span className="sale-price">
                                  {items.sale_price}
                                  <small className="separator">00</small>
                                </span>
                              </div>
                              <div className="course-info__rating">
                                <div className="rating-star">
                                  <div
                                    className="rating-label"
                                    style={{ width: "80%" }}
                                  ></div>
                                </div>

                                <span>({items.rating})</span>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Course End --> */}
                        </SwiperSlide>
                      ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Courses Category End -->

<!-- Courses Category Featured Start --> */}
        <div class="courses-category-section section-padding-02">
          <div class="container">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h2 class="section-title__title">
                <mark>Featured</mark> Courses
              </h2>
            </div>
            {/* <!-- Section Title End --> */}

            <div className="row gy-6">
              {paginationData &&
                paginationData
                  .filter((item) => item.tag_ids.includes("Featured"))
                  .map((items) => {
                    return (
                      <div className="col-xl-3 col-md-6">
                        {/* <!-- Course Start --> */}
                        <div className="course-item-03">
                          <div className="course-header-03">
                            <div className="course-header-03__thumbnail ">
                              <Link to="/courseCategoryDetails">
                                <img
                                  src={items.img_url}
                                  alt="courses"
                                  width="330"
                                  height="221"
                                />
                              </Link>
                            </div>
                            <div className="course-header-03__badge">
                              <span className="hot">Featured</span>
                            </div>
                          </div>
                          <div className="course-info-03">
                            <h3 className="course-info-03__title">
                              <a href="course-single-layout-01.html">
                                {items.description}
                              </a>
                            </h3>
                            <div className="course-info-03__meta">
                              <span>5 Lessons</span>
                              <span>2.3 hours</span>
                              <span>Intermediate</span>
                            </div>
                            <div className="course-info-03__description">
                              <p>
                                Even if you’re a complete beginner, this course
                                will show …
                              </p>
                            </div>
                            <div className="course-info-03__footer">
                              <div className="course-info-03__footer-left">
                                <Link
                                  className="course-info-03__instructor"
                                  to="/courseCategoryDetails"
                                >
                                  {items.instructor}
                                </Link>
                              </div>
                              <div className="course-info-03__footer-right">
                                <div className="course-info-03__price">
                                  <span className="sale-price">
                                    {items.sale_price}
                                    <small className="separator">00</small>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Course End --> */}
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
        {/* <!-- Courses Category Featured End -->

<!-- Courses Category Start --> */}
        <div className="courses-category-section section-padding-02">
          <div className="container">
            {/* <!-- Section Title Start --> */}
            <div className="section-title">
              <h2 className="section-title__title">
                <mark>Popular </mark> Courses
              </h2>
            </div>
            {/* <!-- Section Title End -->

        <!-- Courses Popular Topic List Start --> */}
            <div className="course-popular-topic-list">
              {categoryData.map((items) => {
                return (
                  <Link
                    to="/courseCategoryDetails"
                    className="popular-topic-link"
                  >
                    {items.category_name}
                  </Link>
                );
              })}
            </div>
            {/* <!-- Courses Popular Topic List End --> */}
          </div>
        </div>
        {/* <!-- Courses Category Featured End -->

<!-- Courses Instructor Start --> */}
        <div class="courses-section section-padding-02">
          <div class="container">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h2 class="section-title__title">
                <mark>Popular </mark> Instructors
              </h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>
        {/* <!-- Courses Instructor Category Featured End -->

<!-- Courses Start --> */}
        <div class="courses-section section-padding-01">
          <div class="container">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h2 class="section-title__title">
                All <mark> Art & Design </mark> Courses
              </h2>
            </div>
            {/* <!-- Section Title End --> */}

            <div class="row gy-10 flex-row-reverse">
              {pagination}
              <Filter />
            </div>
          </div>
        </div>
        {/* <!-- Courses End --> */}
      </main>
    </Fragment>
  );
};
export default CourseCategory;
