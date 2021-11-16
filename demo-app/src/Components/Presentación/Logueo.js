import './Login.css';
import {useState} from "react";
import {Link} from "react-router-dom";


const Login = () => {
    return(
        <picture>
            <img src= "Sticker.png" alt="Mangaka"/>
        <form className={"Loggiinn"}>
            <div>
                Email: <input type="email" name="correo" placeholder="nombre@dominio.com" />
            </div>
            <div>
                Contraseña: <input type="password" name="contraseña" placeholder={"**********"}/>
            </div>
            <div>
                <input type="checkbox" id="btn-check-outlinedCheck" autocomplete="off"/>
                    <label for="btn-check-outlined">Mantener Sesión</label>
            </div>
            <button type="submit">Submit</button>
        </form>
        </picture>
    )
}
export default Login