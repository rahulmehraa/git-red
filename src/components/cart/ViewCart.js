import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  {useBreadCrumb}  from "../hooks/useBreadCrumb";
const ViewCart = () => {
   const {cartItems} = useSelector((state) => state.cart);
   const breadCrumb = useBreadCrumb();
    const megaMenu = {
        backgroundImage: "url('../assets/images/home-megamenu-bg.jpg')",
      };
      const bgmobile = {
        backgroundImage: "url('../assets/images/mobile-bg.jpg')",
      };
  return (
    <Fragment>
      <main className="main-wrapper">
        {/* <!-- Page Banner Section Start --> */}
        {breadCrumb}
        {/* <!-- Page Banner Section End -->

<!-- Offcanvas Start --> */}
        <div
          className="offcanvas offcanvas-end offcanvas-mobile"
          id="offcanvasMobileMenu"
          style={bgmobile}
        >
          <div className="offcanvas-header bg-white">
            <div className="offcanvas-logo">
              <Link className="offcanvas-logo__logo" to="#">
                <img src="assets/images/dark-logo.png" alt="Logo" />
              </Link>
            </div>
            <button
              type="button"
              className="offcanvas-close"
              data-bs-dismiss="offcanvas"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

        
          {/* 
    <!-- Header User Button Start --> */}
          <div className="offcanvas-user d-lg-none">
            <div className="offcanvas-user__button">
              <button
                className="offcanvas-user__login btn btn-secondary btn-hover-secondarys"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Log In
              </button>
            </div>
            <div className="offcanvas-user__button">
              <button
                className="offcanvas-user__signup btn btn-primary btn-hover-primary"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Sign Up
              </button>
            </div>
          </div>
          {/* <!-- Header User Button End --> */}
        </div>
        {/* <!-- Offcanvas End -->

<!-- Cart Section Start --> */}
  {cartItems.length === 0 ? (
   <div>
      <h3 style={{justifyContent:"center"}}>Your cart is empty</h3>
      <Link to = "/">Start Shopping</Link>
   </div> 
  ): (
<div className="cart-section section-padding-01">
          <div className="container custom-container">
            <form action="#">
              {/* <!-- Cart Table Start --> */}
              <div className="cart-table table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product">Product</th>
                      <th className="price">Price</th>
                      <th className="quantity">Quantity</th>
                      <th className="subtotal">Subtotal</th>
                      <th className="action"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product">
                        <div className="cart-product">
                          <div className="cart-product__thumbnail">
                            <img
                              src={"https://htmldemo.net/edumall/edumall/assets/images/product/product-1.png"}
                              alt="Product"
                              width="70"
                              height="81"
                            />
                          </div>
                          <div className="cart-product__content">
                            <h3 className="cart-product__name">
                              Awesome for Websites
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td className="price">
                        <div className="cart-product__price">
                          <span className="sale-price">
                            $59.<small className="separator">00</small>
                          </span>
                        </div>
                      </td>
                      <td className="quantity">
                        <div className="cart-product">
                          <div className="product-quantity">
                            <button type="button" className="sub"></button>
                            <input type="text" value="1" />
                            <button type="button" className="add"></button>
                          </div>
                        </div>
                      </td>
                      <td className="subtotal">
                        <div className="cart-product__total-price">
                          <span className="sale-price discount">
                            $59.<small className="separator">00</small>
                          </span>
                        </div>
                      </td>
                      <td className="action">
                        <div className="cart-product__remove">
                          <Link className="remove" to="#">
                            Remove
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="product">
                        <div className="cart-product">
                          <div className="cart-product__thumbnail">
                            <img
                              src={"https://htmldemo.net/edumall/edumall/shop-single-list-left-sidebar.html"}
                              alt="Product"
                              width="70"
                              height="81"
                            />
                          </div>
                          <div className="cart-product__content">
                            <h3 className="cart-product__name">
                              Business Administration
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td className="price">
                        <div className="cart-product__price">
                          <span className="sale-price">
                            $26.<small className="separator">00</small>
                          </span>
                        </div>
                      </td>
                      <td className="quantity">
                        <div className="cart-product">
                          <div className="product-quantity">
                            <button type="button" className="sub"></button>
                            <input type="text" value="1" />
                            <button type="button" className="add"></button>
                          </div>
                        </div>
                      </td>
                      <td className="subtotal">
                        <div className="cart-product__total-price">
                          <span className="sale-price discount">
                            $26.<small className="separator">00</small>
                          </span>
                        </div>
                      </td>
                      <td className="action">
                        <div className="cart-product__remove">
                          <Link className="remove" to="#">
                            Remove
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="product">
                        <div className="cart-product">
                          <div className="cart-product__thumbnail">
                            <img
                              src="assets/images/product/product-14.png"
                              alt="Product"
                              width="70"
                              height="81"
                            />
                          </div>
                          <div className="cart-product__content">
                            <h3 className="cart-product__name">
                              The Five Invitations
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td className="price">
                        <div className="cart-product__price">
                          <span className="sale-price">
                            $42.<small className="separator">00</small>
                          </span>
                        </div>
                      </td>
                      <td className="quantity">
                        <div className="cart-product">
                          <div className="product-quantity">
                            <button type="button" className="sub"></button>
                            <input type="text" value="1" />
                            <button type="button" className="add"></button>
                          </div>
                        </div>
                      </td>
                      <td className="subtotal">
                        <div className="cart-product__total-price">
                          <span className="sale-price discount">
                            $42.<small className="separator">00</small>
                          </span>
                        </div>
                      </td>
                      <td className="action">
                        <div className="cart-product__remove">
                          <Link className="remove" to="#">
                            Remove
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- Cart Table End --> */}

              {/* <!-- Cart Actions Start --> */}
              <div className="cart-action d-flex flex-wrap justify-content-between gap-2">
                <div className="cart-action__left">
                  <Link className="btn btn-light btn-hover-primary" to="#">
                    Continue shopping
                  </Link>
                  <Link className="cart-action__item" to="/">
                    <i className="fas fa-times"></i> Clear shopping cart
                  </Link>
                </div>
                <div className="cart-action__right">
                  <button className="btn btn-secondary btn-hover-primary">
                    Update cart
                  </button>
                </div>
              </div>
              {/* <!-- Cart Actions End --> */}

              {/* <!-- Cart Collaterals Start --> */}
              <div className="cart-collaterals">
                <div className="row gy-6">
                  <div className="col-lg-4">
                    {/* <!-- Cart Collaterals Start --> */}
                    <div className="cart-collaterals__item">
                      <h5 className="cart-collaterals__title">
                        Coupon Discount
                      </h5>
                      <p>Enter your coupon code if you have one.</p>

                      <div className="cart-collaterals__input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Coupon code"
                        />
                      </div>
                      <div className="cart-collaterals__input">
                        <button className="btn btn-primary btn-hover-secondary">
                          Apply coupon
                        </button>
                      </div>
                    </div>
                    {/* <!-- Cart Collaterals End --> */}
                  </div>
                  <div className="col-lg-4">
                    {/* <!-- Cart Collaterals Start --> */}
                    <div className="cart-collaterals__item">
                      <h5 className="cart-collaterals__title">
                        Calculate shipping
                      </h5>
                      <p>Select a shipping method</p>

                      <div className="cart-collaterals__shipping-method">
                        <ul className="cart-collaterals__shipping-check">
                          <li className="form-check">
                            <input
                              type="radio"
                              id="radio1"
                              checked=""
                              name="shipping"
                            />
                            <label for="radio1">Free shipping</label>
                          </li>
                          <li className="form-check">
                            <input type="radio" id="radio2" name="shipping" />
                            <label for="radio2">
                              Flat rate:{" "}
                              <strong className="price">$5.00</strong>
                            </label>
                          </li>
                        </ul>
                      </div>

                      <p>
                        Shipping to{" "}
                        <strong>
                          2134 Lawndale Dr, #10, Greensboro, NY 27408
                        </strong>
                        .
                      </p>

                      <div className="cart-collaterals__input">
                        <select className="select2">
                          <option value="01">option 01</option>
                          <option value="02">option 02</option>
                          <option value="03">option 03</option>
                          <option value="04">option 04</option>
                          <option value="05">option 05</option>
                          <option value="06">option 06</option>
                          <option value="07">option 07</option>
                          <option value="08">option 08</option>
                          <option value="09">option 09</option>
                          <option value="10">option 10</option>
                          <option value="11">option 11</option>
                          <option value="12">option 12</option>
                          <option value="13">option 13</option>
                        </select>
                      </div>
                      <div className="cart-collaterals__input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Town / City"
                        />
                      </div>
                      <div className="cart-collaterals__input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Postcode / ZIP"
                        />
                      </div>
                      <div className="cart-collaterals__input">
                        <button className="btn btn-primary btn-hover-secondary">
                          Update
                        </button>
                      </div>
                    </div>
                    {/* <!-- Cart Collaterals End --> */}
                  </div>
                  <div className="col-lg-4">
                    {/* <!-- Cart Collaterals Start --> */}
                    <div className="cart-collaterals__item">
                      <div className="cart-collaterals__box">
                        <table className="cart-collaterals__table">
                          <tbody>
                            <tr className="cart-subtotal">
                              <th>Subtotal</th>
                              <td>
                                <span className="subtotal-price">
                                  $131<span className="separator">.00</span>
                                </span>
                              </td>
                            </tr>
                            <tr className="cart-shipping">
                              <th>Shipping</th>
                              <td>
                                Free shipping{" "}
                                <span className="shipping-fee">
                                  $5<span className="separator">.00</span>
                                </span>
                              </td>
                            </tr>
                            <tr className="order-total">
                              <th>Total</th>
                              <td>
                                <span className="total-price">
                                  $136<span className="separator">.00</span>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="cart-collaterals__btn">
                          <Link
                            className="btn btn-primary btn-hover-secondary w-100"
                            to="checkout.html"
                          >
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Cart Collaterals End --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Cart Collaterals End --> */}
            </form>
          </div>
        </div>
  )}
        {/* <!-- Cart Section End --> */}
      </main>
    </Fragment>
  );
};
export default ViewCart;
