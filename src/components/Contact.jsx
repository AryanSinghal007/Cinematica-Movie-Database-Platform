import React from "react";
import contact from "../Images/contact-us.png";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            alert("Response recorded successfully!");

            // Redirect to the home page after the alert
            window.location.href = "/";
        }, 1000);
    };

    return (
        <div className="app">
            <h1 className="contact-us-heading">Contact Us</h1>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Enter Your E-Mail" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Enter Your Message" required></textarea>
                            </div>
                            <button className="submit-button" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-image">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={contact} alt="Contact Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
