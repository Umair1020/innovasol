import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';
import "./Portfolio.css"
import img1 from "./PortfolioImg/web.png"
import img2 from "./PortfolioImg/app.png"
import img3 from "./PortfolioImg/social.png"
import img4 from "./PortfolioImg/developmnet.png"
import Header from '../../components/Header/Header';

const Portfolio = () => {
    return (
        <>
            <div className="container1"
                style={{
                    position: "relative",
                    backgroundColor: "#000c2b",
                    width: "100%",
                    // height: "6681px",
                    overflow: "hidden",
                    fontSize: "18px",
                    color: "#fff",
                    fontFamily: "Montserrat",
                }}
            >
                <img
                    style={{
                        position: "absolute",
                        top: "0px",
                        left: "574px",
                        width: "100%",
                        height: "817px",
                    }}
                    alt=""
                    src="/ellipse-2.svg"
                />

                <Header />
                <div className='row'>
                    {/* <div
          style={{
            borderRadius: "50%",
            backgroundColor: "rgba(255, 201, 62, 0.8)",
            filter: "blur(435px)",
            width: "331px",
          }}
        /> */}

                    <div
                        style={{
                            borderRadius: "50%",
                            backgroundColor: "#007be5",
                            filter: "blur(435px)",
                            // width: "394px",
                            // height: "200px",
                        }}
                    />


                    <div className='container'>
                        <div className="row portfolio-container">
                            <h1 className='portmain text-center mx-auto ' style={{ fontWeight: "700" }}>
                                Portfolio by Category
                            </h1>
                            <p className='mx-auto text-center w-75' style={{ fontWeight: "lighter", color: "" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                <br /> Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, <br /> <br /> </p>

                            <div id="portfolio-grid" className="row no-gutter" style={{ marginLeft: "30px" }} >
                                <div className="item  col-sm-6 col-md-4 col-lg-4 mb-4 ">
                                    <Link to="/portfolio/graphicdesigning" className="item-wrap fancybox my-3">
                                        <div className="work-info">
                                            <h3 className='fs-3 fw-700' style={{ fontWeight: "700" }}>Graphic Designing
                                                <br /> Portfolio</h3>
                                            <span className=' '>Click to view full portfolio</span>
                                        </div>
                                        <img className="logoimg " src={img1} alt="portfolio" />
                                    </Link>
                                </div>
                                <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                                    <Link to="/portfolio/App" className="item-wrap fancybox my-3">
                                        <div className="work-info">
                                            <h3 className='fs-3 fw-700' style={{ fontWeight: "700" }}>Mobile App <br />
                                                Portfolio</h3>
                                            <span>Click to view full portfolio</span>
                                        </div>
                                        <img className="logoimg" src={img2} alt="portfolio" />
                                    </Link>
                                </div>

                                <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4 ">
                                    <Link to="/portfolio/web" className="item-wrap fancybox my-3">
                                        <div className="work-info">
                                            <h3 className='fs-3' style={{ fontWeight: "700" }}>Web Development <br /> Portfolio</h3>
                                            <span>Click to view full portfolio</span>
                                        </div>
                                        <img className="logoimg" src={img4} alt="portfolio" />
                                    </Link>
                                </div>
                                <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4 ">
                                    <Link to="/portfolio/social" className="item-wrap  my-3">
                                        <div className="work-info">
                                            <h3 className='fs-3' style={{ fontWeight: "700" }}>Social Media <br /> Portfolio
                                            </h3>
                                            <span>Click to view full portfolio</span>
                                        </div>
                                        <img className="logoimg" src={img3} alt="portfolio" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio