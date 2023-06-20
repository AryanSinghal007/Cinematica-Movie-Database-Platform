import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./components/Homepage";
import Movies from "./components/Movies";
import About from "./components/About";
import Contact from "./components/Contact";


const { Content } = Layout;

const App = () => {
    return (

        <Router>
            <div>
                <Navbar />
            </div>
            <div>
                <Layout >
                    <Content>
                        <div >
                            <Routes>
                                <Route path="/" element={<Homepage />} />
                                <Route path="/movies" element={<Movies />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </div>
                    </Content>
                </Layout>
            </div>
            <div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;