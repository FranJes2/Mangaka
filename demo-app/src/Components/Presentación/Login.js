import './Login.css';
import {useState} from "react";
import {httpPost} from "../../utils/httpFunction";
import {useHistory} from 'react-router-dom'


const Login = () => {
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])

    const history = useHistory();

    const LoginScreen = (e) => {
        e.preventDefault()
        httpPost('api/login/', {username: username, password: password}).then((res) => {
        localStorage.setItem('token', res.data.access)
        history.push('/')})
    }


    return(
        <form className="LoginScreen" onSubmit={LoginScreen}>
            <div>
                Nombre de Usuario: <input
                type="text"
                id="exampleFormControlInput1"
                value={username}
                onChange={(e ) => setUsername(e.target.value)}/>
            </div>
            <div>
                Contraseña: <input
                type="password"
                id="exampleFormControlInput1"
                value={password}
                onChange={(e ) => setPassword(e.target.value)}/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Inicia Sesión</button>
            </div>
        </form>
    )
}
export default Login
