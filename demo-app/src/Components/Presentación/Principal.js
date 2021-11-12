import './Logueo.html';
import {useState} from "react";
import {Link} from "react-router-dom";

const Principal = () => {

    return (
                        <div className ="button">
                            <Link to={`/Logueo`}><button type="button">Inicia Sesión</button></Link>
                        </div>
                            )
}

export default Principal