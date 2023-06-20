import React from "react";
import about1 from "../Images/about1.png";

const About = () => {
    return (
        <div className="app home">
            <div className="row">
                <div className="col-lg-6">
                    <div>
                        <h1 className="about-heading-main">About Us</h1>
                    </div>
                    <h1 className="about-heading">What we offer</h1>
                    <p className="about-content">
                        Cinematica is more than just a movie search engine, it's a hub for film enthusiasts, providing an interactive platform for sharing and discovering movie recommendations. Connect with fellow movie lovers, browse curated lists, and engage in lively discussions about your favorite films. Expand your movie knowledge and become part of a vibrant community that shares your passion for the silver screen.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img className="about-img" src={about1} alt="popcorn-mockup" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <img className="about-img-second" src="https://cdn.pixabay.com/photo/2013/07/12/13/56/film-reel-147631_1280.png" alt="popcorn-mockup" />
                </div>
                <div className="col-lg-6">
                    <p className="about-content-second">
                        Explore our extensive library and embark on a cinematic journey tailored to your preferences. Simply enter your desired movie category, and Cinematica's intelligent search algorithm will curate a personalized selection of movies for you. From timeless classics to the latest releases, Cinematica ensures that you stay up-to-date with the most captivating and diverse cinematic experiences available.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;
