import './AddNewFriend.css';

import BaseLayoutPage from '../../components/base_layout_page/BaseLayoutPage';
import CustomInput from '../../components/custom_input/CustomInput';
import CustomInputSubmit from '../../components/custom_input_submit/CustomInputSubmit';

const AddNewFriend = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <BaseLayoutPage title={'Adicionar Novo Amigo'} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <div className='new-friend'>
                <CustomInput id={'name'} name={'name'} type={'text'} label={'Nome'} />
                <CustomInput id={'email'} name={'email'} type={'email'} label={'E-mail'} />
                <CustomInput id={'phone'} name={'phone'} type={'tel'} label={'Telefone'} />
                <CustomInput id={'photo'} name={'photo'} type={'file'} label={'Foto'} />
                <CustomInputSubmit value={'Salvar'} />
            </div>
        </BaseLayoutPage>
    )
}

export default AddNewFriend;