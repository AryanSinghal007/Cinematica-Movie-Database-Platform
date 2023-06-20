import React from "react";
import { Link } from 'react-router-dom';
import popcorn from "../Images/popcorn-vector.png";

const Homepage = () => {

    return (
        <div className="app home">
            <div className="row">
                <div className="col-lg-6">
                    <div>
                        <h1 className="homepage-cinema">CINEMATICA</h1>
                    </div>
                    <h2 className="big-heading">Dive into the world of cinema</h2>
                    <p className="Homepage-content">
                        With Cinematica, you can effortlessly dive into a vast collection of films, unlocking a world of entertainment possibilities at your fingertips. Whether you're in the mood for thrilling action, heartwarming romance, gripping suspense, or thought-provoking documentaries, Cinematica has you covered.
                    </p>
                    <Link to="/movies" className="btn btn-outline-light btn-lg search-button">
                        Get Started
                    </Link>
                </div>
                <div className="col-lg-6">
                    <img className="popcorn-img" src={popcorn} alt="popcorn-mockup" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
