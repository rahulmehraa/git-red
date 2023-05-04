
import React,{Fragment} from "react";
import image404 from "../components/assets/images/page-404-image.png";
import {Link} from 'react-router-dom';

const Page404 = () =>{
    return(
        <Fragment>
              {/* <!-- 404 Page Start --> */}
        <div className="404-page-section section-padding-01">
            <div className="container custom-container">

                <div className="error-page text-center">

                    <div className="error-page__logo">
                        <Link to="index.html"><img src={image404} alt="Logo"/></Link>
                    </div>

                    <div className="error-page__image">
                        <img src={image404} alt="Error" width="699" height="380"/>
                    </div>

                    <div className="error-page__content">
                        <h2 className="error-page__title">Oops! That page can't be found.</h2>
                        <p className="error-page__text">It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
                        <div className="error-page__btn">
                            <Link to="/" className="btn btn-primary btn-hover-secondary"><i className="fas fa-home"></i> Go back to homepage</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* <!-- 404 Page End --> */}
        </Fragment>
    );
};
export default Page404 ;