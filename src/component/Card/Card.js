import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({title, images,offer }) => {
    // console.log(images[0]);
  return (
    <div className="card_box">
      <p>{title} </p>
      <div className="card_img">
        {
            images.map((item,index)=>{
                return(
                    <Link to="/flight" className="link">
                    <div className={images.length===1 ? "imgsingle_box" : "img_box"}>
                        <img
                        src={item.image}
                        className="flight_img"
                        alt=""
                        />
                        <span>{item.desc}</span>
                    </div>
                    </Link>
                )
            })
        }
        
      </div>
      <Link to="/amazon_pay" className="btn btn-primary">
        {offer}
      </Link>
    </div>
  );
};

export default Card;
