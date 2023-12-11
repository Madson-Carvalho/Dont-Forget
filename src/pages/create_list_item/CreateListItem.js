import './CreateListItem.css';

import BaseLayoutPage from '../../components/base_layout_page/BaseLayoutPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faShareNodes, faTrashAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CreateListItem = () => {
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

    return (
        <BaseLayoutPage title={`Adicionar itens: ${myParam}`}>
            <div className='new-list-item-content'>
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
                    <input
                        type='text'
                        placeholder='Nome do Item'
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <button onClick={handleAddItem} title='Adicionar Item'>Adicionar Item</button>
                </div>
            </div>
        </BaseLayoutPage>
    )
}

export default CreateListItem;