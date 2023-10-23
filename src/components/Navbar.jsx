import { Fragment,useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/main.css";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
         <div className="logo-container">
         <h3 className="logo"></h3>
         </div>
     

      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">All Recipe</a>
        <a href="/#">Submit Recipe</a>
        <a href="/#">Login</a>
        <a href="/#">Register</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes ></FaTimes>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
            <FaBars></FaBars>
        </button>
    </header>
    
  );
}

export default Navbar;
