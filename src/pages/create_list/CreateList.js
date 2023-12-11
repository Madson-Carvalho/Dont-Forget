import "./CreateList.css";

import BaseLayoutPage from "../../components/base_layout_page/BaseLayoutPage";

const CreateList = () => {
    return (
        <BaseLayoutPage title={'Adicionar Lista'} >
            <form className="ListRegister">
                <input type="title" name="title" placeholder="Nome da lista" />
                <input type="description" name="description" placeholder="Adicione uma descrição" />
                <input type="date" name="date" placeholder="Data" />
                <input type="time" name="time" placeholder="Hora do Vencimento" />
                <input type="type" name="type" placeholder="Tipo do item" />
                <input type="" name="text" placeholder="Opções de recorrência" />
                <input id="idbutton" type="submit" value="Criar" />
            </form>
        </BaseLayoutPage>
    )
}

export default CreateList;