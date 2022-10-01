import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className="footer_top">
            <a href='#scroll'>Back to top</a>
        </div>
        <div className="footer_down">
            <div className="box1">
                <h3>Get to Know Us</h3>
                <div className="box1_link">
                    <Link to="/about" className='link'>About us</Link>
                </div>
                <div className="box1_link">
                <Link to="/careers" className='link'>Careers</Link>
                </div>
                <div className="box1_link">
                <Link to="/press" className='link'>Press Release</Link>
                </div>
                <div className="box1_link">
                <Link to="/care" className='link'>Amazon Cares</Link>
                </div>
                <div className="box1_link">
                <Link to="/smile" className='link'>Gift a Smile</Link>
                </div>
                <div className="box1_link">
                <Link to="/science" className='link'>Amazon Science</Link>
                </div>
            </div>
            <div className="box2">
                <h3>Connet with Us</h3>
                <div className="box1_link">
                <Link to="/facebook" className='link'>Facebook</Link>
                </div>
                <div className="box1_link">
                <Link to="/twitter" className='link'>Twitter</Link>
                </div>
                <div className="box1_link">
                <Link to="/instagram" className='link'>Instagram</Link>
                </div>
            </div>
            <div className="box3">
                <h3>Make Money with Us</h3>
                <div className="box1_link">
                <Link to="/sell" className='link'>Sell on Amazon</Link>
                </div>
                <div className="box1_link">
                <Link to="/acelarator" className='link'>Sell under Amazon Accelerator</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Amazon Global Selling</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Become an Affiliate</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Fulfilment by Amazon</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Advertise Your Products</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Amazon Pay on Merchants</Link>
                </div>
                
            </div>
            <div className="box4">
                <h3>Let Us Help You</h3>
                <div className="box1_link">
                <Link to="" className='link'>COVID-19 and Amazon</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Your Account</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Returns Centre</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>100% Purchase Protection</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Amazon App Download</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Amazon Assistant Download</Link>
                </div>
                <div className="box1_link">
                <Link to="" className='link'>Help</Link>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Footer