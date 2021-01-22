import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Main extends Component {
    

    render() {
        return (
            <div className="container">
                <div className="photo-container">
                    <img src="assets/Profile Photo.png" alt="Melanie's Profile Picture" className="card-img bio-image"/>
                </div>
                <h5 className="title-name">Melanie Hall</h5>
            <p className="short-bio">
                        High performing data analyst with 8+ years of finance and accounting experience turned software engineer through the Full-Stack bootcamp at the University of Richmond. With my mathematical background, strong logic based analyst skills and excellent presentation skills, I am more than just a full-stack web developer.
                </p>
                <div className="row justify-content-center short-bio links-row">
                    <div className="col-auto">
                        {/* change to redirect to new component */}
                        <Link className="highlight-me" to="/projects">Portfolio</Link>
                    </div>
                    <div className="col-auto">
                        <a className="highlight-me" href="assets/MelanieHallResume.pdf" download="Melanie_Hall_Resume">Resume</a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p className="descrp-text"><i className="fas fa-envelope"></i> hallmt313@gmail.com</p> 
                    </div>
                    <div className="col-auto">
                        <p className="descrp-text"><i className="fas fa-phone"></i> (804) 346-7909</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <i className="fab fa-github highlight-me"></i>
                    </div>
                    <div className="col-auto">
                        <i className="fab fa-linkedin highlight-me"></i>
                    </div>
                </div>            
            </div>
        )
    }
}

export default Main