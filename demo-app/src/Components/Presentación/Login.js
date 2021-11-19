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
        httpPost('api/login', {username: username, password: password}).then((res) => {
        localStorage.setItem('token', res.data.access)
        history.push('/main')})
    }


    return(
        <form className="LoginScreen" onSubmit={Login}>
            <div>
                Email: <input
                type="email"
                id="exampleFormControlInput1"
                value={username}
                onChange={(e ) => setUsername(e.target.value)}
                placeholder="nombre@dominio.com" />
            </div>
            <div>
                Contraseña: <input
                type="password"
                id="exampleFormControlInput1"
                value={password}
                onChange={(e ) => setPassword(e.target.value)}
                placeholder="**********"/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Inicia Sesión</button>
            </div>
        </form>
    )
}
export default Login
