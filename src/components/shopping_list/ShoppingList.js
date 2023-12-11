import React, { useState } from 'react';

import './ShoppingList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faPlus, faShareNodes, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const ShoppingList = ({ title, data, cratedDate, canSee }) => {
    const [itens, setItens] = useState(data);

    const handleCheckboxChange = (itemId) => {
        setItens((prevItens) =>
            prevItens.map((item) =>
                item.id === itemId ? { ...item, selecionado: !item.selecionado } : item
            )
        );
    };

    return (
        <ul className="ulstily">
            <div className="listoption">
                <h2>{title}</h2>
                <p>Data de criação: {cratedDate}</p>
                <nav className='list-nav'>
                    {!canSee && <Link to="#" title='Favorito'><FontAwesomeIcon className='favorite' icon={faHeart} /></Link>}
                    <Link to="#" title='Compartilhar'><FontAwesomeIcon icon={faShareNodes} /></Link>
                    <Link to="#" title='Excluir'><FontAwesomeIcon className='trash' icon={faTrashCan} /></Link>
                    {!canSee && <Link to="#" title='Editar'><FontAwesomeIcon icon={faPenToSquare} /></Link>}
                    <Link to={`/create-list-intens?listName=${title}`}><FontAwesomeIcon icon={faPlus} /></Link>
                    {!canSee && <Link to="#" title='Notificação'><FontAwesomeIcon icon={faBell} /></Link>}
                </nav>
            </div>
            {canSee && itens.map((item) => (
                <li key={item.id}>
                    <input
                        type="checkbox"
                        id={`item-${item.id}`}
                        checked={item.selecionado || false}
                        onChange={() => handleCheckboxChange(item.id)}
                    />
                    <label htmlFor={`item-${item.id}`}>{item.nome}</label>
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList;