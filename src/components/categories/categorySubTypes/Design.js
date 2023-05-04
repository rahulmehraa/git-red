import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import courses1 from "../../assets/images/courses/courses-1.png";
import { fetchCategoryApi } from "../../redux/service/service";
import {useBreadCrumb} from "../../hooks/useBreadCrumb";
const AllBusiness = () => {

  const breadCrumb = useBreadCrumb();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoryApi());
  }, [dispatch]);

  return (
    <Fragment>
      
      {breadCrumb}

      <div className="shop-section section-padding-01">
        <div className="container">
          <div className="row gy-10 flex-row-reverse">
            <div className="shop-main-content">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="grid">
                  <div className="row gy-6">
                    {data.map((item) => {
                        return (
                          <div className="col-xl-3 col-md-4 col-sm-6">
                            {/* <!-- Product Item Start --> */}
                            <div
                              className="product-item"
                              data-aos="fade-up"
                              data-aos-duration="1000"
                            >
                              <div className="product-item__header">
                                <div className="product-item__thumbnail">
                                  <Link to="shop-single-tab-left-sidebar.html">
                                    <img
                                      src={courses1}
                                      alt="Product"
                                      width="251"
                                      height="290"
                                    />
                                  </Link>
                                </div>
                                <div className="product-item__badge">
                                  <span className="onsale">-34%33</span>
                                </div>
                                <div className="product-item__actions">
                                  <Link
                                    className="product-item__action"
                                    data-bs-tooltip="tooltip"
                                    data-bs-placement="top"
                                    title="Add to cart"
                                    to="#"
                                  >
                                    <i className="fa fa-shopping-cart"></i>
                                  </Link>
                                  <Link
                                    className="product-item__action"
                                    data-bs-tooltip="tooltip"
                                    data-bs-placement="top"
                                    title="Add to wishlist"
                                    to="#"
                                  >
                                    <i className="far fa-heart"></i>
                                  </Link>
                                  <Link
                                    className="product-item__action"
                                    data-bs-tooltip="tooltip"
                                    data-bs-placement="top"
                                    title="Compare"
                                    to="#"
                                  >
                                    <i className="fas fa-signal"></i>
                                  </Link>
                                </div>
                              </div>
                              <div className="product-item__info text-center">
                                <div className="product-item__price">
                                  <span className="sale-price discount">
                                    $59.<small className="separator">00</small>
                                  </span>
                                  <span className="regular-price">
                                    $89.<small className="separator">00</small>
                                  </span>
                                </div>
                                <h2 className="product-item__title">
                                  <Link to="shop-single-tab-left-sidebar.html">
                                    {item.name}
                                  </Link>
                                </h2>
                              </div>
                            </div>
                            {/* <!-- Product Item End --> */}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>

              {/* <!-- Page Pagination Start --> */}
              <div className="page-pagination">
                <ul className="pagination justify-content-center">
                  <li>
                    <Link className="active" to="#">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">...</Link>
                  </li>
                  <li>
                    <Link to="#">7</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Page Pagination End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Shop End --> */}
    </Fragment>
  );
};

export default AllBusiness;
