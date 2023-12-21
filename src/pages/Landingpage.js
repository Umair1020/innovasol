import Header from "../components/Header/Header";
import "../App.css"
import { useMediaQuery } from "react-responsive";
import { useState, useRef, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import Slider from 'react-slick';
import Footer from "../components/Footer/Footer";
import Popupcard from "../components/Popupcard";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

const Landingpage = () => {
  const [filter, setFilter] = useState('web-design');

  const handleContactClick = () => {
    setShowPopup(true);
  };
  const portfolioData = [
    {
      category: 'social-media',
      title: 'Social Media Project',
      images: ["/social.jpg", "/social2.png",],

    },
    {
      category: 'graphics-desining',
      title: 'Graphic Designing Project ',
      images: ["/2.webp", "/1.webp"],

    },
    {
      category: 'web-design',
      title: 'Web Design Project ',
      images: ['/new3.webp', "/new4.webp"],


    },
    {
      category: 'app-development',
      title: 'App Development Project ',
      images: ['/app1.jpg', "/app2.png"],

    },
    // Add more portfolio items as needed
  ];

  const buttonStyle = {
    borderRadius: '27.208px',
    background: 'rgba(145, 0, 157, 0.4)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    margin: '5px',
    padding: "9.9px 41.8px"
  };

  const inactiveButtonStyle = {
    borderRadius: '27.208px',
    background: 'linear-gradient(0deg, rgba(92, 92, 92, 0.50) 0%, rgba(92, 92, 92, 0.50) 100%)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    margin: '5px',
    padding: "9.9px 41.8px"
  };

  const technologyLogos = [
    'image21.svg',
    'image22.svg',
    'image30.svg',
    'image24.svg',
    'image25.svg',
    'image26.svg',
    'image27.svg',
    'image28.svg',
    'image29.svg',
    'image30.svg',
    // Add more logo paths here
  ];
  const filteredPortfolio = portfolioData.filter(item => item.category === filter);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const hasPopupDisplayed = localStorage.getItem('hasPopupDisplayed');
  //   if (!hasPopupDisplayed) {
  //     const timer = setTimeout(() => {
  //       setShowPopup(true);
  //       localStorage.setItem('hasPopupDisplayed', 'true');
  //     }, 10000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, []);

  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      localStorage.removeItem('hasPopupDisplayed');
    }, 30000);

    return () => {
      clearTimeout(popupTimeout);
    };
  }, []);

  const containerRef = useRef(null);

  const handleChevronClick = (e) => {
    if (containerRef.current) {
      // Scroll the container by the width of a single "chevron" element
      containerRef.current.scrollBy({
        left: e.target.offsetWidth,
        behavior: 'smooth', // You can change this to 'auto' for immediate scroll
      });
    }
  };


  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  const serviceData = [
    {
      icon: <img src="/ser1.png" alt="Web Development" />,
      title: "Web Development",
      description: "Crafting high-impact websites that blend innovation and functionality. From sleek designs to seamless user experiences, we bring your digital vision to life."
    },
    {
      icon: <img src="/ser2.png" alt="Content Writing" />,
      title: "Content Writing",
      description: "Expert writers crafting captivating narratives and engaging copy. From compelling web content to SEO-optimized articles, we boost brand visibility and story impact"
    },
    {
      icon: <img src="/ser3.png" alt="Ui/Ux Design" />,
      title: "Ui/Ux Design",
      description: "Crafting captivating brand visuals that inspire and elevate. From logos to marketing materials, we bring your brand to life with compelling designs."
    },
    {
      icon: <img src="/ser4.png" alt="Seo" />,
      title: "Seo",
      description: "Boosting online presence through tailored SEO strategies. From optimization to content, we elevate your visibility for digital success."
    },
    // Add two more service items for the remaining services
  ];
  return (
    <>

      {showPopup && <Popupcard />}

      <div className="container1"
        style={{
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

        {/* <img
          style={{
            position: "absolute",
            top: "0px",
            left: "574px",
            width: "100%",
            height: "817px",
          }}
          alt=""
          src="/ellipse-2.svg"
        /> */}


        <Header />
        <br />
        <div className='row'>
          {/* <div
          style={{
            borderRadius: "50%",
            backgroundColor: "rgba(255, 201, 62, 0.8)",
            filter: "blur(435px)",
            width: "331px",
          }}
        /> */}
          <img className="mx-4 vector" src='/vector.svg' />

          {/* <img className="mx-4" src='/vector.svg' /> */}
          <div className='container'>
            <div className='row digitalagency'>

              <div className='col-lg-12'>
                <h1
                  style={{

                    textAlign: "center",
                    fontWeight: 700
                  }}
                >
                  Digital
                </h1>

                {/* <img className="btn6" src='/worldclass.svg' /> */}
              </div>
              <div className='col-lg-6 '>
                <h1 className='agencyh1'
                  style={{

                    fontWeight: 700
                  }}
                >
                  Agency
                </h1>
                <p>Full-service design support that growing B2B
                  companies need. World leading agnecy.</p>
                <button className='probtn ' >
                  Our Projects
                </button>
              </div>
              <div className='col-lg-6'>
                <img className='img4' src='/Image.png' />
              </div>
            </div>
          </div>
          <div className="container" ref={containerRef}>
            <div className="chevron" onClick={handleChevronClick}></div>
            <div className="chevron" onClick={handleChevronClick}></div>
            <div className="chevron" onClick={handleChevronClick}></div>
          </div>

          <div className='col-lg-12'>
            <img className='lady' src='Group.png' />
          </div>




        </div>
        {/* <Main /> */}
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-lg-6 col-md-5 col-sm-12 ">
              <h1 className="sech1">We Are A Creative <br />
                Digital Agency</h1> <br />
              <p>We're a dynamic digital agency fueling creativity to craft immersive brand experiences. With a blend of innovation and expertise, we sculpt compelling narratives, design captivating visuals, and engineer digital strategies that elevate brands to new heights. At our core, we're storytellers, breathing life into brands through the power of digital</p>
              <button className="button" style={{ background: "rgba(255, 201, 62, 1)", borderRadius: "27px", padding: "10px", border: "none" }} onClick={handleContactClick} >Contact Us</button>
            </div>
            <div class="col-lg-6 col-md-5 ">
              <br />
              <img className="sec2img" src="/sec2.svg" />
            </div>
          </div>
        </div> <br />
        <section id="technologies" className="technologies d-flex section-bg " style={{ background: "#fff" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-10">
                <Swiper
                  slidesPerView={3} // Number of logos to show
                  spaceBetween={20} // Space between logos
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}

                  breakpoints={{
                    '@0.00': {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    '@0.75': {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    '@1.00': {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    '@1.50': {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}

                  modules={[Autoplay]}


                  className="mySwiper1"
                >
                  {technologyLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                      <img src={logo} alt={`Tech Logo ${index}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <br />
        <div className="row d-flex justify-content-center align-items-center gray1 ">
          <div className="col-lg-5 col-sm-12 ">
            <img className="d-flex justify-content-center align-items-center mx-auto w-75" src="/ggirl2.png" />
          </div>

          <div className="col-lg-7 ">

            <div className="text-center" style={{ fontWeight: "700" }}>
              <br />
              <h2>Our Solution Approach</h2>
            </div>
            <br />

            {/* Move the common structure for each point outside the repeated code */}
            <div className="solution-point">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/correct.png" />
                </div>
                <div style={{ margin: '0 10px' }}></div>
                <div>
                  <h2 className="heading">Customized Visual Storytelling</h2>
                  <p className="para">Tailoring brand narratives through visually immersive experiences. Using a blend of graphic design, interactive elements, and multimedia.</p>
                </div>
              </div>
            </div>

            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/correct.png" />
              </div>
              <div style={{ margin: '0 10px' }}></div> {/* Thoda sa gap */}
              <div>
                <h2 className="heading">Innovative User-Centric Design</h2>
                <p className="para">Prioritizing user experience (UX) and interface design to create intuitive, seamless interactions. Our focus on human-centered design ensures that every digital product or platform we create is not only visually striking but also functional.</p>
              </div>

            </div>
            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/correct.png" />
              </div>
              <div style={{ margin: '0 10px' }}></div> {/* Thoda sa gap */}
              <div>
                <h2 className="heading">Integrated Digital Branding</h2>
                <p className="para">We craft holistic digital branding strategies, unifying web design, social media, content, and marketing. This cohesive approach builds strong brand identities, and forges deep connections with audiences across diverse platforms."</p>
              </div>
              <br />
            </div>
          </div>
        </div>
        <Desktop>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-md-7 col-sm-7 my-5">
                <h2 className="text-start" style={{ fontWeight: "700" }}>Service We Can <br />
                  Help You </h2>
              </div>
              <Link to="/portfolio">
                <div className="col-lg-2 col-md-5 col-sm-4 my-5">
                  <button style={{ borderRadius: "41px", display: "flex", justifyContent: "end", alignItems: "flex-end", background: "none", color: "#fff", padding: "10px", border: "2px solid #fff ", width: "max-content" }}>See All</button>
                </div>
              </Link>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-12 my-5">
                <h2 className="text-start" style={{ fontWeight: "700" }}>Service We Can <br />
                  Help You </h2>
                <button style={{ borderRadius: "41px", display: "flex", justifyContent: "end", alignItems: "flex-end", background: "none", color: "#fff", padding: "10px", border: "2px solid #fff " }}>See All</button>
              </div>

            </div>
          </div>
        </Mobile>
        <Desktop>
          <div className="container">
            <div className="row justify-content-center">
              {/* {serviceData.map((service, index) => ( */}
              <div className="col-lg-5 col-sm-12"  >
                <div className="card" >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser1.png" /></div>

                  {/* Service Title */}
                  <h3>Web Development</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Crafting high-impact websites that blend innovation and functionality. From sleek designs to seamless user experiences, we bring your digital vision to life.</p>

                  {/* Read More Button */}
                  <Link to="/portfolio"><button className="read-more-btn">Read More</button></Link>
                </div>

              </div>
              <div className="col-lg-5 col-sm-12"  >
                <div className="card" >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser2.png" /></div>

                  {/* Service Title */}
                  <h3 className="">Seo</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Boosting online presence through tailored SEO strategies. From optimization to content, we elevate your visibility for digital success."
                  </p>

                  <Link to="/portfolio"> <button className="read-more-btn">Read More</button></Link>
                </div>

              </div>
              <div className="col-lg-5 col-sm-12"  >
                <div className="card" >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser3.png" /></div>

                  {/* Service Title */}
                  <h3>Content Writing</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Expert writers crafting captivating narratives and engaging copy. From compelling web content to SEO-optimized articles, we boost brand visibility and story impact</p>

                  {/* Read More Button */}
                  <Link to="/portfolio"><button className="read-more-btn">Read More</button></Link>
                </div>

              </div>
              <div className="col-lg-5 col-sm-12"  >
                <div className="card" >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser4.png" /></div>

                  {/* Service Title */}
                  <h3>Ui/Ux Design</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Crafting captivating brand visuals that inspire and elevate. From logos to marketing materials, we bring your brand to life with compelling designs."
                  </p>

                  {/* Read More Button */}
                  <Link to="/portfolio"> <button className="read-more-btn">Read More</button></Link>
                </div>

              </div>
              {/* // ))} */}
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div className="container">
            <div className="row justify-content-center">
              {/* {serviceData.map((service, index) => ( */}
              <div className="col-lg-5 col-sm-12"  >
                <div className="card" >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser1.png" /></div>

                  {/* Service Title */}
                  <h3>Web Development</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Crafting high-impact websites that blend innovation and functionality. From sleek designs to seamless user experiences, we bring your digital vision to life.</p>

                  {/* Read More Button */}
                  <Link to="/portfolio"><button className="read-more-btn">Read More</button></Link>
                </div>
                <br />
              </div>
              <div className="col-lg-5 col-sm-12"  >
                <div className="card" >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser2.png" /></div>

                  {/* Service Title */}
                  <h3 className="">Seo</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Boosting online presence through tailored SEO strategies. From optimization to content, we elevate your visibility for digital success."
                  </p>

                  <Link to="/portfolio"> <button className="read-more-btn">Read More</button></Link>
                </div>
                <br />
              </div>
              <div className="col-lg-5 col-sm-12"  >
                <div className="card" >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser3.png" /></div>

                  {/* Service Title */}
                  <h3>Content Writing</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Expert writers crafting captivating narratives and engaging copy. From compelling web content to SEO-optimized articles, we boost brand visibility and story impact</p>

                  {/* Read More Button */}
                  <Link to="/portfolio"><button className="read-more-btn">Read More</button></Link>
                </div>
                <br />
              </div>
              <div className="col-lg-5 col-sm-12"  >
                <div className="card" >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser4.png" /></div>

                  {/* Service Title */}
                  <h3>Ui/Ux Design</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Crafting captivating brand visuals that inspire and elevate. From logos to marketing materials, we bring your brand to life with compelling designs."
                  </p>

                  <Link to="/portfolio"> <button className="read-more-btn">Read More</button></Link>
                </div>
                <br />
              </div>
              <br />
            </div>
          </div>
        </Mobile>
        <Desktop>
          <div className='portfolio'>
            <section>
              <h2 className="text-center fw-bold "> <br />
                Our Latest Projects
              </h2>
              <div className="col-lg-12 d-flex col-md-7 col-sm-7 my-2" >
                <div className="portfolio-buttons mx-auto" >
                  <button className="mx-2 " style={filter === 'social-media' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('social-media')}>Social Media</button>
                  <button className="mx-2 " style={filter === 'graphics-desining' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('graphics-desining')}>Graphic Designing</button>
                  <button className="mx-2 " style={filter === 'web-design' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('web-design')}>Web Design and Development</button>
                  <button className="mx-2 " style={filter === 'app-development' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('app-development')}>App Development</button>
                </div>
              </div><br />
              <div className="portfolio-list">
                {filteredPortfolio.map((item, index) => (
                  <div key={index} className="portfolio-item">

                    <div className="image-gallery mx-auto">
                      {Array.isArray(item.images) ? (
                        <div class="row" style={{
                          margin: "auto",
                          display: "flex",
                          justifyContent: "center"
                        }} bis_skin_checked="1">
                          {item.images.map((image, i) => (
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
                                                  style={{ backgroundImage: `url(${image})`, }}></li>

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
                      ) : (
                        <div className="box1">
                          <img className="port-box" src={item.images} alt={item.title} />
                        </div>
                      )}
                    </div>
                    <br />
                    <p className='description'>{item.description}</p>
                  </div>
                ))}

              </div>
            </section >

          </div >
        </Desktop>
        <Mobile>
          <div className='portfolio'>
            <section>
              <h2 className="text-center fw-bold "> <br />
                Our Latest Projects
              </h2>
              <div className="col-lg-12 d-flex col-md-7 col-sm-7 my-2" >
                <div className="portfolio-buttons mx-auto" style={{
                  display: " flex",
                  flexWrap: "wrap"
                }}>
                  <button className="mx-auto " style={filter === 'social-media' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('social-media')}>Social Media</button>
                  <button className="mx-auto " style={filter === 'graphics-desining' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('graphics-desining')}>Graphic Designing</button>
                  <button className="mx-auto " style={filter === 'web-design' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('web-design')}>Web Design and Development</button>
                  <button className="mx-auto " style={filter === 'app-development' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('app-development')}>App Development</button>
                </div>
              </div><br />
              <div className="portfolio-list">
                {filteredPortfolio.map((item, index) => (
                  <div key={index} className="portfolio-item">

                    <div className="image-gallery mx-auto">
                      {Array.isArray(item.images) ? (
                        <div class="row" style={{
                          margin: "auto",
                          display: "flex",
                          justifyContent: "center"
                        }} bis_skin_checked="1">
                          {item.images.map((image, i) => (
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
                                                  style={{ backgroundImage: `url(${image})`, }}></li>

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
                      ) : (
                        <div className="box1">
                          <img className="port-box" src={item.images} alt={item.title} />
                        </div>
                      )}
                    </div>
                    <br />
                    <p className='description'>{item.description}</p>
                  </div>
                ))}

              </div>
            </section >

          </div >
        </Mobile>
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="fade-up">
            <div className="section-header"> <br /> <br />
              <h2 style={{ fontFamily: "Montserrat", fontWeight: "700" }}>What  Our Client Says</h2>
            </div>
            <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <div className="swiper-slide">
                    <SwiperSlide>
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <p>
                            {/* <FaQuoteLeft /> */}
                            <img src="/quote.png" style={{ width: "50px", marginTop: "-30px" }} />
                            Working with this team has been a game-changer for our brand. Their content writing expertise brought our story to life, engaging our audience in ways we hadn't imagined. They've truly elevated our online presence!

                          </p>
                          <div className="d-flex align-items-center">
                            <img src="agha.jpeg" className="testimonial-img flex-shrink-0" alt="" />
                            <div>
                              <h3>Ajaz Ali </h3>
                              <h4>Client</h4>
                              <div class="stars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>

                  <div className="swiper-slide">
                    <SwiperSlide>
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <p>
                            <img src="/quote.png" style={{ width: "50px", marginTop: "-30px" }} />
                            This graphic design team exceeded our expectations! Their creations transformed our brand's identity, captivating our audience with visually stunning and impactful designs. We're thrilled with the results!

                          </p>
                          <div className="d-flex align-items-center">
                            <img src="/ali.jpeg" className="testimonial-img flex-shrink-0" alt="" />
                            <div>
                              <h3>Ali Muhammad</h3>
                              <h4>Client</h4>
                              <div class="stars">
                                <FaStar /><FaStar /><FaStar /><FaStar />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>

                  <div className="swiper-slide">
                    <SwiperSlide>
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <p>
                            <img src="/quote.png" style={{ width: "50px", marginTop: "-30px" }} />

                            Working with this team has been a game-changer for our brand. Their content writing expertise brought our story to life, engaging our audience in ways we hadn't imagined. They've truly elevated our online presence!


                          </p>
                          <div className="d-flex align-items-center">
                            <img src="aziz.jpeg" className="testimonial-img flex-shrink-0" alt="" />
                            <div>
                              <h3>Nadeem Ali</h3>
                              <h4>Client</h4>
                              <div class="stars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>

                  <div className="swiper-slide">
                    <SwiperSlide>
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <p>
                            <img src="/quote.png" style={{ width: "50px", marginTop: "-30px" }} />
                            Innovo Solutions proved to be a great help in developing my website.Their professionalism and the quality of their work were impressive. Timely delivery and responsive customer service made the whole experience seamless.
                          </p>
                          <div className="d-flex align-items-center">
                            <img src="/waqas.jpeg" className="testimonial-img flex-shrink-0" alt="" />
                            <div>
                              <h3>Waqas Azam</h3>
                              <h4>Client</h4>
                              <div class="stars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>

                  <div class="swiper-slide">
                    <SwiperSlide>
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <p>
                            <img src="/quote.png" style={{ width: "50px", marginTop: "-30px" }} />

                            Innovo Solutions excelled in crafting the UI/UX design for my project. Their intuitive design approach and attention to detail greatly enhanced the user experience. I was thoroughly impressed with their creativity and the seamless functionality they implemented.

                          </p>
                          <div className="d-flex align-items-center">
                            <img src="agha.jpeg" className="testimonial-img flex-shrink-0" alt="" />
                            <div>
                              <h3>Ali Agha</h3>
                              <h4>Client</h4>
                              <div class="stars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>

            </div>

          </div>
        </section >
        <Footer />
      </div >

    </>
  );
};

export default Landingpage;
