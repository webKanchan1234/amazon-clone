import React from "react";
import "./nav.css";
import logo from "../image/logo.png";
import india from "../image/india.jpg";
import Location from "@material-ui/icons/PlaceOutlined";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import Search from "@material-ui/icons/SearchOutlined";
import { Link } from "@material-ui/core";

const Nav = () => {
  return (
    <div id="scroll" className="nav_container">
      <div className="nav_left">
        <div className="logo">
          <img src={logo} alt="Netflix Logo" />
          <span>.in</span>
        </div>
        <div className="address">
          <div className="location">
            {/* <img src={} alt="India" /> */}
            <Location className="img" />
          </div>
          <div className="deliver_address">
            <p>Hello</p>
            <span>Select your address</span>
          </div>
        </div>
      </div>
      <div className="nav_middle">
        <div className="select">
          <select name="select" className="select_input" id="select">
            <option value="all">All</option>
            <option value="movies">Alexa Skills</option>
            <option value="movies">Amazon Devices</option>
            <option value="movies">Amazon Fashion</option>
            <option value="movies">Amazon Pharmacy</option>
            <option value="movies">Appliances</option>
            <option value="movies">Apps & Games</option>
            <option value="movies">Baby</option>
            <option value="movies">Beauty</option>
            <option value="movies">Deals</option>
            <option value="movies">Electronics</option>
            <option value="movies">Furniture</option>
            <option value="movies">Gifts Cards</option>
            <option value="movies">Prime Video</option>
            <option value="movies">Software</option>
          </select>
        </div>
        <div className="input">
          <input type="text" name="" id="" />
        </div>
        <div className="search">
          {/* <button>ch</button> */}
          <Search className="button" />
        </div>
      </div>
      <div className="nav_right">
        <div className="language">
          <img src={india} alt="" />
          <select name="select" className="language_select" id="select">
            <option value="all">✔</option>
            <option value="movies">English</option>
            <option value="movies">Hindi</option>
          </select>
        </div>
        <div className="sign_in">
          <p>Hello,sign in</p>
          <span>Account & Listing</span>
          <div className="sign_in_hide">
            <div className="sign_in_hide_top"></div>
            <div className="sign_in_hide_down">
              <div className="sign_in_hide_down_top">
                <Link to="/login" className="link">
                  Sign in
                </Link>
              </div>
              <div className="new">
                <h1>New Customer? </h1>
                <Link to="/signup" className="linksign">
                  Start here.
                </Link>
              </div>
              <div className="sign_in_hide_down_down">
                <div className="sign_in_hide_down_down_left">
                  <h4>Yor Lists</h4>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Create a Wish List
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Wish from any website
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Baby Wishlist
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Discover Your Style
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Wish from any website
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Explore Showroom
                    </Link>
                  </div>
                </div>
                <div className="sign_in_hide_down_down_right">
                  <h4>Your Account</h4>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Your Account
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Your Orders
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Your Wish List
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Your Recommendation
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Your Prime Membership
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Your Prime Video
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Your Subscribe & Save Items
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Membership Subscription
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Your Amazon Bussiness Account
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Your Seller Account
                    </Link>
                  </div>
                  <div className="wishlistlink">
                    <Link to="" className="link">
                      Manage your Content and Devices
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="return">
          <p>Returns</p>
          <span>& Orders</span>
        </div>
        <div className="cart">
          <Cart className="p" />
          {/* <p>{EditIcon}</p> */}
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
