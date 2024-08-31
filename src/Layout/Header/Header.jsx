import React from "react";
import './Header.scss'
import logo from '../../img/logo.png';
import UK from '../../img/uk.png';
import china from '../../img/china.png';
import UAE from '../../img/uae.png';
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from "react-router-dom";
import { FaPhoneAlt } from 'react-icons/fa'
import { RiTruckFill } from 'react-icons/ri'
import { RiEarthFill } from 'react-icons/ri'
import { BiChevronDown } from 'react-icons/bi'
import { IoSearchOutline } from 'react-icons/io5'
import { MdMenu } from 'react-icons/md'
import OffCanvas from "./OffCanvas";

function Header() {
    const [dropDownHome, setDropDownHome] = React.useState(false)
    const [dropDownShop, setDropDownShop] = React.useState(false)
    const [dropDownPages, setDropDownPages] = React.useState(false)
    const [dropDownBlog, setDropDownBlog] = React.useState(false)
    const [dropDownShopLayout, setDropDownShopLayout] = React.useState(false)
    const [dropDownUserPages, setDropDownUserPages] = React.useState(false)
    const [dropDownBlogLayout, setDropDownBlogLayout] = React.useState(false)
    const [dropDownSingleBlog, setDropDownSingleBlog] = React.useState(false)
    const [show, setShow] = React.useState(false);
    const [show2, setShow2] = React.useState(false);


    React.useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 100 && window.innerWidth > 1200) {
                setShow2(1)
            } else {
                setShow2(0)
            }
        }

        )
    }, [])


    const Click = () => {
        setShow(!show);
    };
    const [bool, setBool] = React.useState(false)
    return (
        <>
            <OffCanvas open={bool} onclose={() => setBool(0)} />
            <div className="header">
                <div className="container">
                    <div className={`header1 ${show2 ? "shov" : ""}`}>
                        <div className="header1-contacts">
                            <div className="contacts">
                                <FaPhoneAlt className="icon" />
                                <p>+888-222-2288</p>
                            </div>
                            <div className="contacts">
                                <RiTruckFill className="icon" />
                                <p>Track Order</p>
                            </div>
                        </div>


                        <div className="header1-menu1">

                            <div className="header1-menu1-input-div">
                                <input className="header1-menu1-input" type="search" placeholder="Search For Jewelry" />
                                <button><IoSearchOutline className="search" /></button>
                            </div>
                            <div>
                                <p className="header-text">Log In</p>
                            </div>
                            <div>
                                <Link to="/signup" className="link"><p className="header-text">Sign Up </p></Link>
                            </div>
                            <div>
                                <p className="header-text">Help</p>
                            </div>
                            <div className="header1-menu1-iat">
                                <RiEarthFill className="icon menu1-icon" />
                                <button className="" onClick={Click}>Eng<BiChevronDown className="menu1-icon2 arrow" /></button>
                            </div>
                            {show &&
                                <div className="languages">
                                    <div>
                                        <img src={UK} style={{ width: "20px" }} />
                                        <p>Eng</p>
                                    </div>
                                    <div>
                                        <img src={china} style={{ width: "20px" }} />
                                        <p>简体中文</p>
                                    </div>
                                    <div>
                                        <img src={UAE} style={{ width: "20px" }} />
                                        <p>العربيّة</p>
                                    </div>
                                </div>
                            }
                        </div>


                    </div>


                    <div className="header2">

                        <div className="header2-logo">
                            <a href="https://templates.envytheme.com/jube/default/index.html"><img src={logo} className="img1" /></a>
                        </div>

                        <div className="header2-menu2">

                            <div className="menu hide" onMouseEnter={() => setDropDownHome(true)} onMouseLeave={() => setDropDownHome(false)}>
                                <button>
                                    <span className="header-text">Home<BiChevronDown className="arrow" /> </span>
                                </button>
                                {dropDownHome &&
                                    <div className="dropdown-menu"> 
                                        <p>Home One</p>
                                        <p>Home Two</p>
                                        <Link to="/" className="link header-text"><p>Home Three</p></Link>
                                    </div>
                                }
                            </div>

                            <p>
                                <Link to="/about" className="link header-text hide">About Us</Link>
                            </p>
                            <div className="menu hide" onMouseEnter={() => setDropDownShop(true)} onMouseLeave={() => setDropDownShop(false)}>
                                <button ><span className="header-text">Shop<BiChevronDown className="arrow" /></span></button>

                                {dropDownShop &&
                                    <div className="dropdown-menu">
                                        <div className="menu" onMouseEnter={() => setDropDownShopLayout(true)} onMouseLeave={() => setDropDownShopLayout(false)}>
                                            <button><p>Shop Layout<BiChevronDown /></p></button>
                                            {dropDownShopLayout &&
                                                <div className="dropdown-left">
                                                    <p>Shop Left Sidebar</p>
                                                    <p>Shop Right Sidebar</p>
                                                    <p>Shop 3 Column</p>
                                                <Link to="/shop" className="link header-text"><p>Shop 4 column</p></Link>
                                                </div>
                                            }
                                        </div>
                                        <p>Shop Details</p>
                                        <p>Whishlist</p>
                                        <p>Cart</p>
                                        <p>Checkout</p>
                                        <p>Track Order</p>
                                        <div className="menu" onMouseEnter={() => setDropDownUserPages(true)} onMouseLeave={() => setDropDownUserPages(false)}>
                                            <button><p>User Pages<BiChevronDown /></p></button>
                                            {dropDownUserPages &&
                                                <div className="dropdown-left">
                                                    <p>Register</p>
                                                    <p>Login</p>
                                                    <p>My account</p>
                                                    <p>Recover Password</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="menu hide" onMouseEnter={() => setDropDownPages(true)} onMouseLeave={() => setDropDownPages(false)}>
                                <button className=""><p className="header-text">Pages<BiChevronDown className="arrow" /></p></button>

                                {dropDownPages &&
                                    <div className="dropdown-menu">
                                        <p>FAQ</p>
                                        <p>Testimonials</p>
                                        <p>Terms of Service</p>
                                        <p>Privacy Policy</p>
                                        <p>404 Error Page</p>
                                    </div>
                                }
                            </div>
                            <div className="menu hide" onMouseEnter={() => setDropDownBlog(true)} onMouseLeave={() => setDropDownBlog(false)}>
                                <button className=""><p className="header-text">Blog<BiChevronDown className="arrow" /></p></button>

                                {dropDownBlog &&
                                    <div className="dropdown-menu">
                                        <div className="menu" onMouseEnter={() => setDropDownBlogLayout(true)} onMouseLeave={() => setDropDownBlogLayout(false)}>
                                            <button><p>Blog Layout<BiChevronDown /></p></button>
                                            {dropDownBlogLayout &&
                                                <div className="dropdown-left">
                                                    <p>Blog Grid</p>
                                                    <p>Blog Left Sidebar</p>
                                                    <p>Blog Right Sidebar</p>
                                                </div>
                                            }
                                        </div>
                                        <div className="menu" onMouseEnter={() => setDropDownSingleBlog(true)} onMouseLeave={() => setDropDownSingleBlog(false)}>
                                            <button><p>Single Blog<BiChevronDown /></p></button>
                                            {dropDownSingleBlog &&
                                                <div className="dropdown-left">
                                                    <p>Blog Details No Sidebar</p>
                                                    <p>Blog Details Left Sidebar</p>
                                                    <p>Blog Details Right Sidebar</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                            <p className="header-text hide">Contact Us</p>
                            <FaCartShopping className="cart" />
                            <MdMenu onClick={() => setBool(!bool)} className="burgerMenu" />
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Header;