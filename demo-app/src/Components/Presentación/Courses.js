import './courses.css';
import {useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as url from "url";
import {httpGet} from "../../utils/httpFunction";
import {httpPost} from "../../utils/httpFunction";


const Courses = () => {

    const [courses, setCourses ] = useState( [])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [price, setPrice] = useState([])

    function SubjectCard ({subject}) {
        return (
            <div className="contents">
                <h2 className="title">{subject.name}</h2>
                <div className="row-picture-desc">
                    <p className="text1">
                        {subject.description}
                    </p>
                </div>
                <div className="button">
                    <Link to={`/Courses/detail/${subject.name}`}>
                        <button type="button" className="btn btn-outline-danger">Comprar</button>
                    </Link>
                </div>
            </div>
        )
    }

    const fetchCourses = () => {
        httpGet('api/courses/')
            .then((res) => setCourses(res.data))
    }

    const createCourse = () => {
        httpPost('api/courses/', { name: name, description: description, price: price})
            .then(fetchCourses)
    }

    useEffect(fetchCourses, [])

    return(
        <div className="Sekai">
            <div className="main-div">
                <h1 className="custom-title"> Convertite en Mangaka!</h1>
                <p className="description">Aprende desde cero a crear tus propios personajes y tus propias historias con estilo manga.</p>
            </div>
            <div className="main-div">
                <form onSubmit={createCourse}>
                    <fieldset>
                        <legend>Crear un nuevo curso</legend>
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
            <div className="all-cards">
                {
                    SubjectCard
                        .map((mapSubject) => {
                            return (
                                <SubjectCard subject={mapSubject}/>
                            )
                        })
                }
            </div>
        </div>
    )
}



export default Courses