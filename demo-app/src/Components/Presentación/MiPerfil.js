import {useEffect, useState} from "react";
import './MiPerfil.css';
import {httpGet, httpGet2} from "../../utils/httpFunction";

const Profile = () => {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        httpGet2('api/me/').then((res) => setUserData(res.data))
    }, [])

    return(
    <div className={'Perfil'}>
        <h2>Ohayo!! Este es mi perfil</h2>
        <h3>Mi nombre de usuario es {userData.username}</h3>
    </div>)
}

export default Profile