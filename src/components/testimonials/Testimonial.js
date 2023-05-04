import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar04 from "../assets/images/avatar/avatar-04.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonialApi } from "../redux/service/service";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonial = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.testimonial);

  useEffect(() => {
    dispatch(fetchTestimonialApi());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="testimonial-section section-padding-02">
        <div className="container">
          <div className="row gy-10">
            <div className="col-lg-3 col-md-6">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="section-title__title">
                  People Say <br /> About <mark>EduMall</mark>{" "}
                </h2>
                <p>
                  One-stop solution for any eLearning center, online courses.
                  People love EduMall because they can create their sites with
                  ease here.
                </p>
              </div>

              <div
                className="section-btn"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Link to="#" className="btn btn-light btn-hover-primary">
                  View all
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div
                className="testimonial-active swiper-dots-style"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                    dynamicBullets:true,
                    dynamicMainBullets:4
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {data &&
                    data.map((items) => {
                      return (
                        <SwiperSlide key={items._id}>
                          <div className="testimonial-item">
                            <div className="testimonial-quote-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                width="50px"
                                height="40px"
                                viewBox="0 0 50 40"
                              >
                                <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"></path>
                                <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"></path>
                              </svg>
                            </div>
                            <div className="testimonial-main-content">
                              <div className="testimonial-caption">
                                <h3 className="testimonial-caption__title">
                                  {items.title}
                                </h3>
                                <p>{items.message}</p>
                              </div>
                              <div className="testimonial-info">
                                <div className="testimonial-info__image">
                                  <img
                                    src={avatar04}
                                    alt="Avatar"
                                    width="60"
                                    height="60"
                                  />
                                </div>
                                <div className="testimonial-info__caption">
                                  <h5 className="testimonial-info__name">
                                    {items.client_name}
                                  </h5>
                                  <p className="testimonial-info__designation">
                                    {items.designation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
