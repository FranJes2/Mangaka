import '';
import {useState} from "react";
import {Link} from "react-router-dom";

const Registro = () => {
    return (
        <div className="button">
            <Link to={`/Registro.html`}>
                <button type="button">Registro</button>
            </Link>
        </div>
    )
}
export default Registro