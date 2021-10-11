import './courses.css';
import {useState} from "react";

const Courses = () => {
    const subjets = ['Curso 1', 'Curso 2', 'Curso 3']

    return(
        <div>
            <div className="main-div">
                <h1 className="custom-title"> Convertite en Mangaka!</h1>
                <p className="description">Aprende desde cero a crear tus propios personajes y tus propias historias con estilo manga.</p>
            </div>
            {subjets.map((subjet) => {
                return (
                    <div className="contents">
                            <h2 className="title">{subjet}</h2>
                            <div className="row-picture-desc">
                                <p className="text1">
                                    Curso para principiantes, donde aprenderás las técnicas del dibujo  japonés para la creación de tu propia manga.
                                </p>
                            </div>
                            <div className ="button">
                                <button type="button" className="btn btn-outline-danger">+Info</button>
                            </div>
                    </div>
                )})}
        </div>
    )
}



export default Courses