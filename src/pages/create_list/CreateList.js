import "./CreateList.css"

const CreateList = () => {
    return (
        <div className="ListRegister">
            <div>
                <form>
                    <h1>Crie sua lista</h1>
                    <input type="title" name="title" placeholder="Nome da lista" />
                    <input type="description" name="description" placeholder="Adicione uma descrição" />
                    <input type="date" name="date" placeholder="Data" />
                    <input type="time" name="time" placeholder="Hora do Vencimento" />
                    <input type="type" name="type" placeholder="Tipo do item" />
                    <input type="" name="text" placeholder="Opções de recorrência" />
                    <input id="idbutton" type="submit" value="Criar" />
                </form>
            </div>
        </div >
    )
}

export default CreateList;