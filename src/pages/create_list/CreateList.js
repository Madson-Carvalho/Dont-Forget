import "./CreateList.css";

import BaseLayoutPage from "../../components/base_layout_page/BaseLayoutPage";
import CustomInput from "../../components/custom_input/CustomInput";
import CustomInputSubmit from "../../components/custom_input_submit/CustomInputSubmit";

const CreateList = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <BaseLayoutPage title={'Adicionar Lista'} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} >
            <form className="ListRegister">
                <CustomInput name={'title'} type={'text'} id={'title'} label={'Nome da lista'} />
                <CustomInput name={'description'} type={'text'} id={'description'} label={'Adicione uma descrição'} />
                <CustomInput name={'date'} type={'datetime-local'} id={'date'} label={'Data e Hora'} />
                <CustomInput name={'type'} type={'text'} id={'type'} label={'Tipo do item'} />
                <CustomInput name={'title'} type={'text'} id={'title'} label={'Opções de recorrência'} />
                <CustomInputSubmit value={'Salvar'} />
            </form>
        </BaseLayoutPage>
    )
}

export default CreateList;