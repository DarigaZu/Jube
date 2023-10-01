import React, { useEffect, useState } from "react";
import './ProductCard.scss'
import axios from 'axios'
import img1 from '../img/breadcrumb-2[1].jpg' 
import { IoSearchOutline } from 'react-icons/io5'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoCartOutline } from 'react-icons/io5'
import { ImEye } from 'react-icons/im'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { CgArrowLongLeft } from 'react-icons/cg'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from "react-router-dom";
function Shop() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    

    useEffect(() => {
        async function getJewelry(){
        const res = await axios.get('https://650ecfba54d18aabfe997c09.mockapi.io/products2')
        setProducts(res.data)
        }
        getJewelry()
    }, [])


    return (

        <div className="shop">


          <div className="shop-grid-img">
                <img src={img1} />
                <div className="shop-grid-text">
                    <h3>Shop Grid</h3>
                    <div>
                        <a href="http://localhost:5173">Home</a>
                        <span>/</span>
                        <p>Shop Grid</p>
                        </div>
                </div>
            </div>


            <div className="product-filter container">
                <div>
                <p>Showing 10 of 120 Products</p>
                </div>

                <div className="filters">
                 <div className="input-search">
                    <input className="" type="search" placeholder="Search" onChange={(event) => setSearch(event.target.value)}/>
                    <button><IoSearchOutline className="search" /></button>
                    </div>

          <select
            onChange={(event) => {
                const sort = event.target.value;
      
                if (sort === 'highToLow') {
                  setProducts([...products].sort((a, b) => b.price - a.price));
                } else if (sort === 'lowToHigh') {
                  setProducts([...products].sort((a, b) => a.price - b.price));
                }
              }}
          >
                    <option >Sort By Most Popular</option>
                    <option  value="highToLow">Sort By High To Low</option>
                    <option value="lowToHigh">Sort By Low To High</option>
                </select> 
         


    
                
                </div>
            </div>


        
              
                <div className="products-card">
                    {products.filter(obj => obj.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
                        <div className="products-card-div" key={product.id}>
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

                                <div className="rating">
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiOutlineStar className="star"/>
                                    <AiOutlineStar className="star"/>
                                    </div>
                                <p>${product.price}</p>
                            </div>

                        </div>
                    ))}

                </div>

         <div className="transition">
            <a href="" className="a"><CgArrowLongLeft/></a>
            <a href="" className="a-1">1</a>
            <a href="" className="a">2</a>
            <a href="" className="a">3</a>
            <a href="" className="a"><CgArrowLongRight/></a>
            
         </div>




        </div>
    )
}

export default Shop;