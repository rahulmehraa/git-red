import React, { useEffect, useState } from "react";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseApi } from "../redux/service/service";

export const CustomSwiper = () => {
  const dispatch = useDispatch();
  const { data: paginationData } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourseApi());
  }, [dispatch]);

  // for(let key in paginationData){
  //   console.log(`${key}: ${paginationData[key].tag_ids[0]}`);
  // }

  return (
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
          .filter((item) => item.tag_ids.includes("popular"))
          .map((item) => (
            <SwiperSlide key={item._id}>
              {/* <!-- Course Start --> */}
              <div className="course-item">
                <div className="course-header">
                  <div className="course-header__thumbnail ">
                    <Link to="/courseCategoryDetails">
                      <img
                        src={item.img_url}
                        alt="courses"
                        width="258"
                        height="173"
                      />   
                    </Link>
                  </div>
                </div>
                <div className="course-info">
                  <span className="course-info__badge-text badge-all">
                    {item.level}
                  </span>
                  <h3 className="course-info__title">
                    <Link to="/courseCategoryDetails">{item.title}</Link>
                  </h3>
                  <Link
                    to="/courseCategoryDetails"
                    className="course-info__instructor"
                  >
                    {item.instructor}
                  </Link>
                  <div className="course-info__price">
                    <span className="sale-price">
                      {item.sale_price}
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

                    <span>({item.rating})</span>
                  </div>
                </div>
              </div>
              {/* <!-- Course End --> */}
            </SwiperSlide>
          ))}
    </Swiper>
  );
};
