import {NavLink} from "react-router-dom";
import React from "react";
import MenuButton from "./MenuButton";
function Navbar(){
    const [click , setClick] = React.useState(false)
    const handleClick = ()=> {
        setClick(!click)
    }
    return(
        <nav>
            <div className="hamburger-div" onClick={handleClick}>
            <MenuButton click={click}/>
            </div>
            <img src="image/logo.svg" alt="logo" className="image-logo-nav"></img>
             <div className={ click ? 'mobile-nav-links':'nav-links'}>
            <NavLink to="/" className={({isActive})=> (isActive? "link active": "link")}>Home</NavLink>
            <NavLink to="/collections" className={({isActive})=> (isActive? "link active": "link")}>Collections</NavLink>
            <NavLink to="/about" className={({isActive})=> (isActive? "link active": "link")}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> (isActive? "link active": "link")}>Contact</NavLink>
            </div>
            <div className="cart-div">
            <NavLink to="/cart"  className={({isActive})=> (isActive? "link active": "link")}><img id="cart" alt="cart" src="image/icon-cart.svg"/></NavLink>
            <img src="image/image-avatar.png" alt="avatar" className="image-avatar-nav"/>
            </div>
            
        </nav>
    )
}
export default Navbar;