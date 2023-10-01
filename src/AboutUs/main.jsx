import React from "react";
import './main.scss'
import img1 from '../img/breadcrumb-3[1].jpg'
import img2 from '../img/img-1[1].jpg'
import img3 from '../img/img-2[1].jpg'
import { PiAirplaneTilt } from 'react-icons/pi'
import { BiSupport } from 'react-icons/bi'
import { CiDollar } from 'react-icons/ci'
import { AiOutlineFieldTime } from 'react-icons/ai'

function AboutUs() {
    return (
        <div className="about-us">

            <div className="about-logo">
                <img src={img1} />
                <div className="about-text">
                    <h3>About Us</h3>
                    <div>
                        <a href="http://localhost:5173/">Home</a>
                        <span>/</span>
                        <p>About Us</p>
                    </div>
                </div>
            </div>



            <div className="container menu">
                <div className="menu-div">
                    <div className="menu-icon">
                        <PiAirplaneTilt />
                    </div>
                    <div>
                        <h3>Free Shipping</h3>
                        <p>Lorem ipsum dolor sit amet conse tetur adipisicing elit sed do tepor.</p>
                    </div>
                </div>

                <div className="menu-div">
                    <div className="menu-icon">
                        <BiSupport />
                    </div>
                    <div>
                        <h3>Support 24/7</h3>
                        <p>Lorem ipsum dolor sit amet conse tetur adipisicing elit sed do tepor.</p>
                    </div>
                </div>

                <div className="menu-div">
                    <div className="menu-icon">
                        <CiDollar />
                    </div>
                    <div>
                        <h3>Big Cashback</h3>
                        <p>Lorem ipsum dolor sit amet conse tetur adipisicing elit sed do tepor.</p>
                    </div>
                </div>

                <div className="menu-div">
                    <div className="menu-icon">
                        <AiOutlineFieldTime />
                    </div>
                    <div>
                        <h3>Quick Payment</h3>
                        <p>Lorem ipsum dolor sit amet conse tetur adipisicing elit sed do tepor.</p>
                    </div>
                </div>
            </div>

            <div className="section container">
                <div className="section-img">
                    <img src={img2} />
                </div>

                <div className="section-text">
                    <span>ABOUT US</span>
                    <h3>Jwellery For You</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quis, fuga harum quod eaque accusantium explicabo nam amet sapiente esse rem debitis officia similique, perspiciatis doloribus beatae repellat, molestias velit amet sit accusantium explicabo nam amet.</p>

                    <p>Perspiciatis doloribus beatae repellat, molestias velit amet sitLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quis, fuga harum quod eaque accusantium explicabo nam amet sapiente esse rem debitis officia similique sit amet.</p>
                </div>
            </div>

{/* 

            <div className="carousel">
                <div className="carousel-header">
                    <span>TESTIMONIALS</span>
                    <h2>What Our Client Says</h2>
                </div>
            </div> */}


            <div className="section-2 container">
          <div className="section2-text">
            <h2>Handcrafted & Ethically Sourced</h2>
            <p>Perspiciatis doloribus beatae repellat, molestias velit amet sitLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quis, fuga harum quod eaque accusantium explicabo nam amet sapiente esse rem debitis officia similique sit amet.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quis, fuga harum quod eaque accusantium explicabo nam amet sapiente esse rem debitis officia similique, perspiciatis doloribus beatae repellat, molestias velit amet sit accusantium explicabo nam amet.</p>
          </div>
          <div>
            <img src={img3}/>
          </div>
            </div>

        </div>
    )
}
export default AboutUs;