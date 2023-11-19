import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Login.css"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Header changecolors={false} />
            <div className="login_conteiner">
                <div>
                    <FontAwesomeIcon icon={faCircleUser} />
                    <form>
                        <input type="email" name="email" placeholder="E-mail" />
                        <input type="password" name="password" placeholder="Senha" />
                        <input id="idlogin" type="submit" value="Entrar" />
                    </form>
                    <Link to="#">Registre-se</Link>
                    <Link to="#">Esqueceu a senha?</Link>
                </div>
            </div>  
            <Footer />
        </div>
    )
}

export default Login;