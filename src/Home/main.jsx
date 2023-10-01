import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './main.scss'
import { CgArrowLongRight } from 'react-icons/cg'
import { PiAirplaneTilt } from 'react-icons/pi'
import { BiSupport } from 'react-icons/bi'
import { CiDollar } from 'react-icons/ci'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoCartOutline } from 'react-icons/io5'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { ImEye } from 'react-icons/im'
import img1 from '../img/hero-img-1.jpg'
import img2 from '../img/hero-img-2[1].jpg'
import img3 from '../img/cat-11[1].jpg'
import img4 from '../img/cat-12[1].jpg'
import img5 from '../img/cat-13[1].jpg'
import img6 from '../img/cat-1[1].png'
import img7 from '../img/cat-2[1].png'
import img8 from '../img/cat-3[1].png'
import img9 from '../img/cat-9[1].png'
import img10 from '../img/cat-10[1].png'
import img11 from '../img/img-3[1].jpg'



function Home() {

    const [products, setProducts] = useState([])
    const [products2, setProducts2] = useState([])
    const [products3, setProducts3] = useState([])


    useEffect(() => {
        fetch('https://650ecfba54d18aabfe997c09.mockapi.io/products2')
            .then((response) => response.json())
            .then((json) => setProducts(json));
    }, [])

    useEffect(() => {
        fetch('https://650ecfba54d18aabfe997c09.mockapi.io/products')
            .then((response) => response.json())
            .then((json) => setProducts2(json));
    }, [])

    useEffect(() => {
        fetch('https://650ed1ac54d18aabfe997e61.mockapi.io/products3')
            .then((response) => response.json())
            .then((json) => setProducts3(json));
    }, [])


    return (
        <div className="home">

            <div className="section">
                <div className="section-text">
                    <div>
                        <span>Summer Collection</span>
                        <h2>A Diamond For Your <br></br> Preciousness</h2>
                        <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Facilis repudi <br></br> andae rem quasi suscipit maiores quaerat amet.</p>
                        <button>Discover Shop  <CgArrowLongRight className="arrow" /></button>
                    </div>
                </div>
                <div className="section-img">
                    <div className="img-div">
                        <div></div>
                        <img src={img1} />
                    </div>
                    <div className="img-div">
                        <div></div>
                        <img src={img2} />
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


            <div className="container menu-img">
                <div className="menu-product">
                    <img src={img3} />
                    <h4><a href="">New Arrival</a></h4>
                    <p><a href="">Shop Now <CgArrowLongRight className="menu-arrow" /></a></p>

                </div>
                <div className="menu-product">
                    <img src={img4} />
                    <h4> <a href="">Best Seller</a></h4>
                    <p><a href="">Shop Now <CgArrowLongRight className="menu-arrow" /></a></p>
                </div>
                <div className="menu-product">
                    <img src={img5} />
                    <h4><a href="">Pendants & Necklace</a></h4>
                    <p><a href="">Shop Now <CgArrowLongRight className="menu-arrow" /></a></p>
                </div>
            </div>



            <div className="category">
                <h2>Top Categories</h2>
                <div className="category-menu">
                    <div className="category-div">

                        <div className="category-img">
                            <img src={img6} />
                        </div>
                        <h3><a href="http://localhost:5173/shop">Necklaces</a></h3>

                    </div>
                    <div className="category-div">

                        <div className="category-img">
                            <img src={img7} />
                        </div>
                        <h3><a href="http://localhost:5173/shop">Earrings</a></h3>
                    </div>
                    <div className="category-div">

                        <div className="category-img">
                            <img src={img8} />
                        </div>
                        <h3><a href="http://localhost:5173/shop">Couple Set</a></h3>
                    </div>
                    <div className="category-div">

                        <div className="category-img">
                            <img src={img9} />
                        </div>
                        <h3><a href="http://localhost:5173/shop">Antique</a></h3>

                    </div>
                    <div className="category-div">

                        <div className="category-img">
                            <img src={img10} />
                        </div>
                        <h3><a href="http://localhost:5173/shop">Weeding Ring</a></h3>

                    </div>
                </div>
            </div>



            <div className="products">
                <h2>Featured Products</h2>

                <div className="products-card">
                    {products.map((product) => (

                        <div key={product.id} className="products-card-div">
                            <div className="product-img">
                                {product.id === '1' && <span className="span1">New</span>}
                                {product.id === '3' && <span className="span2">30% off</span>}
                                {product.id === '6' && <span className="span3">Sold</span>}
                                <img src={product.img} />
                                <div className="product-img-icons">
                                    <div>
                                        <AiOutlineHeart className="icon" />
                                    </div>
                                    <div className="icon">
                                        <IoCartOutline />
                                    </div>
                                    <div className="icon">
                                        <ImEye />
                                    </div>
                                </div>
                            </div>
                            <div className="product-text">
                            <h3><Link to={`/product/${product.id}`} className="h3">{product.name}</Link></h3>
                                <p>${product.price}</p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>



            <div className="section-2 container">
                <div className="section-2-img">
                    <div>
                        <img src={img11} />
                    </div>
                </div>

                <div className="section-2-text">
                    <span>New Arrival Available</span>
                    <h3>Top Rated Collection</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quis, fuga harum quod eaque accusantium explicabo nam amet sapiente esse rem debitis officia similique, perspiciatis doloribus beatae repellat, molestias.</p>
                    <button>Shop Now <CgArrowLongRight className="arrow" /></button>
                </div>

            </div>


            <div className="products-2">
                <h1>Best Selling Products</h1>

                <div className="products2-card">
                    {products2.map((product2) => (
                        <div className="products2-card-div">
                            <div className="product2-img">
                                {product2.id === '1' && <span className="span1">New</span>}
                                {product2.id === '3' && <span className="span2">30% off</span>}
                                <img src={product2.img} />
                                <div className="product2-img-icons">
                                    <div>
                                        <AiOutlineHeart className="icon" />
                                    </div>
                                    <div className="icon">
                                        <IoCartOutline />
                                    </div>
                                    <div className="icon">
                                        <ImEye />
                                    </div>
                                </div>
                            </div>
                            <div className="product2-text">
                                <h3>{product2.name}</h3>
                                <p>{product2.price}</p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>



            <div className="products-3">
                <h1>Hot Deals</h1>

                <div className="products3-card">
                        {products3.map((product3) => (
                            <div className="products3-card-div">
                                <div className="product3-img">
                                    {product3.id === '2' && <span className="span1">New</span>}
                                    {product3.id === '4' && <span className="span2">30%</span>}
                                    <img src={product3.img} />
                                    
                                </div>
                                <div className="product3-text">
                                    <h3>{product3.name}</h3>
                                        
                                    <div className="rating">
                                        <AiFillStar className="star"/>
                                        <AiFillStar className="star"/>
                                        <AiFillStar className="star"/>
                                        <AiOutlineStar className="star"/>
                                        <AiOutlineStar className="star"/>
                                        </div>
                                    <div className="price">
                                        <p className="price1">{product3.price}</p>
                                        <p className="price2">{product3.price2}</p>
                                    </div>

                                    <div className="data">
                                        <div>
                                            <div className="data-back">0
                                            </div>
                                            <p>Days</p>
                                        </div>
                                        <div>
                                            <div  className="data-back">0
                                            </div>
                                            <p>Hours</p>
                                        </div>
                                        <div>
                                            <div  className="data-back">00
                                            </div>
                                            <p>mins</p>
                                        </div>
                                        <div>
                                            <div  className="data-back">00
                                            </div>
                                            <p>secs</p>
                                        </div>
                                    

                                    </div>

                                </div>
                            </div>
                        ))}

                </div>
            </div>

        </div>


    )
}
export default Home;