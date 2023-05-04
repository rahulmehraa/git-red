import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseModal,
  handleUserInputPhoneNumber,
  handleUserInputOtpNumber,
} from "../redux/features/loginModalSlice";
import { Link, useNavigate } from "react-router-dom";
import GoogleSocial from "../social/GoogleSocial";
import { fetchPhoneNumber, fetchPhoneOtp } from "../redux/service/service";
import OtpExpiry from "./OtpExpiry";
import { useState } from "react";

const LoginModal = ({ counter }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formPhoneNumberError, setFormPhoneNumberError] = useState();

  //verified
  const {
    isError,
    errorMessage,
    phoneNumberSuccessStatusCode,
    userInputOtp,
    userInputPhoneNumber,
    verifyOtpResponseMessage,
  } = useSelector((state) => state.modal);

  const { isOpen, isLoggedIn, apiOtpData } = useSelector(
    (state) => state.modal
  );

  //verified
  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    setFormPhoneNumberError(validatePhoneNumber(userInputPhoneNumber)); //function calling for phone number validation
    const obj = { phnNumber: userInputPhoneNumber }; //creating object for passing to action creator

    dispatch(fetchPhoneNumber(obj));
  };

  //verified
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const obj = { phnNumber: userInputPhoneNumber, otp: userInputOtp }; //creating object for passing to action creator
    dispatch(fetchPhoneOtp(obj));
    if (verifyOtpResponseMessage === "Login successfully") {
      navigate("/viewcart");
    }
  };

  const hideModal = () => {
    if (isLoggedIn) {
      dispatch(handleCloseModal());
    } else return alert("Please Login or press back Button to go to Home Page");
  };

  //Working fine
  const handlePhoneNumberChange = (e) => {
    dispatch(
      handleUserInputPhoneNumber({
        ...userInputPhoneNumber,
        [e.target.name]: e.target.value,
      })
    );
  };

  //verified
  const handleOtpChange = (e) => {
    dispatch(
      handleUserInputOtpNumber({
        ...userInputOtp,
        [e.target.name]: e.target.value,
      })
    );
  };

  //Form Phone number validation
  const validatePhoneNumber = (userInputPhoneNumber) => {
    const errors = {};
    const regex = /^[0-9]+$/i;

    if (!userInputPhoneNumber) {
      errors.userInputPhoneNumber = "Phone Number is Required";
    } else if (userInputPhoneNumber.length < 10) {
      errors.userInputPhoneNumber = "Please enter a valid phone number";
    } else if (!regex.test(userInputPhoneNumber)) {
      errors.userInputPhoneNumber = "Please enter a valid phone number";
    }
    return errors;
  };

  return (
    <Modal
      className="modal fade"
      id="loginModal"
      show={isOpen}
      onHide={hideModal}
      centered
    >
      <div>
        {parseInt(phoneNumberSuccessStatusCode) === 200 &&
          verifyOtpResponseMessage !== "Otp Expired" && (
            <h3 className="text-success">Your OTP is : {apiOtpData}</h3>
          )}
        <div className="modal-dialog modal-dialog-centered modal-login">
          {/* Modal Wrapper Start */}
          <div className="modal-wrapper">
            <button className="modal-close" data-bs-dismiss="modal">
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Modal Content Start */}
            <div className="modal-content">
              <div className="modal-header">
                <Link to="/login">
                  {" "}
                  <h5 className="modal-title">Login</h5>{" "}
                </Link>
                <p className="modal-description">
                  Don't have an account yet?{" "}
                  <Link to="/register">
                    <button>Sign up for free</button>
                  </Link>
                </p>
              </div>
              <div className="modal-body">
                <form action="POST">
                  {phoneNumberSuccessStatusCode !== 200 && (
                    <div className="modal-form">
                      <label className="form-label">Phone Number</label>
                      <input
                        id="phoneNumberInput"
                        value={userInputPhoneNumber.phoneNumber}
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Your Phone Number"
                        type="number"
                        onChange={handlePhoneNumberChange}
                      />
                      {formPhoneNumberError && (
                        <p className="text-danger">
                          {formPhoneNumberError.userInputPhoneNumber}
                        </p>
                      )}
                      {/* {isError && (
                          <p className="text-danger">Please try again later.</p>
                        )} */}
                    </div>
                  )}
                  {parseInt(phoneNumberSuccessStatusCode) === 200 && (
                    <div className="modal-form">
                      <label className="form-label">Enter Otp</label>
                      <input
                        id="otpInput"
                        value={userInputOtp.otp}
                        name="otp"
                        type="number"
                        className="form-control"
                        placeholder="Enter OTP"
                        onChange={handleOtpChange}
                      />
                      {parseInt(phoneNumberSuccessStatusCode) === 200 ? (
                        verifyOtpResponseMessage === "Incorrect OTP" ? (
                          <p className="text-danger">
                            {verifyOtpResponseMessage}
                          </p>
                        ) : (
                          <p className="text-success">
                            {verifyOtpResponseMessage}
                          </p>
                        )
                      ) : null}
                    </div>
                  )}
                  {/* Otp Expiry Code*/}
                  {parseInt(phoneNumberSuccessStatusCode) === 200 && (
                    <OtpExpiry counter={counter} />
                  )}

                  <div className="modal-form d-flex justify-content-between flex-wrap gap-2">
                    <div className="form-check">
                      <input type="checkbox" id="rememberme" />
                      <label htmlFor="rememberme">Remember me</label>
                    </div>
                    <div className="text-end">
                      <Link className="modal-form__link" to="#">
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    {phoneNumberSuccessStatusCode !== 200 && (
                      <button
                        className="btn btn-primary btn-hover-secondary w-100"
                        onClick={handlePhoneNumberSubmit}
                      >
                        Send OTP
                      </button>
                    )}
                    {parseInt(phoneNumberSuccessStatusCode) === 200 && (
                      <button
                        className="btn btn-primary btn-hover-secondary w-100"
                        onClick={handleOtpSubmit}
                      >
                        Login
                      </button>
                    )}
                  </div>
                </form>

                <GoogleSocial />
              </div>
            </div>
            {/* Modal Content End */}
          </div>
          {/* Modal Wrapper End */}
        </div>
      </div>
    </Modal>
  );
};
export default LoginModal;
