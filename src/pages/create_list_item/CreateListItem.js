import './CreateListItem.css';

import BaseLayoutPage from '../../components/base_layout_page/BaseLayoutPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faShareNodes, faTrashAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CustomInput from './../../components/custom_input/CustomInput';
import CustomInputSubmit from './../../components/custom_input_submit/CustomInputSubmit';
import CustomSelect from '../../components/custom_select/CustomSelect';
import img from '../../images/default-user-2.avif';

const CreateListItem = ({ isSidebarOpen, toggleSidebar }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('listName');

    const [itemName, setItemName] = useState('');
    const [items, setItems] = useState([]);
    const [disabled, setDisabled] = useState(true);

    const handleAddItem = () => {
        setItems([...items, itemName]);
        setItemName('');
    };

    const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const handleEditItem = (index) => {
        setDisabled(true);
        const editedItem = items[index];
        if (editedItem !== null) {
            const updatedItems = [...items];
            updatedItems[index] = editedItem;
            setItems(updatedItems);
        }
    };

    const options = [
        { value: 'unidade', name: 'Un' },
        { value: 'litro', name: 'L' },
        { value: 'caixa', name: 'Cx' },
        { value: 'quilo', name: 'Kg' }
    ];

    return (
        <BaseLayoutPage title={`Adicionar itens: ${myParam}`} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <div className='create-item-content'>
                <div className='create-list-item'>
                    <CustomInput type={"text"} name={"itemName"}
                        id={"itemName"} label={'Nome do Item'} />
                    <CustomInput type={"number"} name={'quantity'}
                        id={'quantity'} label={'Quantidade'} min={0} />
                    <CustomSelect name={'unitOfMeasurement'} id={'unitOfMeasurement'}
                        options={options} label={'Unidade de Medida'} />
                    <CustomInput type={'text'} name={'brand'}
                        id={'brand'} label={'Marca'} />
                    <CustomInput type={'file'} name={'image'}
                        id={'image'} label={'Imagem do Produto'} />
                    <CustomInputSubmit value={'Adicionar'} />
                </div>
                <div className='list-preview'>
                    <h2>Pré-Visualização da Lista</h2>
                    <div className='preview-item'>
                        <div className='preview-item-header'>
                            <img src={img} />
                            <p>titulo</p>
                            <div className='action-buttons'>
                                <button title='Editar'><FontAwesomeIcon icon={faEdit} /></button>
                                <button title='Excluir'><FontAwesomeIcon icon={faTrashAlt} /></button>
                            </div>
                        </div>
                        <div className='preview-item-content'>
                            <p>marca</p>
                            <p>quantidade</p>
                            <p>kg</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='new-list-item-content'>
                <div className='new-list-item-header'>
                    <h2>{myParam}</h2>
                    <nav className='list-item-nav'>
                        <Link to="#" title='Compartilhar'><FontAwesomeIcon icon={faShareNodes} /></Link>
                        <Link to="#" title='Excluir'><FontAwesomeIcon icon={faTrashCan} /></Link>
                    </nav>
                </div>
                <hr />
                <div className='itens'>
                    {items.map((item, index) => (
                        <div key={index} className='item'>
                            <input type='text' disabled={disabled} value={item} />
                            <div>
                                <button onClick={() => handleEditItem(index)} title='Editar'><FontAwesomeIcon icon={faEdit} /></button>
                                <button onClick={() => handleRemoveItem(index)} title='Excluir'><FontAwesomeIcon icon={faTrashAlt} /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='add-item-container'>
                        <form>
                            <CustomInput type={"text"} name={"itemName"}
                            id={"itemName"} label={'Nome do Item'} />
                            <CustomInput type={"number"} name={'quantity'}
                            id={'quantity'} label={'Quantidade'} />
                            <CustomInput type={'text'} name={'brand'}
                            id={'brand'} label={'Marca'} />
                            <CustomInput type={'file'} name={'image'}
                            id={'image'} label={'Imagem do Produto'} />
                            <CustomInputSubmit value={'Adicionar'} />
                        </form>
                    <input
                        type='text'
                        placeholder='Nome do Item'
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <button onClick={handleAddItem} title='Adicionar Item'>Adicionar Item</button>
                </div>
            </div> */}
        </BaseLayoutPage>
    )
}

export default CreateListItem;