import React from "react";
import { IoCloseSharp } from 'react-icons/io5'
import { BiChevronDown } from 'react-icons/bi'

function OffCanvas({open, onclose}) {
    const [show,setShow] = React.useState(false)
    const Click = () => {
        setShow(!show);
    };
    return (
        <div className={`offcanvas ${open && "opened"}`}>
           <IoCloseSharp onClick={onclose} className="close"/>

     
            <button className="home" onClick={Click}>
                <span>Home</span>
                <BiChevronDown className="arrow"/>
            </button>
            {show &&       
                <div className="accordion">
                    <p className="text-1">Home One</p>
                    <p className="text-2">Home Two</p>
                    <p className="text-3">Home Three</p>     
                </div>
}
            
            <button><span>About Us</span></button>

            <button onClick={Click}>
                <span>Shop</span>
                <BiChevronDown className="arrow"/>
            </button>
            {show &&       
                <div className="accordion">
                    <p className="text-1">Shop Layout</p>
                    <p className="text-2">Shop Details</p>
                    <p className="text-3">Wishlist</p>   
                    <p>Cart</p>
                    <p>Checkout</p>  
                    <p>Track Order</p>
                    <p>User Pages</p>
                </div>
}
  

            <button onClick={Click}>
                <span>Pages</span>
                <BiChevronDown className="arrow"/>
            </button>
            {show &&       
                <div className="accordion">
                    <p className="text-1">FAQ</p>
                    <p className="text-2">Testimonials</p>
                    <p className="text-3">Terms of Service</p>   
                    <p>Privacy Policy</p>
                    <p>404 Error Page</p>  
                </div>
}

            <button onClick={Click}>
                <span>Blog</span>
                <BiChevronDown className="arrow"/>
            </button>
            {show &&       
                <div className="accordion">
                    <p className="text-1">Blog Layout</p>
                    <p className="text-2">Single </p>
                </div>
}

            <button><span>Contact Us</span></button>

        </div>
    )
}
export default OffCanvas;