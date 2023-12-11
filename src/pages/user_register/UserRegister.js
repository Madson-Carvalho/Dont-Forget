import './UserRegister.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import img from '../../images/wish list.png';
import { Link } from 'react-router-dom';

const UserRegister = () => {
    return (
        <div className="user-register">
            <Header />
            <div className="user-register-body">
                <img src={img} />
                <form>
                    <h2>Registre-se</h2>
                    <input type={'text'} name={'name'} placeholder={'Nome'} style={{ width: '80%' }} autoFocus={true} />
                    <fieldset>
                        <input type={'email'} name={'email'} placeholder={'E-mail'} />
                        <input type={'tel'} name={'phone'} pattern={'([0-9]{2}) [0-9]{5}-[0-9]{4}$'} placeholder={'Telefone'} />
                    </fieldset>
                    <fieldset>
                        <input type={'text'} name={'street'} placeholder={'Rua'} />
                        <input className='sm-size' type={'text'} name={'houseNumber'} placeholder={'Número'} />
                        <input className='sm-size' type={'text'} name={'cep'} placeholder={'CEP'} />
                    </fieldset>
                    <fieldset>
                        <input type={'text'} name={'neighborhood'} placeholder={'Bairro'} />
                        <input type={'text'} name={'city'} placeholder={'Cidade'} />
                    </fieldset>
                    <input type='password' name='password' placeholder='Senha' style={{ width: '80%' }} />
                    <Link to="/admin-home" id="idlogin" >Cadastrar</Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default UserRegister;