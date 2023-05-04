import { capitalize } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const useBreadCrumb = () => {
  const [breadCrumb, setBreadCrumb] = useState([]);


  useEffect(() => {
    setBreadCrumb(
      <div class="page-banner bg-color-04">
        <div class="page-banner__wrapper">
          <div class="page-banner__shape-01"></div>
          <div class="page-banner__shape-02"></div>
          <div class="page-banner__shape-03"></div>

          <div class="container">
            {/* <!-- Page Breadcrumb Start --> */}
            <div class="page-breadcrumb">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link href="index.html">home/courses/Design</Link>
                </li>
              </ul>
            </div>
            {/* <!-- Page Breadcrumb End --> */}

            {/* <!-- Page Banner Caption Start --> */}
            <div class="page-banner__caption-02">
              <h2 class="page-banner__main-title-02">Design</h2>
            </div>
            {/* <!-- Page Banner Caption End --> */}
          </div>
        </div>
      </div>
    );
  }, []);
  return breadCrumb;
};