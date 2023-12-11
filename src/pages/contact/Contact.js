import BaseLayoutPage from '../../components/base_layout_page/BaseLayoutPage';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Contact.css'

const Contact = () => {
    return (
        <BaseLayoutPage title={'Fale Conosco'} >
            <form className='contactUs'>
                <input type="name" name="name" placeholder="Nome" />
                <input type="surname" name="surname" placeholder="Sobrenome" />
                <input type="email" name="email" placeholder="E-mail" />
                <textarea name="message" placeholder="Mensagem" rows="5" cols="50" ></textarea>
                <input id="idenviar" type="submit" value="Enviar" />
            </form>
        </BaseLayoutPage>
    );
};

export default Contact;