import React from "react";
import { Link } from "react-router-dom";
import "./furniture.css";
// import img2 from "../../assets/images/decoration.jpg"

const Furniture = ({ FurnitureData, p }) => {
  return (
    <div>
      <div className="furniture_left">
        <p>{p}</p>
        <Link to="/sale" className="link">
          See all offers
        </Link>
      </div>
      <div className="furniture_right">
      {
        FurnitureData.map((item,id) => {
            return (
                <Link to={`furniture/${id}`} className="link">
                    <img src={item.image} alt={item.name} />
                </Link>
            )
        })
      }
      {/* <img src={img2} alt="" /> */}
        
      </div>
    </div>
  );
};

export default Furniture;
