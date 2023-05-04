import React,{Fragment , useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseApi } from '../redux/service/service';
const TopCategories = () =>{

  const dispatch = useDispatch();
  const {data , isLoading} = useSelector((state) => state.course);

  useEffect(() =>{
    dispatch(fetchCourseApi());
  },[dispatch])

  //Defining Local state for top categories button toggle action
  const[activeButton , setActiveButton] = useState("all");

    return(
        <Fragment>
            <div className="courses-section section-padding-02">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h2 className="section-title__title">
                    Top <mark>Categories</mark>{" "}
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="courses-tab-menu"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <ul className="nav justify-content-lg-end">
                    <li>
                      <button
                        onClick = {() =>{setActiveButton("all")}}
                        className={`${activeButton === "all" ? "active" : ""}`}
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button onClick = {() =>{ setActiveButton("trending")}} className = {`${activeButton === "trending" ? "active" : ""}`} data-bs-toggle="tab" data-bs-target="#tab2">
                        Trending
                      </button>
                    </li>
                    <li>
                      <button onClick = {() => setActiveButton("popular")} data-bs-toggle="tab" data-bs-target="#tab3" className = {`${activeButton === "popular" ? "active" : ""}`}>
                        Popularity
                      </button>
                    </li>
                    <li>
                      <button onClick = {() => setActiveButton("Featured")} data-bs-toggle="tab" data-bs-target="#tab4" className = {`${activeButton === "featured" ? "active" : ""}`}>
                        Featured
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1">
                <div className="row row-cols-xl-5 g-6">
                  
                  {
                    activeButton === "all" ? data.length > 0 && data.slice(0,10).map(items =>{
                      return(
                        <div className="col-xl col-lg-3 col-md-4 col-sm-6" key = {items._id}>
                          
                        <div
                          className="course-item"
                          
                        >
                          <div className="course-header">
                  
                            <div className="course-header__thumbnail ">
                              <Link to={`/courseCategoryDetails/${items._id}`}>
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
                              {items._id}
                            </span>
                            <h3 className="course-info__title">
                             
                                {items.title}
                            
                            </h3>
                            <div className="course-info__instructor">
                              parra
                            </div>
                            <div className="course-info__price">
                              <span className="sale-price">
                                {items.sale_price}<small className="separator">00</small>
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
                      </div>
                      )
                    })
                  
                  :
                  
                  data.length > 0 && data.filter((items) => items.tag_ids.includes(activeButton)).slice(0,10).map(items =>{
                    return(
                      <div className="col-xl col-lg-3 col-md-4 col-sm-6">
                      <div
                        className="course-item"
                        
                      >
                        <div className="course-header">
                          <div className="course-header__thumbnail ">
                            <Link to="/courseCategory">
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
                            {items._id}
                          </span>
                          <h3 className="course-info__title">
                            <Link to="/courseCategory">
                              {items.title}
                            </Link>
                          </h3>
                          <Link to="/courseCategory" className="course-info__instructor">
                            parra
                          </Link>
                          <div className="course-info__price">
                            <span className="sale-price">
                              {items.sale_price}<small className="separator">00</small>
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
                    </div>
                    )
                  })

                        }
                </div>
              </div>
            </div>
          </div>
        </div>
        </Fragment>
    )
}
export default TopCategories ;