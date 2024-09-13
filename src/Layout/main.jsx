import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header/Header'
import Footer from "./Footer/Footer";
import AboutUs from "../AboutUs/main";
import Home from "../Home/main";
import Signup from "../SignUp/main";
import Shop from "../Shop/ProductCard";
import ProductDetails from "../Shop/ProductDetails";


function Layout(){
    return(
        <div className="">
            <Header/>
            <Routes>
                <Route path='/Jube' element={<Home/>}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='product/:id' element={<ProductDetails />} />

            </Routes>
            <Footer/>
        </div>
    )
}

export default Layout;