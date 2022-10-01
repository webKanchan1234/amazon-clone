import React from 'react'
import "./topdeal.css";
import { Link } from 'react-router-dom'

const TopDeal = ({ MobileData, p }) => {
  return (
    <div>
      <div className="todeal_left">
        <p>{p}</p>
        <Link to="/sale" className="link">
          See all offers
        </Link>
      </div>
      <div className="topdeal_right">
      {
        MobileData.map((item,id) => {
            return (
                <Link to={`topdeal/${id}`} className="link">
                        <img src={item.image} alt={item.name} />
                        <span className='span1'>{item.offer} </span><span className='span2'> Prime Early Deal </span>
                    </Link>
            )
        })
      }
      {/* <img src={img2} alt="" /> */}
        
      </div>
    </div>
  )
}

export default TopDeal