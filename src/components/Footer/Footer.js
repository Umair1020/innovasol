import { FaChevronRight, FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTwitter } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Modal, Button } from "react-bootstrap";
import "./footer.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import "../card.css"
const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        phone: false,
        message: false
    });

    const [submissionMessage, setSubmissionMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};

        // Check for empty fields
        Object.keys(formData).forEach((key) => {
            if (formData[key].trim() === "") {
                errors[key] = true;
            }
        });

        if (Object.keys(errors).length > 0) {
            setFormErrors({ ...errors });
            setSubmissionMessage("Please fill out all fields");
            return;
        }
        // if (
        //     formData.name.trim() === "" ||
        //     formData.email.trim() === "" ||
        //     formData.phone.trim() === "" ||
        //     formData.message.trim() === ""
        // ) {
        //     setSubmissionMessage("Please fill out all fields");
        //     return;
        // }
        try {
            const response = await fetch("https://api.innovasolutions.pk/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmissionMessage("Thanks for contacting us!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setFormErrors({
                    name: false,
                    email: false,
                    phone: false,
                    message: false
                });
            } else {
                setSubmissionMessage("Failed to send email");
            }
        } catch (error) {
            console.error("Error:", error);
            setSubmissionMessage("Failed to send email");
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Clear error message on input change
        if (formErrors[e.target.name]) {
            setFormErrors({
                ...formErrors,
                [e.target.name]: false
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
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = () => {
        setShowModal(true);
    };
    return (
        <>
            <div className="page-wrapper">
                <div id="waterdrop"></div>
                <footer>
                    <div class="footer-top">
                        <div class="pt-exebar">

                        </div>
                        <div class="container">
                            <div class="row " >
                                <div class="col-lg-12 col-md-12 col-sm-12 footer-col-3">
                                    <img src="/logo.png" />
                                </div>
                            </div>
                            <div class="row d-flex" style={{ justifyContent: "space-evenly" }}>

                                <div class="col-lg-3 col-md-12 col-sm-12 footer-col-3">
                                    <div class="widget footer_widget">
                                        <h5 class="footer-title"><br /><br />Address</h5>
                                        <div class="gem-contacts">
                                            <div class="gem-contacts-item gem-contacts-address"> <h4 >Office</h4>

                                                Plot no 324 Block 7/8 CP Berar<br />
                                                Society Dhoraji Karachi.
                                            </div>
                                            <div class="gem-contacts-item gem-contacts-phone"> <br /><h4 >Contact</h4>
                                                02134120126 <br />
                                                support@innovasolutions.pk</div>
                                        </div>
                                    </div>

                                </div>

                                <div class=" col-lg-5 col-md-6 col-sm-12">
                                    <div class="widget">
                                        <h5 class="footer-title"> <br /><br />Email Us</h5>
                                        <div class="textwidget">
                                            <div role="form" class="wpcf7" id="wpcf7-f4-o1" lang="en-US" dir="ltr">

                                                <form onSubmit={handleSubmit} class="wpcf7-form" novalidate="novalidate">

                                                    <div class="contact-form-footer">
                                                        <p><span class="wpcf7-form-control-wrap your-first-name"><input type="text" style={{ padding: "10px" }} name="name" size="40" aria-invalid="false" value={formData.name} onChange={handleInputChange} placeholder="Your name" className={formErrors.name ? "error-input wpcf7-form-control wpcf7-text" : ""} /></span></p>
                                                        {formErrors.name && (
                                                            <p className="error-message">Please enter your name</p>
                                                        )}
                                                        <p><span class="wpcf7-form-control-wrap your-email_1"><input type="email" style={{ padding: "10px" }} name="email" value={formData.email} onChange={handleInputChange} size="40"
                                                            className={formErrors.email ? "error-input wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" : ""} aria-invalid="false" placeholder="Your email" /></span></p>
                                                        {formErrors.email && (
                                                            <p className="error-message">Please enter your Email</p>
                                                        )}
                                                        <p><span class="wpcf7-form-control-wrap your-email_1"><input type="number" style={{ padding: "10px" }} name="phone" value={formData.phone} className={formErrors.phone ? "error-input wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" : ""} onChange={handleInputChange} aria-invalid="false" placeholder="Your phone" /></span></p>
                                                        {formErrors.phone && (
                                                            <p className="error-message">Please enter your Phone Number</p>
                                                        )}
                                                        <p><span class="wpcf7-form-control-wrap your-message"><textarea name="message" style={{ padding: "10px" }} cols="40" rows="10" className={formErrors.message ? "error-input wpcf7-form-control wpcf7-textarea" : ""} value={formData.message} onChange={handleInputChange} aria-invalid="false" placeholder="Your message"></textarea></span></p>
                                                        {formErrors.message && (
                                                            <p className="error-message">Please enter your message</p>
                                                        )}
                                                        <button className="button" style={{ background: "rgba(255, 201, 62, 1)", borderRadius: "27px", padding: "10px", border: "none", width: "180px" }}  >Submit</button>
                                                    </div>
                                                    {submissionMessage && (
                                                        <p className="submission-message text-center text-light my-4">{submissionMessage}</p>
                                                    )}
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row">

                                <div class="col-md-4">
                                    <div class="footer-site-info">2023 © innovasolutions.pk </div>
                                </div>

                                <div class="col-md-5">
                                    <nav id="footer-navigation" class="site-navigation footer-navigation centered-box d-flex " style={{ justifyContent: "space-evenly" }} role="navigation">

                                        <p id="menu-item-26" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26o">Support</p>
                                        <p id="menu-item-27" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27  ">Contact Us</p>
                                        <p onClick={handleShow} style={{ background: "transparent", border: "none", color: "#fff" }}><span className="">Privacy Policy</span></p>
                                        <Modal show={showModal} onHide={handleClose}>
                                            <Modal.Header >
                                                <Modal.Title>Privacy Policy </Modal.Title>
                                                <FaTimes onClick={handleClose} />
                                            </Modal.Header>
                                            <Modal.Body>
                                                Innova Solutions
                                                (“Innova Solutions”, “we”, “us”) is committed to respecting your privacy and recognizes your need for appropriate protection and management of any personally identifiable information (“Personal Information”) you share with us. Innova Solutions has established this Privacy Policy to let you know what information we may collect from you on the publicly available portion of www.innovasolutions.pk (the “Site”) and through various other interactions with you, and how we may use and share that information. Please take a moment to review the terms of our Privacy Policy. By using the Site and/or providing us with Personal Information, you agree to accept the terms of our Privacy Policy. If you do not agree to the terms of this Privacy Policy, please do not use the Site or provide us with any Personal Information. This Privacy Policy applies to information that we collect on the Site and to information which we may collect by other “offline” means, including, without limitation, sales calls and other business transactions. A description of the information we collect on behalf of our advertiser clients through our advertising services is set out in our Notice of Marketing Practices.
                                                Personal Information
                                                Information We May Collect
                                                Personal Information means any information that may be used to identify an individual, including, but not limited to, a first and last name, a home, business, or other physical address, a phone number, and an email address. We collect Personal Information from our Site users and customers only when such information is voluntarily provided to us, including, without limitation, in connection with inquiries about our services through the “Contact Us” page, as part of signing up for our email subscriptions, or in the process of your business transactions with us. To make our content more relevant to you, we may also ask for information about your present place of employment, such as company name, size, industry sector and number of employees. Of course, if you send us an email in connection with an inquiry about a job listed on the “Careers” page, we may also store the Personal Information provided in connection with that inquiry.
                                                We also offer a variety of email subscriptions where you can get information about online marketing and promotions and special offers. You can subscribe to these emails and you can manage your email preferences. If you become a customer of Innova Solutions, we will always retain the right to email you regarding the Site or services that we’re providing to you.
                                                How We May Use Your Information
                                                If you provide us with Personal Information, we may retain and use that information for several purposes, including facilitating and otherwise addressing your inquiry, request, subscriptions, or business transactions and relationship with Innova Solutions. For example, we may use your Personal Information in order to respond to your questions or requests for information about Innova Solutions. We may also use Personal Information to ensure compliance with our policies and applicable law.
                                                Who We May Share Your Information With
                                                We may sometimes use other businesses to perform certain services for us, such as maintaining the Site and our e-mail services and processing inquiries. We may provide Personal Information to those businesses when that information is necessary for them to complete a requested transaction or otherwise perform their duties. Innova Solutions will take reasonable steps to ensure that these third-party service providers are obligated to protect Personal Information on Innova Solutions’s behalf. Innova Solutions will not sell or share your Personal Information with any unaffiliated third parties for marketing purposes. In the event that Innova Solutions or all of its assets are acquired, all of the data collected by Innova Solutions through the Site and through other means and services provided by Innova Solutions would be among the transferred assets. We reserve the right to disclose such information in special cases when we have reason to believe that disclosing this information is necessary to identify, contact, or bring legal action against someone who may be causing injury to or interference with (either intentionally or unintentionally) our rights or property, other visitors, or anyone else who could be harmed by such activities. We also reserve the right to disclose such information when we believe in good faith that the law requires it.
                                                Non-Personal Information
                                                From time to time, we may collect general, non-personal, statistical information about the use of the Site, such as what sites visitors are coming from when they visit our Site, when they first visited our Site, their IP address, how many visitors visit a specific page on the Site, how long they stay on that page and which hyperlinks, if any, they “click” on. We may use the IP address to infer information about such visitor, including its company, city and state. We collect this information through the use of “cookies” and other tracking technologies, which are discussed in greater detail below. We collect this information in order to determine which areas of the Site are most popular and to enhance the Site for visitors. We may group this information into aggregate visitor data in order to describe the use of the Site to our existing or potential business partners, sponsors, advertisers, or other third parties, or in response to a government request. However, please be assured that this aggregate data will in no way personally identify you or any other visitors to the Site.
                                                Cookies and Other Tracking Technologies
                                                Some of our web pages utilize “cookies” and other tracking technologies. A cookie is a small text file that a website transfers to an individual’s web browser and is stored on the device. Cookies and other tracking technologies may record information such as URL and domain requests, referral URL, Internet protocol (IP) addresses, browser software and operating system types, clickstream patterns, and dates and times that our Site gets accessed. We, and/or our third-party advertising service providers, may place cookies or similar files on your computer for security purposes (such as authentication), to facilitate site navigation and to personalize your experience while visiting our Site. Cookies allow us to collect technical and navigational information, such as browser type, time spent on our Site and pages visited (these types of cookies are typically referred to as “Session Cookies”). We also use cookies that enable us to serve advertisements of our products and services, including special offers, when you visit other websites (these cookies may be referred to as “Advertising Cookies”).
                                                We do not obtain, store or maintain any Personal Information about you through our use of cookies (either the Session Cookies or the Advertising Cookies). Also, we do not link the information we store in cookies to any Personal Information you may submit while on the Site. However, we reserve the right to use IP addresses and other tracking technologies to identify a visitor only when we feel it is necessary to enforce compliance with the Site’s policies, to protect the Site, our customers, or others, or when we believe in good faith that the law requires it.
                                                If you have any questions regarding Innova Solutions privacy practices, you are encouraged to contact Innova Solutions at info@innovasolutions.pk
                                                Links to Other Sites; Public Venues test
                                                Please be aware that when you are on the Site, you could be directed to other sites that are beyond our control via hyperlinks. For example, if you choose to use the Innova Solutions Directory at the Site, you may be sent to a third party website if you click on a hyperlink. These other websites may send their own cookies to visitors, collect data, or solicit Personal Information. The privacy policies of these other sites may be significantly different from this Privacy Policy. We are not responsible for the privacy practices of these other sites and cannot guarantee the security of any of your Personal Information collected there.
                                                Security
                                                The security of your Personal Information is important to us. We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data. We restrict access to personal information to Innova Solutions employees, contractors and agents who need to know that information in order to operate, develop or improve our services. These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution, if they fail to meet these obligations. For more information visit the Security page.
                                                Children’s Privacy
                                                This Site is not intended for use by children under 13. We do not knowingly collect Personal Information from anyone under 13 years of age. If we become aware that we have unknowingly collected Personal Information from a child under the age of 13, we will make commercially reasonable efforts to delete such information from our database.
                                                Changes to Our Privacy Policy
                                                The terms of this Privacy Policy may change from time to time. We will notify you of any material changes to this Privacy Policy by posting a notice on the homepage of the Site for a reasonable period of time after such changes are made that this Privacy Policy has been updated and by changing the “Last Modified” date at the top of this Privacy Policy. We encourage you to check this page periodically for any changes. Your continued use of the Site following the posting of changes to these terms will mean you accept those changes.
                                                Governing Law
                                                Innova Solutions makes no representation that this Privacy Policy and such practices comply with the laws of any other country. Visitors who use the Site and reside outside the Pakistan do so on their own initiative and are responsible for compliance with local laws, if and to the extent that local laws are applicable. If you reside outside of the Pakistan, by using our Site, you consent to the transfer and use of your information outside your country.
                                                Contacting Us
                                                If you have any comments or questions regarding our Privacy Policy, please contact us at info@innovasolutions.pk, or at our contact information below.

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>


                                    </nav>
                                </div>

                                <div class="col-md-3">
                                    <div id="footer-socials">
                                        <div class="socials inline-inside socials-colored">

                                            <a href="https://www.facebook.com/InnovaSolutions.Pak?mibextid=ZbWKwL" target="_blank" title="Facebook" class="socials-item">
                                                <FaFacebook className="facebook" style={{ fontSize: "20px" }} />
                                            </a>
                                          
                                            <a href="https://www.instagram.com/innova_solutions.pk?igsh=YzAwZjE1ZTI0Zg==" target="_blank" title="Instagram" class="socials-item">
                                                <FaInstagram className="instagram" style={{ fontSize: "20px" }} />
                                            </a>
                                            <a href="https://www.linkedin.com/company/bitech-softwares/" target="_blank" title="YouTube" class="socials-item">
                                                <FaLinkedin className="linkedin" style={{ fontSize: "20px" }} />
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            {/* <Desktop>
                <div className='row gray '>
        
                    <div className='col-lg-6 d-flex align-items-center' >
                     
                        <div
                            style={{
                                backgroundColor: 'rgba(255, 201, 62, 1)',
                                borderRadius: '65px',
                                height: '200px',
                                display: 'flex',
                                justifyContent: 'center',
                             
                                flexDirection: 'column',
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontWeight: '600',
                                fontSize: '10px',
                                width: "500px",
                                margin: "auto"
                            }}
                        >
                            <p className='text-dark fw-bold w-75 mx-4'>Sign Up to Receive Product Updates and More</p>
                            <div
                                style={{
                           
                                    marginLeft: '10px',
                                    marginTop: '10px',
                                }}
                            >
                                <input
                                    type='email'
                                    placeholder='youremail@gmail.com'
                                    style={{
                                        border: 'none',
                                        borderBottom: '1px solid rgba(52, 67, 103, 1)',
                                        backgroundColor: 'transparent',
                                        padding: '5px',


                                        color: 'rgba(52, 67, 103, 1)',
                                    }}
                                />

                                <FaChevronRight className='fas fa-chevron-right' style={{ color: 'rgba(52, 67, 103, 1)', cursor: 'pointer' }} />
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-6  d-flex align-items-center justify-content-start' >
                        <br />
                        <div className="align-items-start">
                            <br />
                            <h4 >Office</h4>

                            Plot no 324 Block 7/8 CP Berar<br />
                            Society Dhoraji Karachi
                        </div>
                        <br />
                        <div className="align-items-center mx-auto ">
                            <br />
                            <h4 >Contact</h4>
                            02134120126 <br />
                            support@innovasolutions.pk
                        </div>
                    </div>
          
                    <div className="col-lg-6 copyright mx-auto d-flex ms-auto justify-content-center">  <br />
                        © All Rights Reserved
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center copyright text-center">
                        <br />
                        <span style={{ marginRight: '10px' }}>Terms & Conditions</span>
                        <button onClick={handleShow} style={{ background: "transparent", border: "none", color: "#fff" }}><span className="mx-5">Privacy Policy</span></button>
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>Privacy Policy </Modal.Title>
                                <FaTimes onClick={handleClose} />
                            </Modal.Header>
                            <Modal.Body>
                                Innova Solutions
                                (“Innova Solutions”, “we”, “us”) is committed to respecting your privacy and recognizes your need for appropriate protection and management of any personally identifiable information (“Personal Information”) you share with us. Innova Solutions has established this Privacy Policy to let you know what information we may collect from you on the publicly available portion of www.innovasolutions.pk (the “Site”) and through various other interactions with you, and how we may use and share that information. Please take a moment to review the terms of our Privacy Policy. By using the Site and/or providing us with Personal Information, you agree to accept the terms of our Privacy Policy. If you do not agree to the terms of this Privacy Policy, please do not use the Site or provide us with any Personal Information. This Privacy Policy applies to information that we collect on the Site and to information which we may collect by other “offline” means, including, without limitation, sales calls and other business transactions. A description of the information we collect on behalf of our advertiser clients through our advertising services is set out in our Notice of Marketing Practices.
                                Personal Information
                                Information We May Collect
                                Personal Information means any information that may be used to identify an individual, including, but not limited to, a first and last name, a home, business, or other physical address, a phone number, and an email address. We collect Personal Information from our Site users and customers only when such information is voluntarily provided to us, including, without limitation, in connection with inquiries about our services through the “Contact Us” page, as part of signing up for our email subscriptions, or in the process of your business transactions with us. To make our content more relevant to you, we may also ask for information about your present place of employment, such as company name, size, industry sector and number of employees. Of course, if you send us an email in connection with an inquiry about a job listed on the “Careers” page, we may also store the Personal Information provided in connection with that inquiry.
                                We also offer a variety of email subscriptions where you can get information about online marketing and promotions and special offers. You can subscribe to these emails and you can manage your email preferences. If you become a customer of Innova Solutions, we will always retain the right to email you regarding the Site or services that we’re providing to you.
                                How We May Use Your Information
                                If you provide us with Personal Information, we may retain and use that information for several purposes, including facilitating and otherwise addressing your inquiry, request, subscriptions, or business transactions and relationship with Innova Solutions. For example, we may use your Personal Information in order to respond to your questions or requests for information about Innova Solutions. We may also use Personal Information to ensure compliance with our policies and applicable law.
                                Who We May Share Your Information With
                                We may sometimes use other businesses to perform certain services for us, such as maintaining the Site and our e-mail services and processing inquiries. We may provide Personal Information to those businesses when that information is necessary for them to complete a requested transaction or otherwise perform their duties. Innova Solutions will take reasonable steps to ensure that these third-party service providers are obligated to protect Personal Information on Innova Solutions’s behalf. Innova Solutions will not sell or share your Personal Information with any unaffiliated third parties for marketing purposes. In the event that Innova Solutions or all of its assets are acquired, all of the data collected by Innova Solutions through the Site and through other means and services provided by Innova Solutions would be among the transferred assets. We reserve the right to disclose such information in special cases when we have reason to believe that disclosing this information is necessary to identify, contact, or bring legal action against someone who may be causing injury to or interference with (either intentionally or unintentionally) our rights or property, other visitors, or anyone else who could be harmed by such activities. We also reserve the right to disclose such information when we believe in good faith that the law requires it.
                                Non-Personal Information
                                From time to time, we may collect general, non-personal, statistical information about the use of the Site, such as what sites visitors are coming from when they visit our Site, when they first visited our Site, their IP address, how many visitors visit a specific page on the Site, how long they stay on that page and which hyperlinks, if any, they “click” on. We may use the IP address to infer information about such visitor, including its company, city and state. We collect this information through the use of “cookies” and other tracking technologies, which are discussed in greater detail below. We collect this information in order to determine which areas of the Site are most popular and to enhance the Site for visitors. We may group this information into aggregate visitor data in order to describe the use of the Site to our existing or potential business partners, sponsors, advertisers, or other third parties, or in response to a government request. However, please be assured that this aggregate data will in no way personally identify you or any other visitors to the Site.
                                Cookies and Other Tracking Technologies
                                Some of our web pages utilize “cookies” and other tracking technologies. A cookie is a small text file that a website transfers to an individual’s web browser and is stored on the device. Cookies and other tracking technologies may record information such as URL and domain requests, referral URL, Internet protocol (IP) addresses, browser software and operating system types, clickstream patterns, and dates and times that our Site gets accessed. We, and/or our third-party advertising service providers, may place cookies or similar files on your computer for security purposes (such as authentication), to facilitate site navigation and to personalize your experience while visiting our Site. Cookies allow us to collect technical and navigational information, such as browser type, time spent on our Site and pages visited (these types of cookies are typically referred to as “Session Cookies”). We also use cookies that enable us to serve advertisements of our products and services, including special offers, when you visit other websites (these cookies may be referred to as “Advertising Cookies”).
                                We do not obtain, store or maintain any Personal Information about you through our use of cookies (either the Session Cookies or the Advertising Cookies). Also, we do not link the information we store in cookies to any Personal Information you may submit while on the Site. However, we reserve the right to use IP addresses and other tracking technologies to identify a visitor only when we feel it is necessary to enforce compliance with the Site’s policies, to protect the Site, our customers, or others, or when we believe in good faith that the law requires it.
                                If you have any questions regarding Innova Solutions privacy practices, you are encouraged to contact Innova Solutions at info@innovasolutions.pk
                                Links to Other Sites; Public Venues test
                                Please be aware that when you are on the Site, you could be directed to other sites that are beyond our control via hyperlinks. For example, if you choose to use the Innova Solutions Directory at the Site, you may be sent to a third party website if you click on a hyperlink. These other websites may send their own cookies to visitors, collect data, or solicit Personal Information. The privacy policies of these other sites may be significantly different from this Privacy Policy. We are not responsible for the privacy practices of these other sites and cannot guarantee the security of any of your Personal Information collected there.
                                Security
                                The security of your Personal Information is important to us. We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data. We restrict access to personal information to Innova Solutions employees, contractors and agents who need to know that information in order to operate, develop or improve our services. These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution, if they fail to meet these obligations. For more information visit the Security page.
                                Children’s Privacy
                                This Site is not intended for use by children under 13. We do not knowingly collect Personal Information from anyone under 13 years of age. If we become aware that we have unknowingly collected Personal Information from a child under the age of 13, we will make commercially reasonable efforts to delete such information from our database.
                                Changes to Our Privacy Policy
                                The terms of this Privacy Policy may change from time to time. We will notify you of any material changes to this Privacy Policy by posting a notice on the homepage of the Site for a reasonable period of time after such changes are made that this Privacy Policy has been updated and by changing the “Last Modified” date at the top of this Privacy Policy. We encourage you to check this page periodically for any changes. Your continued use of the Site following the posting of changes to these terms will mean you accept those changes.
                                Governing Law
                                Innova Solutions makes no representation that this Privacy Policy and such practices comply with the laws of any other country. Visitors who use the Site and reside outside the Pakistan do so on their own initiative and are responsible for compliance with local laws, if and to the extent that local laws are applicable. If you reside outside of the Pakistan, by using our Site, you consent to the transfer and use of your information outside your country.
                                Contacting Us
                                If you have any comments or questions regarding our Privacy Policy, please contact us at info@innovasolutions.pk, or at our contact information below.

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                   
                </div>
            </Desktop>
            <Mobile>
                <div className='row gray '>
                
                    <div className='col-lg-6 d-flex align-items-center' >
                 
                        <div
                            style={{
                                backgroundColor: 'rgba(255, 201, 62, 1)',
                                borderRadius: '65px',
                                height: '200px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                color: 'white',
                                fontFamily: 'Montserrat',
                                fontWeight: '600',
                                fontSize: '10px',
                           
                                margin: "auto"
                            }}
                        >
                            <p className='text-dark fw-bold w-75'>Sign Up to Receive Product Updates and More</p>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '10px',
                                }}
                            >
                                <input
                                    type='email'
                                    placeholder='youremail@gmail.com'
                                    style={{
                                        border: 'none',
                                        borderBottom: '1px solid rgba(52, 67, 103, 1)',
                                        backgroundColor: 'transparent',
                                        padding: '5px',
                               

                                        color: 'rgba(52, 67, 103, 1)',
                                    }}
                                />

                                <FaChevronRight className='fas fa-chevron-right' style={{ color: 'rgba(52, 67, 103, 1)', cursor: 'pointer' }} />
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-12  ' >
                        <br />
                        <div className="align-items-center ">
                          
                            <h4 >Office</h4>
                    
                            Plot no 324 Block 7/8 CP Berar<br />
                            Society Dhoraji Karachi

                        </div>
                    
                    </div>
                    <div className='col-lg-12  ' >
                        <div className="align-items-start ">
                            <br />
                            <h4 >Contact</h4>
                      
                            02134120126 <br />
                            support@innovasolutions.pk
                        </div>
                    </div>

                    <div className="col-lg-12 copyright mx-auto d-flex mx-auto justify-content-center">  <br />
                        © All Rights Reserved
                    </div> 
                    <div className="col-lg-12 d-flex copyright text-center">  <br />
                    <br />                    <br /> <button onClick={handleShow} style={{ background: "transparent", border: "none", color: "#fff", margin: "auto" }}><span className="mx-auto">Privacy Policy</span></button>
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>Terms & Conditions</Modal.Title>
                                <FaTimes onClick={handleClose} />
                            </Modal.Header>
                            <Modal.Body>
                                Innova Solutions
                                (“Innova Solutions”, “we”, “us”) is committed to respecting your privacy and recognizes your need for appropriate protection and management of any personally identifiable information (“Personal Information”) you share with us. Innova Solutions has established this Privacy Policy to let you know what information we may collect from you on the publicly available portion of www.innovasolutions.pk (the “Site”) and through various other interactions with you, and how we may use and share that information. Please take a moment to review the terms of our Privacy Policy. By using the Site and/or providing us with Personal Information, you agree to accept the terms of our Privacy Policy. If you do not agree to the terms of this Privacy Policy, please do not use the Site or provide us with any Personal Information. This Privacy Policy applies to information that we collect on the Site and to information which we may collect by other “offline” means, including, without limitation, sales calls and other business transactions. A description of the information we collect on behalf of our advertiser clients through our advertising services is set out in our Notice of Marketing Practices.
                                Personal Information
                                Information We May Collect
                                Personal Information means any information that may be used to identify an individual, including, but not limited to, a first and last name, a home, business, or other physical address, a phone number, and an email address. We collect Personal Information from our Site users and customers only when such information is voluntarily provided to us, including, without limitation, in connection with inquiries about our services through the “Contact Us” page, as part of signing up for our email subscriptions, or in the process of your business transactions with us. To make our content more relevant to you, we may also ask for information about your present place of employment, such as company name, size, industry sector and number of employees. Of course, if you send us an email in connection with an inquiry about a job listed on the “Careers” page, we may also store the Personal Information provided in connection with that inquiry.
                                We also offer a variety of email subscriptions where you can get information about online marketing and promotions and special offers. You can subscribe to these emails and you can manage your email preferences. If you become a customer of Innova Solutions, we will always retain the right to email you regarding the Site or services that we’re providing to you.
                                How We May Use Your Information
                                If you provide us with Personal Information, we may retain and use that information for several purposes, including facilitating and otherwise addressing your inquiry, request, subscriptions, or business transactions and relationship with Innova Solutions. For example, we may use your Personal Information in order to respond to your questions or requests for information about Innova Solutions. We may also use Personal Information to ensure compliance with our policies and applicable law.
                                Who We May Share Your Information With
                                We may sometimes use other businesses to perform certain services for us, such as maintaining the Site and our e-mail services and processing inquiries. We may provide Personal Information to those businesses when that information is necessary for them to complete a requested transaction or otherwise perform their duties. Innova Solutions will take reasonable steps to ensure that these third-party service providers are obligated to protect Personal Information on Innova Solutions’s behalf. Innova Solutions will not sell or share your Personal Information with any unaffiliated third parties for marketing purposes. In the event that Innova Solutions or all of its assets are acquired, all of the data collected by Innova Solutions through the Site and through other means and services provided by Innova Solutions would be among the transferred assets. We reserve the right to disclose such information in special cases when we have reason to believe that disclosing this information is necessary to identify, contact, or bring legal action against someone who may be causing injury to or interference with (either intentionally or unintentionally) our rights or property, other visitors, or anyone else who could be harmed by such activities. We also reserve the right to disclose such information when we believe in good faith that the law requires it.
                                Non-Personal Information
                                From time to time, we may collect general, non-personal, statistical information about the use of the Site, such as what sites visitors are coming from when they visit our Site, when they first visited our Site, their IP address, how many visitors visit a specific page on the Site, how long they stay on that page and which hyperlinks, if any, they “click” on. We may use the IP address to infer information about such visitor, including its company, city and state. We collect this information through the use of “cookies” and other tracking technologies, which are discussed in greater detail below. We collect this information in order to determine which areas of the Site are most popular and to enhance the Site for visitors. We may group this information into aggregate visitor data in order to describe the use of the Site to our existing or potential business partners, sponsors, advertisers, or other third parties, or in response to a government request. However, please be assured that this aggregate data will in no way personally identify you or any other visitors to the Site.
                                Cookies and Other Tracking Technologies
                                Some of our web pages utilize “cookies” and other tracking technologies. A cookie is a small text file that a website transfers to an individual’s web browser and is stored on the device. Cookies and other tracking technologies may record information such as URL and domain requests, referral URL, Internet protocol (IP) addresses, browser software and operating system types, clickstream patterns, and dates and times that our Site gets accessed. We, and/or our third-party advertising service providers, may place cookies or similar files on your computer for security purposes (such as authentication), to facilitate site navigation and to personalize your experience while visiting our Site. Cookies allow us to collect technical and navigational information, such as browser type, time spent on our Site and pages visited (these types of cookies are typically referred to as “Session Cookies”). We also use cookies that enable us to serve advertisements of our products and services, including special offers, when you visit other websites (these cookies may be referred to as “Advertising Cookies”).
                                We do not obtain, store or maintain any Personal Information about you through our use of cookies (either the Session Cookies or the Advertising Cookies). Also, we do not link the information we store in cookies to any Personal Information you may submit while on the Site. However, we reserve the right to use IP addresses and other tracking technologies to identify a visitor only when we feel it is necessary to enforce compliance with the Site’s policies, to protect the Site, our customers, or others, or when we believe in good faith that the law requires it.
                                If you have any questions regarding Innova Solutions privacy practices, you are encouraged to contact Innova Solutions at info@innovasolutions.pk
                                Links to Other Sites; Public Venues test
                                Please be aware that when you are on the Site, you could be directed to other sites that are beyond our control via hyperlinks. For example, if you choose to use the Innova Solutions Directory at the Site, you may be sent to a third party website if you click on a hyperlink. These other websites may send their own cookies to visitors, collect data, or solicit Personal Information. The privacy policies of these other sites may be significantly different from this Privacy Policy. We are not responsible for the privacy practices of these other sites and cannot guarantee the security of any of your Personal Information collected there.
                                Security
                                The security of your Personal Information is important to us. We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data. We restrict access to personal information to Innova Solutions employees, contractors and agents who need to know that information in order to operate, develop or improve our services. These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution, if they fail to meet these obligations. For more information visit the Security page.
                                Children’s Privacy
                                This Site is not intended for use by children under 13. We do not knowingly collect Personal Information from anyone under 13 years of age. If we become aware that we have unknowingly collected Personal Information from a child under the age of 13, we will make commercially reasonable efforts to delete such information from our database.
                                Changes to Our Privacy Policy
                                The terms of this Privacy Policy may change from time to time. We will notify you of any material changes to this Privacy Policy by posting a notice on the homepage of the Site for a reasonable period of time after such changes are made that this Privacy Policy has been updated and by changing the “Last Modified” date at the top of this Privacy Policy. We encourage you to check this page periodically for any changes. Your continued use of the Site following the posting of changes to these terms will mean you accept those changes.
                                Governing Law
                                Innova Solutions makes no representation that this Privacy Policy and such practices comply with the laws of any other country. Visitors who use the Site and reside outside the Pakistan do so on their own initiative and are responsible for compliance with local laws, if and to the extent that local laws are applicable. If you reside outside of the Pakistan, by using our Site, you consent to the transfer and use of your information outside your country.
                                Contacting Us
                                If you have any comments or questions regarding our Privacy Policy, please contact us at info@innovasolutions.pk, or at our contact information below.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>

                        </Modal>
                    </div>
                  
                </div>
            </Mobile> */}
        </>
    );
};

export default Footer;
