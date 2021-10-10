import './courses.css';
import {useState} from "react";

const Courses = () => {
    const subjets = ['Curso 1', 'Curso 2', 'Curso 3']

    return(
        <div>
            <div className="main-div">
                <h1 className="custom-title"> Crea tu propia Manga</h1>
                <p className="description">Cursos que te ayudarán a crear tu propia Manga</p>
            </div>
            {subjets.map((subjet) => {
                return (
                    <div className="contents">
                        <h2>{subjet}</h2>
                        <div className="row-picture-desc">
                            <img src="aprender-programacion-web.jpg" className="picture"/>
                            <p className="text1">
                                En este curso se veran diversos contenidos vinculados con la programación web, como por
                                ejemplo
                                JavaScript, CSS, React, Django y algunos otros conceptos avanzados.
                            </p>
                        </div>
                        <h3 className="price">
                            Precio: $1000
                        </h3>
                    </div>
                )})}
        </div>
    )
}



export default Courses