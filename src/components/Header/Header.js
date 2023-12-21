import { FaBars, FaTimes } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import React, { useState, useEffect } from "react";
import styles from "../../index.module.css"
import { Link } from "react-router-dom";
import "../../App.css"
import Popupcard from "../Popupcard";

const Header = () => {
    const [activeLink, setActiveLink] = useState('');
    const [open, setOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleContactClick = () => {
        setShowPopup(true);
    };
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
    };

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    return (
        <>
            <Desktop>
                <div className="container  ">
                    <div className="row d-flex justify-content-around">
                        <div className="col-2 my-4">
                            <div className="">
                                <img className="w-75" src="/logo.png" />
                            </div>
                        </div>
                        <div className="col-7 my-4">
                            <ul className={`ul   ${styles.navLinksContainer}`}>
                                <li>
                                    <Link
                                        to="/"
                                        className={`home ${activeLink === 'home' ? styles.activeLink : ''}`}
                                        onClick={() => setActiveLink('home')}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className={`about ${activeLink === 'about' ? styles.activeLink : ''}`}
                                        onClick={() => setActiveLink('about')}
                                    >
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/technology"
                                        className={`contact1 ${activeLink === 'contact1' ? styles.activeLink : ''}`}
                                        onClick={() => setActiveLink('contact1')}
                                    >
                                        Technologies
                                    </Link>
                                </li>
                              
                                <li>
                                    <Link
                                        to="/portfolio"
                                        className={`app ${activeLink === 'app' ? styles.activeLink : ''}`}
                                        onClick={() => setActiveLink('app')}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2  my-3">
                            <div className="button ">
                                <button
                                    style={{
                                        background: 'rgba(255, 201, 62, 1)',
                                        fontWeight: '600',
                                        borderRadius: '27px',
                                        padding: '10px',
                                        border: 'none',
                                    }}
                                    onClick={handleContactClick} // Trigger the popup display on button click
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                {showPopup && <Popupcard />}
            </Desktop>
            <Mobile>
                <div className="d-flex">
                    <Link className="d-flex" to="/">
                        <div className="">
                            <img className=" my-3 mt-3  mx-5 " style={{width: "40%"}} src="/logo.png" />
                        </div>
                    </Link>
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><FaTimes /></a>
                        <div className="ul">

                            <Link to="/">Home</Link>
                            <Link to="/about" >About</Link>
                         
                            <Link to="/technology">Technologies</Link>
                            <Link to="/portfolio">Portfolio</Link>
                       
                            <div className="button my-5 mt-4 mx-auto">
                                <button
                                    style={{
                                        background: 'rgba(255, 201, 62, 1)',
                                        fontWeight: '600',
                                        borderRadius: '27px',
                                        padding: '10px',
                                        border: 'none',
                                    }}
                                    onClick={handleContactClick} // Trigger the popup display on button click
                                >
                                    Contact Us
                                </button>
                           
                        </div>
                        </div>
                    </div>
                    <span className="w-25 my-3 mt-3 " style={{ marginLeft: "100px", fontSize: '30px', cursor: 'pointer', color: "#fff" }} onClick={openNav}><FaBars /></span>
                
                </div>
                {showPopup && <Popupcard />}
            </Mobile >
        </>
    )
}

export default Header
