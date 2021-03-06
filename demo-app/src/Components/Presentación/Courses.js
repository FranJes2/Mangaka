import './courses.css';
import {useEffect, useLayoutEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import * as url from "url";
import {httpDelete, httpGet, httpPost2, httpPut} from "../../utils/httpFunction";
import {httpPost} from "../../utils/httpFunction";


const Courses = () => {

    const [courses, setCourses ] = useState( [])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [price, setPrice] = useState([])
    const [id, setId] = useState([])
    const [filtered, setFiltered] = useState(false)
    const [show, setshow] = useState(false);
    const [topprice, setTopprice] = useState([])


    const clickFunction = () => {
        setFiltered(!filtered)
    }

    const getName = () => {
        return filtered ? "Dejar de buscar" : "Buscar"
    }


    const fetchCourses = () => {
        if (filtered) {
            httpGet('api/courses/?topprice=' + topprice)
                .then((res) => setCourses(res.data))
        } else {
        httpGet('api/courses/')
            .then((res) => setCourses(res.data))
    }}



    const createCourse = (e) => {
        e.preventDefault()
        httpPost('api/courses/', { name: name, description: description, price: price})
            .then(fetchCourses)
    }

    const deleteCourse = (courseId) => {
        httpDelete('api/courses/'+ courseId + "/")
            .then(fetchCourses)
    }

    const editCourse = (courseId) => {
        httpPut('api/courses/'+ courseId + "/", {name: name, description: description, price: price})
            .then(fetchCourses)
    }


    const handleModalClose = (e) => {
        const CurrentClass = e.target.className;
        if (CurrentClass === 'main-div'){
            return;
        }
        setshow(false);
    }

    const handleModalOpen = () =>{
        setshow(true);
    }


        useEffect(fetchCourses, [filtered])

    return(
        <div className="Sekai">

            <div className="main-div">
                <form onSubmit={createCourse}>
                    <fieldset>
                        <legend>CREAR UN NUEVO CURSO</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Name</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Description</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={description}
                                   onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Price</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={price}
                                   onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">CREAR CURSO</button>
                    </fieldset>
                </form>
            </div>


            <div className="main-div">
                <h1 className="custom-title"> Convertite en Mangaka! Eleg?? el curso que es para vos</h1>
                <p className="description">Aprend?? a crear tus propios personajes e historias con estilo manga</p>
            </div>

            <div>
                <p className="description"> Indic?? el importe m??ximo dispuesto a abonar</p>
                <input type="number" className="form-control"
                       onChange={(e) => setTopprice(e.target.value)}/>
                 <button className="btn btn-primary" onClick={clickFunction}>
                    {getName()}
                 </button>
            </div>



            <div className="all-cards">
                {courses.map((course) => {
                    return (
                        <div className="contents" key={course.id}>
                            <h2 className="title">{course.name}</h2>
                            <div className="row-picture-desc">
                                <p className="text1">
                                    {course.description}
                                </p>
                            </div>
                            <div className="row-picture-desc">
                                <p className="text1">
                                    {course.price}
                                </p>
                            </div>
                            <div className="button">
                                <button type="button" className="btn btn-outline-danger" onClick={() =>deleteCourse(course.id)}>Eliminar</button>
                                <button type="button" className="btn btn-outline-danger" onClick={() =>handleModalOpen()}>Editar</button>
                            </div>
                            <div hidden={!show}>
                                <div className="main-div">
                                    <form onSubmit={editCourse}>
                                        <fieldset>
                                            <legend>Actualizar los datos</legend>
                                            <div className="mb-3">
                                                <label htmlFor="disabledTextInput" className="form-label">Name</label>
                                                <input type="text" id="disabledTextInput" className="form-control" value={name}
                                                       onChange={(e) => setName(e.target.value)}/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="disabledTextInput" className="form-label">Description</label>
                                                <input type="text" id="disabledTextInput" className="form-control" value={description}
                                                       onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="disabledTextInput" className="form-label">Price</label>
                                                <input type="text" id="disabledTextInput" className="form-control" value={price}
                                                       onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                                <div className="button">
                                    <button type="button" className="btn btn-outline-danger" onClick={() =>editCourse(course.id)}>ACTUALIZAR</button>
                                    <button type="button" className="btn btn-outline-danger" onClick={handleModalClose}>Cerrar</button>
                                </div>
                            </div>
                        </div>
                    )})
                        }

            </div>
        </div>
    )
}
export default Courses;