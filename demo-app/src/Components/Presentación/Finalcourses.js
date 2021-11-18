import {Link} from "react-router-dom";

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
