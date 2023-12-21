import React from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Ui = () => {
    const portfolioData = [
        {
            category: 'graphic-design',
            title: 'Graphic Designing Project',
            images: ["/1.jpg", "/2.png","/3.jpg", "/4.jpg","/5.png", "/6.jpg","/7.jpg", "/8.jpg","/9.jpg","/10.jpg", "/12.png", "/11.jpg"],
            description: 'This is a social media project description.',
        },

    ];
    const renderImageCards = () => {
        return portfolioData.map((project, index) => (

            <div key={index} className="portfolio-item"><br />
                <div className="back-arrow-container d-flex align-items-center">
                    <Link to="/portfolio" className="back-arrow">
                        <img className='arrow-icon' src='/arrow.png' alt='Right Arrow' />
                    </Link>
                    <h2 className='text-center mx-auto'>{project.title}</h2>
                </div>
                <div className="row image-gallery">

                    {project.images.map((image, i) => (
                        <div key={i} className="col-lg-4">

                            <section class="portfoliowrp">
                                {/* <div class="container-fluid" bis_skin_checked="1"> */}
                                <div class="tab current ser-port tabs-Web-design wbport" bis_skin_checked="1">
                                    <div class="row" bis_skin_checked="1">
                                        <div class="col-md-12" bis_skin_checked="1">
                                            <div class="tab ser-port tabs-custm-web wbport" bis_skin_checked="1">
                                                <div class="row" bis_skin_checked="1">
                                                    <div class="col-md-12" bis_skin_checked="1">
                                                        <div class="port-box" bis_skin_checked="1">

                                                            <ul className='d-flex'>

                                                                <li class="hk_web_height lazy tabs-web-dsgn"
                                                                    data-src="/new1.webp" alt="t-1"
                                                                    data-was-processed="true"
                                                                    style={{ backgroundImage: `url(${image})` }}></li>


                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </section>
                        </div>
                    ))}

                </div>
            </div>

        ));
    };
    return (
        <div>
            <div className='container1' style={{
                position: "relative",
                backgroundColor: "#000c2b",
                width: "100%",
                // height: "6681px",
                overflow: "hidden",
                textAlign: "left",
                fontSize: "18px",
                color: "#fff",
                fontFamily: "Montserrat",
            }}
            >
                <div className='container'>

                    <Header />
                    <div className="portfolio-list">
                        {renderImageCards()}
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default Ui