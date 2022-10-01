import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import img1 from "../image/slide1.jpg";
import img2 from "../image/slide2.jpg";
import img3 from "../image/slide3.jpg";
import img4 from "../image/slide4.jpg";
import img5 from "../image/slide5.jpg";
import img6 from "../image/slide6.jpg";
import img7 from "../image/slide7.jpg";
import img8 from "../image/slide8.jpg";
import img9 from "../image/slide9.jpg";
// import flight from "../image/flight.jpg";
// import bus from "../image/bus.jpg";
// import train from "../image/train.jpg";
// import travel from "../image/travel.jpg";
// import festival from "../image/festival.jpg";
// import prebooking from "../image/prebooking.jpg";
// import laptop from "../image/laptop.jpg";
// import fresh from "../image/fresh.jpg";
// import mobile from "../image/mobile.jpg";
// import fashion from "../image/fashion.jpg";
// import electronic from "../image/electronic.jpg";
// import tv from "../image/tv.jpg";
// import application from "../image/application.jpg";
// import furniture from "../image/furniture.jpg";
// import kitchen from "../image/kitchen.jpg";
import { Link } from "react-router-dom";
import Furniture from "../Furniture/Furniture";
// import Furniture from "../Furniture/Furniture";
import FurnitureData from '../Data/FurnitureData';
import TopDeal from "../TopDeal/TopDeal";
import MobileData from "../Data/MobileData";
import BlockbusterData from "../Data/BlockbusterData";
import KitchenData from "../Data/KitchenData";
import DecorationData from "../Data/DecorationData";
import Card from "../Card/Card";
import HomeKitchenData from "../Data/HomeKitchenData";
import TopData from "../Data/TopData";
import TravelData from "../Data/TravelData";


const Home = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [currentSlide, setCurrentSlide] = useState(0);

  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });

  let width = window.screen.width;

  // console.log(HomeKitchenData[1][0].image);

  return (
    <>
      <div className="imgWrapper">
        {/* <img className='imageActive' src={img1} alt="" /> */}
        {images.map((img, index) => {
          return (
            <Link to={`/${index}`}>
              <img
                src={img}
                className={
                  index === currentSlide ? "imageActive homeImage" : "image"
                }
                alt=""
              />
            </Link>
          );
        })}
        <div className="overlay"></div>
        <div className="card">
        {
          TopData.map((val,ind)=>{
            return (
                <Card title={val.p} images={val.images} offer={val.offer} />
            )
          })
        }
      </div>

      <div className="travel">
        {
          TravelData.map((val,ind)=>{
            return (
                <Card title={val.p} images={val.images} offer={val.offer} />
            )
          })
        }
      </div>
        {/* <div className="card">
          <div className="travel">
            <h1>Amazon Pay | Book your travel tickets</h1>
            <div className="travel_img">
              <Link to="/flight" className="link">
                <div className="flight img_div">
                  <img src={flight} className="flight_img" alt="" />
                  <p>Flight tickets</p>
                </div>
              </Link>
              <Link to="/bus" className="link">
                <div className="bus img_div">
                  <img src={bus} className="flight_img" alt="" />
                  <p>Bus tickets</p>
                </div>
              </Link>
              <Link to="/train" className="link">
                <div className="train img_div">
                  <img src={train} className="flight_img" alt="" />
                  <p>Train tickets</p>
                </div>
              </Link>
              <Link to="/travel" className="link">
                <div className="tour img_div">
                  <img src={travel} className="flight_img" alt="" />
                  <p>Essential travel products</p>
                </div>
              </Link>
            </div>
            <Link to="/amazon_pay" className="btn btn-primary">
              Explore more from Amazon Pay
            </Link>
          </div>

          <div className="amazonseliya">
            <h1>#AmazonSeLiya</h1>
            <div className="fest_img">
              <img src={festival} alt="" />
            </div>
            <Link to="/festival" className="btn btn-primary">
              See all upcoming offers
            </Link>
          </div>
          <div className="pre_booking">
            <h1>Pre-book offers starting ₹1</h1>
            <div className="fest_img">
              <img src={prebooking} alt="" />
            </div>
            <Link to="/prebooking" className="btn btn-primary">
              See all upcoming offers
            </Link>
          </div>

          <div className="sign_in">
            <div className="sign_in1">
              <h1>Sign in for the best experience</h1>
              <Link to="/login" className="btn btn-primary sign">
                Sign in securely
              </Link>
            </div>
            <div className="sign_in2">
              <Link to="/brand">
                <img src={laptop} className="img" alt="" />
              </Link>
            </div>
          </div>

          <div className="travel">
            <h1>Shop by Category</h1>
            <div className="travel_img">
              <Link to="/fres" className="link">
                <div className="flight img_div">
                  <img src={fresh} className="flight_img" alt="" />
                  <p>Fresh</p>
                </div>
              </Link>
              <Link to="/mobile" className="link">
                <div className="bus img_div">
                  <img src={mobile} className="flight_img" alt="" />
                  <p>Mobiles</p>
                </div>
              </Link>
              <Link to="/fashion" className="link">
                <div className="train img_div">
                  <img src={fashion} className="flight_img" alt="" />
                  <p>Fashions</p>
                </div>
              </Link>
              <Link to="/electronics" className="link">
                <div className="tour img_div">
                  <img src={electronic} className="flight_img" alt="" />
                  <p>Electronics</p>
                </div>
              </Link>
            </div>
            <Link to="/more" className="btn btn-primary">
              See more
            </Link>
          </div>

          <div className="travel">
            <h1>Upgrade your home | Amazon Brands & more</h1>
            <div className="travel_img">
              <Link to="/tv" className="link">
                <div className="flight img_div">
                  <img src={tv} className="flight_img" alt="" />
                  <p>Smart LED TVS</p>
                </div>
              </Link>
              <Link to="/application" className="link">
                <div className="bus img_div">
                  <img src={application} className="flight_img" alt="" />
                  <p>Applications</p>
                </div>
              </Link>
              <Link to="/furniture" className="link">
                <div className="train img_div">
                  <img src={furniture} className="flight_img" alt="" />
                  <p>Furnitures</p>
                </div>
              </Link>
              <Link to="/kitchen" className="link">
                <div className="tour img_div">
                  <img src={kitchen} className="flight_img" alt="" />
                  <p>Kitchen Products</p>
                </div>
              </Link>
            </div>
            <Link to="/shopnow" className="btn btn-primary">
              Shop Now
            </Link>
          </div>

          <div className="travel">
            <h1>Amazon Pay | Book your travel tickets</h1>
            <div className="travel_img">
              <Link to="/flight" className="link">
                <div className="flight img_div">
                  <img src={flight} className="flight_img" alt="" />
                  <p>Flight tickets</p>
                </div>
              </Link>
              <Link to="/bus" className="link">
                <div className="bus img_div">
                  <img src={bus} className="flight_img" alt="" />
                  <p>Bus tickets</p>
                </div>
              </Link>
              <Link to="/train" className="link">
                <div className="train img_div">
                  <img src={train} className="flight_img" alt="" />
                  <p>Train tickets</p>
                </div>
              </Link>
              <Link to="/travel" className="link">
                <div className="tour img_div">
                  <img src={travel} className="flight_img" alt="" />
                  <p>Essential travel products</p>
                </div>
              </Link>
            </div>
            <Link to="/amazon_pay" className="btn btn-primary">
              Explore more from Amazon Pay
            </Link>
          </div>
          <div className="travel">
            <h1>Amazon Pay | Book your travel tickets</h1>
            <div className="travel_img">
              <Link to="/flight" className="link">
                <div className="flight img_div">
                  <img src={flight} className="flight_img" alt="" />
                  <p>Flight tickets</p>
                </div>
              </Link>
              <Link to="/bus" className="link">
                <div className="bus img_div">
                  <img src={bus} className="flight_img" alt="" />
                  <p>Bus tickets</p>
                </div>
              </Link>
              <Link to="/train" className="link">
                <div className="train img_div">
                  <img src={train} className="flight_img" alt="" />
                  <p>Train tickets</p>
                </div>
              </Link>
              <Link to="/travel" className="link">
                <div className="tour img_div">
                  <img src={travel} className="flight_img" alt="" />
                  <p>Essential travel products</p>
                </div>
              </Link>
            </div>
            <Link to="/amazon_pay" className="btn btn-primary">
              Explore more from Amazon Pay
            </Link>
          </div>

          {width < 400 ? (
            <div className="disp travel">
              <h1>Amazon Pay | Book your travel tickets</h1>
              <div className="travel_img">
                <Link to="/flight" className="link">
                  <div className="flight img_div">
                    <img src={flight} className="flight_img" alt="" />
                    <p>Flight tickets</p>
                  </div>
                </Link>
                <Link to="/bus" className="link">
                  <div className="bus img_div">
                    <img src={bus} className="flight_img" alt="" />
                    <p>Bus tickets</p>
                  </div>
                </Link>
                <Link to="/train" className="link">
                  <div className="train img_div">
                    <img src={train} className="flight_img" alt="" />
                    <p>Train tickets</p>
                  </div>
                </Link>
                <Link to="/travel" className="link">
                  <div className="tour img_div">
                    <img src={travel} className="flight_img" alt="" />
                    <p>Essential travel products</p>
                  </div>
                </Link>
              </div>
              <Link to="/amazon_pay" className="btn btn-primary">
                Explore more from Amazon Pay
              </Link>
            </div>
          ) : (
            <div className="none"></div>
          )}
        </div>
      </div> */}


      <div className="furniture">
          <Furniture FurnitureData={FurnitureData} p="Up to 45% off | Handpicked furniture collection from local shops" />
      </div>


      <div className="mobile">
          <TopDeal MobileData={MobileData} p="Top deals with exchange offers" />
      </div>


      <div className="blockbuster">
          <TopDeal MobileData={BlockbusterData} p="Blockbuster deals" />
      </div>


      <div className="decoration">
          <Furniture FurnitureData={DecorationData} p="Prime Early Deals | Home décor picks from local shops" />
      </div>


      <div className="card1">
        {
          HomeKitchenData.map((val,ind)=>{
            return (
                <Card title={val.p} images={val.images} offer={val.offer} />
            )
          })
        }
      </div>


      <div className="kitchen">
          <Furniture FurnitureData={KitchenData} p="Prime Early Deals | Up to 50% off | Kitchen appliances, cookware & more" />
      </div>
      
    </div> 
    </>
  );
};

export default Home;
