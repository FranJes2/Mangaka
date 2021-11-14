import './BibliotecaS.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import Courses from "./Courses";


const Biblioteca = () => {
    return(
        <div id="carouselExampleIndicators" className="carousel_slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="DrawNezuko.jpg"/>
                </div>
                <div className="carousel-item" class="d-block w-100">
                    <img src="Fushiguro.jpg"/>
                </div>
                <div className="carousel-item">
                    <img src="HaruAndAkihiko.jpg"/>
                </div>
                <div className="carousel-item">
                    <img src="JotunHusbando.jpg"/>
                </div>
                <div className="carousel-item">
                    <img src="Kocho_Shinobu.jpg"/>
                </div>
                <div className="carousel-item">
                    <img src="LevyandGajeel.jpg"/>
                </div>
                <div className="carousel-item">
                    <img src="LoveIsFree.jpg"/>
                </div>
                <div className="carousel-item">
                    <img src="RebeccaRun.jpg"/>
                </div>
                <div className="carousel-item">
                    <img src="SisterVS.jpg"/>
                </div>
                <div className="carousel-item">
                    <img src="SuperMANN.jpg"/>
                </div>
                <div className="carousel-item">
                    <img src="SisterAndKelene.jpg"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )}


export default Biblioteca