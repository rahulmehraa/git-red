import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleCloseModal } from "../redux/features/registerModalSlice";
import { useNavigate } from "react-router-dom";
const RegisterModal = () => {
  const navigate = useNavigate();
  const { isOpen } = useSelector((state) => state.registerModal);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/")
  };
  const hideModal = () => {
    dispatch(handleCloseModal());
  };
  return (
    <Modal
      className="modal fade"
      id="loginModal"
      show={isOpen}
      onHide={hideModal}
      centered
    >
      <div class="modal-dialog modal-dialog-centered modal-register">
        {/* <!-- Modal Wrapper Start --> */}
        <div class="modal-wrapper">
          <button class="modal-close" data-bs-dismiss="modal">
            <i class="fas fa-times"></i>
          </button>

          {/* <!-- Modal Content Start --> */}
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Sign Up</h5>
              <p class="modal-description">
                Already have an account?
                <Link to="/login">
                  <button>Log in</button>
                </Link>
              </p>
            </div>
            <div class="modal-body">
              <form action="#">
                <div class="row gy-5">
                  <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Username</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="username"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Email</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                   {/* phoneNumber */}
                   <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Enter Phone Number</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                   {/* Alt- phoneNumber */}
                   <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Alternate Phone Number</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Alternate Phone Number"
                      />
                    </div>
                  </div>
                   {/* Gender */}
                   <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Gender</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Gender"
                      />
                    </div>
                  </div>
                   {/* phParents Name*/}
                   <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Enter Parents Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Parents Name"
                      />
                    </div>
                  </div>
                   {/* parents occupation*/}
                   <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Parents Occupation</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Parents Occupation"
                      />
                    </div>
                  </div>
                   {/* address */}
                   <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="address"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="modal-form">
                      <label class="form-label">Re-Enter Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Re-Enter Password"
                      />
                    </div>
                  </div>
                 

                  <div class="col-md-12">
                    <div class="modal-form form-check">
                      <input type="checkbox" id="privacy" />
                      <label for="privacy">
                        Accept the Terms and Privacy Policy
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="modal-form">
                      <button
                        class="btn btn-primary btn-hover-secondary w-100"
                        onClick={handleSubmit}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Modal Content End --> */}
        </div>
        {/* <!-- Modal Wrapper End --> */}
      </div>
    </Modal>
  );
};
export default RegisterModal;
