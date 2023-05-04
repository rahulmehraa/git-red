import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { fetchFilterApi, fetchPaginationApi } from "../redux/service/service";
import {
  setPageClick,
  setToggleClassPagination,
} from "../../components/redux/features/paginationSlice";

export const usePagination = () => {
  const dispatch = useDispatch();
  const { data: paginationJSONData, isLoading } = useSelector((state) => state.pagination);
  const { toggleClassPagination } = useSelector((state) => state.pagination);
  const { currentPage, totalData, limit } = useSelector((state) => state.pagination);
  const { data, isFilterClicked , _id} = useSelector((state) => state.filter);

  console.log("totalData from frontend", _id);

  useEffect(() => {
    dispatch(fetchPaginationApi({ currentPage, limit }));  
  }, [currentPage, dispatch , isFilterClicked]);

  useEffect(() =>{
    dispatch(fetchFilterApi(_id))
  },[isFilterClicked]);

  const handlePageClick = (e, value) => {
    dispatch(setPageClick(value.toString()));
  };

  return (
    <Fragment>
      <div class="col-lg-9">
        {/* <!-- Archive Filter Bars Start --> */}
        <div class="archive-filter-bars">
          <div class="archive-filter-bar">
            <p>
              We found <span>{totalData}</span> courses available for you
            </p>
          </div>

          <div className="archive-filter-bar">
            <div className="filter-bar-wrapper">
              <span>See</span>
              <ul className="nav">
                <li>
                  <button
                    className={`${toggleClassPagination ? "active" : ""}`}
                    data-bs-toggle="tab"
                    data-bs-target="#grid"
                    onClick={() => {
                      dispatch(setToggleClassPagination(true));
                    }}
                  >
                    <i className="fas fa-th"></i>
                  </button>
                </li>
                <li>
                  <button
                    className={`${!toggleClassPagination ? "active" : ""}`}
                    data-bs-toggle="tab"
                    data-bs-target="#list"
                  >
                    <i
                      className="fas fa-bars"
                      onClick={() => {
                        dispatch(setToggleClassPagination(false));
                      }}
                    ></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Archive Filter Bars End --> */}
        <div className="tab-content">
          {isLoading ? (
            <div className="text-center">
              <i className="fa fa-spinner fa-spin"></i>
            </div>
          ) : (
            <div
              className={`tab-pane fade ${
                toggleClassPagination ? "show active" : ""
              }`}
              id="grid"
            >
              {isFilterClicked === false ? (
                <div class="row gy-6">
                  {paginationJSONData &&
                    paginationJSONData.map((item) => {
                      return (
                        <div
                          class="col-xl-4 col-md-6"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                        >
                          {/* <!-- Course Start --> */}
                          <div class="course-item-02">
                            <div class="course-header">
                              <div class="course-header__thumbnail ">
                                <Link to="/courseCategoryDetails">
                                  <img
                                    src={item.img_url}
                                    alt="courses"
                                    width="330"
                                    height="221"
                                  />
                                </Link>
                              </div>
                              <div class="course-header__badge">
                                <span class="hot">{item._id}</span>
                              </div>
                            </div>
                            <div class="course-info-02">
                              <span class="course-info-02__badge-text badge-intermediate">
                                Intermediate
                              </span>
                              <div class="course-info-02__category">
                                <Link to="/courseCategoryDetails">
                                  Art & Design
                                </Link>
                              </div>
                              <h3 class="course-info-02__title">
                                <Link to="/courseCategoryDetails">
                                  {item.id}
                                </Link>
                              </h3>
                              <div class="course-info-02__description">
                                <p>{item.description}</p>
                              </div>
                              <div class="course-info-02__price">
                                <span class="sale-price">
                                  {item.sale_price}
                                  <small class="separator">00</small>
                                </span>
                              </div>
                              <div class="course-info__rating">
                                <div class="rating-star">
                                  <div
                                    class="rating-label"
                                    style={{ width: "100%" }}
                                  ></div>
                                </div>

                                <span>{item._id}</span>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Course End --> */}
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div class="row gy-6">
                {data &&
                  data.map((item) => {
                    return (
                      <div
                        class="col-xl-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        {/* <!-- Course Start --> */}
                        <div class="course-item-02">
                          <div class="course-header">
                            <div class="course-header__thumbnail ">
                              <Link to="/courseCategoryDetails">
                                <img
                                  src={item.img_url}
                                  alt="courses"
                                  width="330"
                                  height="221"
                                />
                              </Link>
                            </div>
                            <div class="course-header__badge">
                              <span class="hot">{item._id}</span>
                            </div>
                          </div>
                          <div class="course-info-02">
                            <span class="course-info-02__badge-text badge-intermediate">
                              {item.course_name}
                            </span>
                            <div class="course-info-02__category">
                              <Link to="/courseCategoryDetails">
                                {item.title}
                              </Link>
                            </div>
                            <h3 class="course-info-02__title">
                              <Link to="/courseCategoryDetails">
                                {item.id}
                              </Link>
                            </h3>
                            <div class="course-info-02__description">
                              <p>{item.description}</p>
                            </div>
                            <div class="course-info-02__price">
                              <span class="sale-price">
                                {item.sale_price}
                                <small class="separator">00</small>
                              </span>
                            </div>
                            <div class="course-info__rating">
                              <div class="rating-star">
                                <div
                                  class="rating-label"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>

                              <span>{item._id}</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Course End --> */}
                      </div>
                    );
                  })}
              </div>
              )}
            </div>
          )}

          <div
            className={`tab-pane fade ${
              !toggleClassPagination ? "show active" : ""
            }`}
            id="list"
          >
            {/* <!-- Course List Start --> */}

            {paginationJSONData &&
              paginationJSONData.map((items) => {
                return (
                  <div className="course-list-item">
                    <div className="course-list-header">
                      <div className="course-list-header__thumbnail ">
                        <a href="course-single-layout-01.html">
                          <img
                            src={items.img_url}
                            alt="courses"
                            width="270"
                            height="181"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="course-list-info">
                      <h3 className="course-list-info__title">
                        <Link to="course-single-layout-01.html">
                          {items.title}
                        </Link>
                      </h3>
                      <div className="course-list-info__meta">
                        <span>
                          <i className="fas fa-play-circle"></i> 5 Lessons
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 2.3 hours
                        </span>
                        <span>
                          <i className="fas fa-sliders-h"></i> All Levels
                        </span>
                      </div>
                      <div className="course-list-info__description">
                        <p>{items.description}</p>
                      </div>
                      <div className="course-list-info__action">
                        <button className="btn btn-primary btn-hover-secondary">
                          Add to cart
                        </button>
                        <button
                          className="btn-icon btn-light btn-hover-primary"
                          data-bs-tooltip="tooltip"
                          data-bs-placement="top"
                          title="Add to wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                      <div className="course-list-info__footer">
                        <div className="course-list-info__price">
                          <span className="sale-price">
                            {items.sale_price}
                            <small className="separator">00</small>
                          </span>
                        </div>
                        <div className="course-list-info__rating">
                          <div className="rating-star">
                            <div
                              className="rating-label"
                              style={{ width: "100%" }}
                            ></div>
                          </div>

                          <div className="rating-average">
                            <span className="rating-average__average">
                              {items.rating}
                            </span>
                            <span className="rating-average__totalData">
                              /5
                            </span>
                          </div>

                          <p className="course-list-info__rating-count">
                            ({items.rating})
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* <!-- Course List End --> */}
          </div>
        </div>

        {/* <!-- Page Pagination Start --> */}
        <Box py={6} display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(totalData / limit)}
            color="primary"
            variant="outlined"
            onChange={handlePageClick}
          />
        </Box>
        {/* <!-- Page Pagination End --> */}
      </div>
    </Fragment>
  );
};
