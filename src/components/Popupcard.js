import "./card.css"
import { useState, useRef } from "react";

const Popupcard = () => {

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
  return (
    <div>

      <div className="khaplu_modal" id="khaplu_modal" bis_skin_checked="1" style={{ display: "block" }}></div><div className="main_khaplu_popup" id="main_khaplu_popup" bis_skin_checked="1" style={{ top: "50%", opacity: "1" }}><div className="khaplu_popup" bis_skin_checked="1"><a href="/"><button className="khaplu_secondary_btn" id="khaplu_close_btn " fdprocessedid="d670xg"><img src="cancel.png" alt="" /></button></a><div className="khaplu_header" bis_skin_checked="1"><h2 className="khaplu_title">Get in touch</h2><p className="khaplu_para">To schedule a consultation, <span>please send us your details.</span></p>
      </div>
        <div className="khaplu_body" bis_skin_checked="1">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="khaplu_group">
              <div className="khaplu_field" id="khaplu_fld1">
                <input type="text" name="name" className={formErrors.name ? "error-input" : ""} placeholder="Enter Your Name*" fdprocessedid="cey873"    value={formData.name} onChange={handleInputChange} />
                {formErrors.name && (
                  <p className="error-message">Please enter your name</p>
                )}
              </div>
              <div className="khaplu_field" id="khaplu_fld2">
                <input type="email" name="email" className={formErrors.email ? "error-input" : ""} placeholder="Enter Email Address*" fdprocessedid="bwmf8"    value={formData.email} onChange={handleInputChange} />
                {formErrors.name && (
                  <p className="error-message">Please enter your email</p>
                )}
              </div>
            </div>
            <div className="khaplu_field" id="khaplu_fld3">
              <input type="number" name="phone" className={formErrors.phone ? "error-input" : ""} placeholder="Enter Phone Number*" fdprocessedid="fanf5"   value={formData.phone} onChange={handleInputChange} />
              {formErrors.name && (
                <p className="error-message">Please enter your Phone Number</p>
              )} </div>
            <div className="khaplu_field" id="khaplu_fld4">
              <textarea id="message" name="message" className={formErrors.message ? "error-input" : ""} placeholder="Write a message*"    value={formData.message} onChange={handleInputChange} >
                {formErrors.name && (
                  <p className="error-message">Please enter your message</p>
                )}
              </textarea>
            </div>
            <div className="khaplu_field" id="khaplu_fld5">
              <input type="submit" className="khaplu_submit" name="submit" fdprocessedid="jm4kmc" value="Submit Now" />
            </div>

          </form>
        </div>
      </div>
        {submissionMessage && (
          <p className="submission-message text-center text-dark">{submissionMessage}</p>
        )}
      </div>

    </div>

  )
}

export default Popupcard