import './courses.css';
import {useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as url from "url";
import {httpGet} from "../../utils/httpFunction";


const Courses = () => {

    const subjects = ['Curso Principiantes', 'Curso Intermedio', 'Curso Avanzado']

    const [courses, setCourses ] = useState( initialState: [])

    const fetchCourses = () => {
        httpGet('api/courses/')
            .then((data :void) = setCourses(data))
    }
    useEffect(fetchCourses, [])



    return(
        <div className="Sekai">
            <div className="main-div">
                <h1 className="custom-title"> Convertite en Mangaka!</h1>
                <p className="description">Aprende desde cero a crear tus propios personajes y tus propias historias con estilo manga.</p>
            </div>
            {subjects.map((subject) => {
                return (
                    <div className="contents">
                            <h2 className="title">{subject}</h2>
                            <div className="row-picture-desc">
                                <p className="text1">
                                    Curso para principiantes, donde aprenderás las técnicas del dibujo  japonés para la creación de tu propia manga.
                                </p>
                            </div>
                            <div className ="button">
                                <Link to={`/Courses/detail/${subject}`}><button type="button" className="btn btn-outline-danger">+Info</button></Link>
                            </div>
                    </div>
                )})}
        </div>
    )
}



export default Courses