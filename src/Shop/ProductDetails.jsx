import React, { useEffect, useState } from "react";
import './ProductDetails.scss'
import img1 from '../img/breadcrumb-2[1].jpg'
import { useParams } from "react-router-dom";
import { BsStarFill } from 'react-icons/bs'
import { FaCartShopping } from 'react-icons/fa6'
import { AiOutlineHeart } from 'react-icons/ai'

function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
  
    const decrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };

    useEffect(() => {
        fetch(`https://650ecfba54d18aabfe997c09.mockapi.io/products2/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(error => {
                console.error("Ошибка при запросе данных:", error);

            });
    }, [id])
    return (
        <div className="product">

            <div className="detail-logo">
                <img src={img1} />
                <div className="detail-text">
                    <h3>Shop Grid</h3>
                    <div>
                        <a href="http://localhost:5173">Home</a>
                        <span>/</span>
                        <a href="http://localhost:5173/shop">Shop</a>
                        <span>/</span>
                        <p>Shop Details</p>
                    </div>
                </div>
            </div>

            {product && (
                <div className="product-detail">

                    <div className="product-img">
                        <img src={product.img} alt={product.name} />
                    </div>

                    <div className="product-text">

                        <h3 className="title">{product.name}</h3>
                        <p> <span className="span-1">$120</span>  <span className="span-2">$200</span></p>
                        <div className="rating">
                            <BsStarFill className="star"/>
                            <BsStarFill className="star"/>
                            <BsStarFill className="star"/>
                            <BsStarFill className="star"/>
                            <BsStarFill className="star"/>
                        </div>
                        <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse vida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <div className="text">
                            <p>Category :</p>
                            <p>Earrings</p>
                        </div>

                        <div className="text">
                            <p>Product Code :</p>
                            <p>AE-009</p>
                        </div>

                        <div className="text">
                            <p>Availability :</p>
                            <p>In Stock</p>
                        </div>

                        <div className="text">
                            <p>Price in Reward Points :</p>
                            <p>100</p>
                        </div>

                        <div className="property pr1">
                            <h4>Qty:</h4>
                            <div className="property-span">
                                <span onClick={decrement}>-</span>
                                <span className="property-numb">{count}</span>
                                <span  onClick={increment}>+</span>
                            </div>
                        </div>


                        <div className="property">
                            <h4>Size :</h4>

                            <select>
                               
                                <option>s</option>
                                <option>L</option>
                                <option>M</option>
                            </select>
                        </div>

                        <div className="buttons">
                            <button className="card-button">Add to Cart <FaCartShopping/></button>
                            <button className="wish-button">Add to Wishlist <AiOutlineHeart/></button>
                        </div>

                    </div>

                </div>
            )}


     
        </div>

    )
}

export default ProductDetails;