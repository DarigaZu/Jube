import React from "react";
import './Footer.scss'
import { MdPhoneInTalk } from 'react-icons/md'
import { FaFax } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { MdLocationOn } from 'react-icons/md'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { TfiLinkedin } from 'react-icons/tfi'
import { BiLogoPinterest } from 'react-icons/bi'
import { PiCopyright } from 'react-icons/pi'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-menu">

                <div>
                    <div>

                    </div>
                    <h3>Follow Us</h3>
                    <div className="icon-text">
                        <MdPhoneInTalk className="icon" />
                        <p>+1-3454-5678-77</p>
                    </div>
                    <div className="icon-text margin">
                        <FaFax className="icon" />
                        <p>+880-454-678-23</p>
                    </div>
                    <div className="icon-text">
                        <TfiEmail className="icon" />
                        <p>info@jube.com</p>
                    </div>
                    <div className="icon-text margin">
                        <MdLocationOn className="icon" />
                        <p>1201 Broadway Street, Florida</p>
                    </div>
                    <div className="icon-text">
                        <div className="icon-logo">
                            <a href="https://www.facebook.com/"><BiLogoFacebook /></a>
                        </div>
                        <div className="icon-logo">
                            <a href="https://twitter.com/"><AiOutlineTwitter /></a>
                        </div>
                        <div className="icon-logo">
                            <a href="https://www.linkedin.com/?original_referer=https%3A%2F%2Ftemplates.envytheme.com%2F"><TfiLinkedin /></a>
                        </div>
                        <div className="icon-logo">
                            <a href="https://www.pinterest.com/"><BiLogoPinterest /></a>
                        </div>
                    </div>
                </div>
                <div className="menu-2">
                    <h3>Information</h3>
                    <p><a href="">Refund Policy</a></p>
                    <p className="margin"><a href="">FAQ</a></p>
                    <p><a href="">Track Order</a></p>
                    <p className="margin"><a href="">My Account</a></p>
                    <p><a href="">Privacy Policy</a></p>
                    <p className="m-t"><a href="">Terms Of Service</a></p>
                </div>
                <div className="menu-3">
                    <h3>About Us</h3>
                    <p><a href="">About Us</a></p>
                    <p className="margin"><a href="">Our Shop</a></p>
                    <p><a href="">Collection</a></p>
                    <p className="margin"><a href="">Latest Newst</a></p>
                    <p><a href="">Contact Us</a></p>
                </div>
                <div className="menu-4">
                    <h3>Category</h3>
                    <p><a href="">Gold Jwellery</a></p>
                    <p className="margin"><a href="">Wedding Ring</a></p>
                    <p><a href="">Neckless</a></p>
                    <p className="margin"><a href="">New Trends</a></p>
                    <p><a href="">Bracelets</a></p>
                </div>
                <div className="menu-5">
                    <h3>Newsletter</h3>
                    <p className="">Signup our newsletter to get ,<br></br> updated information & promotion</p>
                    <input type="email" placeholder="Your Email"></input>
                    <br></br>
                    <button>Subscribe</button>
                </div>

            </div>

            <div className="center">
                <PiCopyright />
                <p><a href="https://envytheme.com/">Jube</a>. All Rights Reserved By <a href="https://envytheme.com/">EnvyTheme</a></p>
            </div>
        </div>
    )
}

export default Footer;