import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Menu from "@material-ui/icons/Menu";
import SlidingPanel from "react-sliding-side-panel";
import { Avatar } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";

const Header = () => {
  const [openPanel, setOpenPanel] = useState(false);
  let flag = false;

  let menu;
  menu = document.querySelector(".menu");

  const menuFun = () => {
    if (flag) {
      menu.style.display = "none";
      flag = false;
    } else {
      menu.style.display = "block";
      flag = true;
    }
  };

  return (
    <div className="header_container">
      <div className="header_left">
        <div className="all">
          <button className="link menu1" onClick={() => setOpenPanel(true)}>
            {/* {" "} */}
            <Menu className="menu1" />
            All
          </button>
          <div className="menu">
            <SlidingPanel type={"left"} isOpen={openPanel} size={26}>
              <div className="menu_box">
                <div className="menu_box_top">
                  <div className="menu_box_top_left">
                    <Avatar className="avatar" />
                    <span>Sign in</span>
                  </div>
                  <button onClick={() => setOpenPanel(false)}>
                    <CloseOutlined />{" "}
                  </button>
                </div>
                <div className="menu_box_down">
                  <p>Trending</p>
                  <div className="trending">
                    <Link to="/best_seller" className="link">Best Seller</Link>
                  </div>
                  <div className="trending">
                    <Link to="/new_release" className="link">New Releases</Link>
                  </div>
                  <div className="trending">
                    <Link to="/moview" className="link">Moview</Link>
                  </div>
                  <hr />
                  <p>Digital Content And Devices</p>
                  <div className="trending">
                    <Link to="/best_seller" className="link">Echo & Alexa</Link>
                  </div>
                  <div className="trending">
                    <Link to="/new_release" className="link">Fire Tv</Link>
                  </div>
                  <div className="trending">
                    <Link to="/moview" className="link">Kindle E-Readers & eBooks</Link>
                  </div>
                  <div className="trending">
                    <Link to="/moview" className="link">Audible Audiobooks</Link>
                  </div>
                  <div className="trending">
                    <Link to="/best_seller" className="link">Amazon Prime Video</Link>
                  </div>
                  <div className="trending">
                    <Link to="/new_release" className="link">Amazon Prime Music</Link>
                  </div>
                  <hr />
                  <p>Shop By Category</p>
                  <div className="trending">
                    <Link to="/best_seller" className="link">Mobiles, Computers</Link>
                  </div>
                  <div className="trending">
                    <Link to="/new_release" className="link">Tv, Appliances, Electronics</Link>
                  </div>
                  <div className="trending">
                    <Link to="/moview" className="link">Men's Fashion</Link>
                  </div>
                  <div className="trending">
                    <Link to="/moview" className="link">See All</Link>
                  </div>
                  <hr />
                  <p>Programs and Features</p>
                  <div className="trending">
                    <Link to="/best_seller" className="link">Gifts and Mobile Recharges</Link>
                  </div>
                  <div className="trending">
                    <Link to="/new_release" className="link">Flight Tickets</Link>
                  </div>
                  <div className="trending">
                    <Link to="/moview" className="link">#FoundItOnAmazon</Link>
                  </div>
                  <div className="trending">
                    <Link to="/moview" className="link">Clearance Store</Link>
                  </div>
                  <hr />
                </div>
              </div>
            </SlidingPanel>
          </div>
        </div>
        <Link className="link" to="/">
          Best Sellers
        </Link>
        <Link className="link" to="/m">
          Mobiles
        </Link>
        <Link className="link" to="/">
          Customer Services
        </Link>
        <Link className="link" to="/">
          Today's Deal
        </Link>
        <Link className="link" to="/">
          Books
        </Link>
        <Link className="link" to="/electronics">
          Electronics
        </Link>
        <Link className="link" to="/">
          Fashion
        </Link>
        <Link className="link" to="/">
          Prime
        </Link>
        <Link className="link" to="/">
          New Releases
        </Link>
        <Link className="link" to="/">
          Home & Kitchen
        </Link>
        <Link className="link" to="/">
          Amazon Pay
        </Link>
        <Link className="link" to="/">
          Computer
        </Link>
        {/* <Link className='link' to='/'>Coupons</Link> */}
        <Link className="link" to="/">
          Car and Motorbike
        </Link>
      </div>
      {/* <div className="header_right">
            <p>logo <span>Shopping made easy | Download the app</span></p>
        </div> */}
    </div>
  );
};

export default Header;
