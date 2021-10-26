import {useParams} from "react-router-dom";

const CourseDetail = ({name, description, hours, price}) =>{
    let {id} = useParams()
    return (
        <div>
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h2>{hours}</h2>
            <h2>{price}</h2>
        </div>
    )
}

export default CourseDetail
