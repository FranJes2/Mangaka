import './Register.css';
import {useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as url from "url";
import {httpGet} from "../../utils/httpFunction";
import {httpPost} from "../../utils/httpFunction";

const Registro = () => {

const [usuario, setUsuario ] = useState( [])
const [name, setName] = useState([])
const [password, setPassword] = useState([])
const [fechadenac, setFechadenac] = useState([])
const [telephone, setTelephone ] = useState( [])
const [pgweb, setPgweb] = useState([])
const [country, setCountry] = useState([])
const [city, setCity] = useState([])
const [trabajos, setTrabajos] = useState([])



const fetchUsuario= () => {
    httpGet('api/Usuario/')
        .then((res) => setUsuario(res.data))
}

const createUsuario = () => {
    httpPost('api/Usuario/', { })
        .then(fetchUsuario)
}

useEffect(fetchUsuario, [])


    return (
        <form className={"FOREVER"} onSubmit={createUsuario}>
            Escribe tu Apellido y Nombre:
            <input type="text"
                   name="NombreCompleto"
                   onChange={(e) => setName(e.target.value)}
                   placeholder={"Nombre Completo"}/>
            Crea una Contraseña:
            <input type="password"
                   name="contraseña"
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder={"**********"}/>
            Fecha de Nacimiento:
            <input type="date"
                   name="fecha"
                   onChange={(e) => setFechadenac(e.target.value)}
                   min="1900-01-01"
                   max="2021-11-19"
                   step="1" />
            Teléfono:
            <input type="tel"
                   name="telefono"
                   onChange={(e) => setTelephone(e.target.value)}
                   placeholder="+XX XXX XXXXXXX" />
            Email:
            <input type="email"
                   name="correo"
                   onChange={(e) => setUsuario(e.target.value)}
                   placeholder="nombre@dominio.com" />
            Página Web:
            <input type="url"
                   name="web"
                   onChange={(e) => setPgweb(e.target.value)}
                   placeholder="https://pagina.com/" />
            <label>Por favor, complete su ubicación:</label>
                País:
            <input type="text"
                   name="país"
                   onChange={(e) => setCountry(e.target.value)}
                   size="20"/>
                Ciudad:
            <input type="text"
                   name="ciudad"
                   onChange={(e) => setCity(e.target.value)}
                   size="20"/>
            Trabajos (opcional):
            <input type="file"
                   name="adjunto"
                   onChange={(e) => setTrabajos(e.target.value)}
                   accept=".pdf,.jpg,.png" multiple />
              <div className={"DECO"}>
                  <input type="checkbox"  name="acepto"/> Acepto los términos del contrato de suscripción
                </div>
            <div className={"Btts"}>
                <input type="reset" value="Borrar" className="btn btn-outline-danger btn-lg"/>
                <input type="button" value="Enviar" onClick="verificarCasilla(this.form)" class="btn btn-outline-success btn-lg"/>
            </div>
        </form>
    )
}

export default Registro
