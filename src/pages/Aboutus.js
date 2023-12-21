import React from 'react'
import Header from '../components/Header/Header'
import { FaAlignRight, FaArrowRight } from 'react-icons/fa'
import Footer from "../components/Footer/Footer";

const Aboutus = () => {
    return (
        <div>
            <div className="container1"
                style={{
                    position: "relative",
                    backgroundColor: "#000c2b",
                    width: "100%",
                    overflow: "hidden",
                    textAlign: "left",
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
                    <div
                        style={{
                            borderRadius: "50%",
                            backgroundColor: "#007be5",
                            filter: "blur(435px)",
                            // width: "394px",
                            // height: "200px",
                        }}
                    />

                </div>
                <div className='container'>
                    <div className='row digitalagency'>

                        <div className='col-lg-12 '>
                            <h1 className='mt-3'
                                style={{

                                    textAlign: "center",
                                    fontWeight: 700
                                }}
                            >
                                Want to Know
                            </h1>
                            {/* <img className="mx-auto vector  " src='/vector.svg' /> */}
                            {/* <img className="btn6" src='/worldclass.svg' /> */}
                        </div>
                        <div className='col-lg-12 d-flex'>
                            <img className="mx-2 vector  " src='/vector.svg' />
                            <h1 className='abouth1 mx-5'
                                style={{

                                    fontWeight: 700
                                }}
                            >
                                About Us ?
                            </h1>
                        </div>
                        <p className='mx-auto w-75 text-center'>Our vision is to be the catalyst of digital transformation, empowering brands to thrive in an ever-evolving landscape. We strive to redefine creativity, innovation, and excellence, crafting immersive experiences that resonate globally. By pushing boundaries and embracing new possibilities, we aim to be the driving force behind our clients' success stories in the digital world. Celebrating creativity and innovation, we are a passionate team dedicated to crafting digital experiences that captivate and inspire. From graphic design to web development and SEO services, we blend expertise with imagination to propel brands toward success in the digital realm.</p>
                       
                    </div>
                    <br /> 
                    <div className='container row'>
                        <h2>What Matters To Us</h2>
                        <p className='para'> We prioritize meaningful connections, creative excellence, and tangible results that drive our clients' success. Our focus lies in fostering collaborations built on trust, innovation, and a shared commitment to pushing the boundaries of what's possible in the digital space.</p>
                    </div> <br /><br />
                    <div class='row'>
                        <div class='col-lg-6'>
                            <h3 class='text-warning'>Company Family</h3>
                            <h2>Professional Work Team in Their Field</h2>
                            <p>Our professional team combines expertise and passion to redefine digital excellence.</p>
                        </div>
                        <div class='col-lg-6'>
                            <div class='row'>
                                <div class='col-md-6'>
                                    <div class='aboutbox' style={{ background: '#fff', borderRadius: '53px', padding: '20px', height: "250px" }}>
                                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                            <img src='/Ellipse 45.svg' alt='Person 1' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <h4 className='text-dark text-center my-2'>Muhammad <br /> Bilal</h4>
                                        <p className='text-dark text-center'>Founder & Ceo</p>
                                    </div><br />
                                </div>
                                <br />
                                <div class='col-md-6'>
                                    <div class='aboutbox' style={{ background: '#fff', borderRadius: '53px', padding: '20px', height: "250px" }}>
                                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                            <img src='/Ellipse 46.svg' alt='Person 2' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <h4 className='text-dark text-center my-2'>Muhammad Daniyal</h4>
                                        <p className='text-dark text-center'>Creative Head</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class='row' style={{ marginTop: "20px" }}> */}
                        <div class='col-md-3'>
                        <br />
                            <div class='aboutbox' style={{ background: '#fff', borderRadius: '53px', padding: '20px', height: "250px" }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                    <img src='/umair.webp' alt='Person 3' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 className='text-dark text-center my-2'>Muhammad Umair</h4>
                                <p className='text-dark text-center'>React Developer</p>
                            </div>
                        </div>
                        <div class='col-md-3'>
                        <br />
                            <div class='aboutbox' style={{ background: '#fff', borderRadius: '53px', padding: '20px', height: "250px" }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                    <img src='/Ellipse 48.svg' alt='Person 4' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 className='text-dark text-center my-2'>Taloot <br /> Ansari</h4>
                                <p className='text-dark text-center'>Sr Python Developer</p>
                            </div>
                        </div>
                        <div class='col-md-3'>
                        <br />
                            <div class='aboutbox' style={{ background: '#fff', borderRadius: '53px', padding: '20px', height: "250px" }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                    <img src='/Ellipse 49.svg' alt='Person 4' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 className='text-dark text-center my-2'>Ahmed <br /> Hussain</h4>
                                <p className='text-dark text-center'>DM Junior</p>
                            </div>
                        </div>
                        <div class='col-md-3'>
                        <br />
                            <div class='aboutbox' style={{ background: '#fff', borderRadius: '53px', padding: '20px', height: "250px" }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                    <img src='/Ellipse 50.svg' alt='Person 4' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 className='text-dark text-center my-2'>Tahir <br /> Naeem</h4>
                                <p className='text-dark text-center'>DM Head</p>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div> <br /> <br />
                <Footer />
            </div>
        </div>
    )
}

export default Aboutus