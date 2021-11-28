import './Register.css';
import {useState} from "react";
import {useHistory} from "react-router-dom";
import * as url from "url";
import {httpPost2} from "../../utils/httpFunction";

const Registro = () => {
    const [username, setUsuario ] = useState( [])
    const [password, setPassword] = useState([])
    const [first_name, setName] = useState([])
    const [last_name, setLastname] = useState([])
    const history = useHistory()


    const createUsuario = (e) => {
        e.preventDefault()
        httpPost2('api/register/', {username: username, password: password, first_name: first_name, last_name: last_name })
            .then(()=> {history.push('/login')})
    }


    return (
        <div>
            <div className="main-div">
                <form onSubmit={createUsuario}>
                    <fieldset>
                        <legend>Registrate!</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Escribe tu nombre de usuario</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={username}
                                   onChange={(e) => setUsuario(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Escribe tu contraseña</label>
                            <input type="password" id="disabledTextInput" className="form-control" value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Escribe tu nombre</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={first_name}
                                   onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Escribe tu apellido</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={last_name}
                                   onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Registro
