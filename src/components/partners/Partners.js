import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartnerApi } from "../redux/service/service";
import { Link } from "react-router-dom";
const Partners = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.partner);

  useEffect(() => {
    dispatch(fetchPartnerApi());
  }, [dispatch]);

  return (
    <Fragment>
      <div class="partners-section section-padding-01">
        <div class="container">
          <div class="row gy-8 align-items-center">
            <div class="col-lg-3 col-md-6">
              <div
                class="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 class="section-title__title">
                  Who Will You <br /> Learn <mark>With?</mark>{" "}
                </h2>
                <p>
                  You can list your partners or instructors's brands here to
                  show off your site's reputation and students can trust you
                  more.
                </p>
              </div>

              <div
                class="section-btn"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Link to="#" class="btn btn-light btn-hover-primary">
                  View all Partners
                </Link>
              </div>
            </div>

            <div class="col-lg-9">
              <div
                class="partner-logo-wrapper"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.map((items) => {
                  return (
                  
                      <div class="partner-logo">
                        <div class="partner-logo__logo">
                          <img
                            src={items.image}
                            alt="Brand Logo"
                            width="68"
                            height="92"
                          />
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Partners;
