import './Login.css';
import {useState} from "react";
import {Link} from "react-router-dom";


const Login = () => {
    return(
        <form className={"Loggiinn"}>
            <div>
                <label>Email address</label>
                <input type="email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password"/>
            </div>
            <div>
                <input type="checkbox" id="btn-check-outlinedCheck" autocomplete="off"/>
                    <label for="btn-check-outlined">Acepto</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Login