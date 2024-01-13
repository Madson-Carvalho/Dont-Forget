import './Contact.css';

import BaseLayoutPage from '../../components/base_layout_page/BaseLayoutPage';
import CustomInput from './../../components/custom_input/CustomInput';
import CustomTextArea from '../../components/custom_text_area/CustomTextArea';
import CustomInputSubmit from './../../components/custom_input_submit/CustomInputSubmit';

const Contact = ({isSidebarOpen, toggleSidebar}) => {
    return (
        <BaseLayoutPage title={'Fale Conosco'} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} >
            <form className='contactUs'>
                <CustomInput type={'text'} name={'name'} id={'name'} label={'Nome'} />
                <CustomInput type={'email'} name={'email'} id={'email'} label={'E-mail'} />
                <CustomTextArea name={'message'} id={'message'} columns={50} rows={5} label={'Mensagem'} />
                <CustomInputSubmit value={'Enviar'} />
            </form>
        </BaseLayoutPage>
    );
};

export default Contact;