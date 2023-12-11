import { Link } from "react-router-dom";
import "./MyLists.css"

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faPlus, faShareNodes, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const MyLists = () => {
    const [itens, setItens] = useState([
        { id: 1, nome: 'Pão' },
        { id: 2, nome: 'Leite' },
        { id: 3, nome: 'Ovos' },
        { id: 4, nome: 'Frutas' },
        { id: 5, nome: 'Óleo' },
        { id: 6, nome: 'Verduras' },
    ]);

    const handleCheckboxChange = (itemId) => {
        setItens((prevItens) =>
            prevItens.map((item) =>
                item.id === itemId ? { ...item, selecionado: !item.selecionado } : item
            )
        );
    };

    return (
        <div className="listBody">
            <h1>Suas listas de compras</h1>
            <div>
                <ul className="ulstily">
                    <div className="listoption">
                    <h2>Minha lista</h2>
                    <Link to="#"><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to="#"><FontAwesomeIcon icon={faShareNodes}/></Link>
                    <Link to="#"><FontAwesomeIcon icon={faTrashCan}/></Link>
                    <Link to="#"><FontAwesomeIcon icon={faPenToSquare}/></Link>
                    <Link to="#"><FontAwesomeIcon icon={faPlus}/></Link>
                    </div>
                    {itens.map((item) => (
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
            </div>
        </div>
    );
};

export default MyLists;
