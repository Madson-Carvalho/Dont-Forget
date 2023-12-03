import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import loginImg from '../../images/Login-rafiki.png';

function Login() {
    return (
        <div className="login">
            <div className="login_conteiner">
                <img id="imagemlogin" src={loginImg} />
                <div>
                    <FontAwesomeIcon icon={faCircleUser} />
                    <form>
                        <input type="email" name="email" placeholder="E-mail" />
                        <input type="password" name="password" placeholder="Senha" />
                        <input id="idlogin" type="submit" value="Entrar" />
                    </form>
                    <Link to="/register">Registre-se</Link>
                    <Link to="#">Esqueceu a senha?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;