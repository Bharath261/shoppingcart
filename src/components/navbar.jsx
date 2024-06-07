import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";
import "./navbar.css" ;

export const Navbar = () => {
    return <div className="navbar">

        <div className="links" >
            <Link to="/">Shop</Link>
            <Link to = "/cart" id="carticon"> <ShoppingCart size={35}  /> </Link>
        </div>

    </div>
};
