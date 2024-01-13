import "./MyLists.css"

import React, { useState } from 'react';
import BaseLayoutPage from "../../components/base_layout_page/BaseLayoutPage";
import ShoppingList from "../../components/shopping_list/ShoppingList";

const MyLists = ({isSidebarOpen, toggleSidebar}) => {

    const itens = [
        { id: 1, nome: 'Pão' },
        { id: 2, nome: 'Leite' },
        { id: 3, nome: 'Ovos' },
        { id: 4, nome: 'Frutas' },
        { id: 5, nome: 'Óleo' },
        { id: 6, nome: 'Verduras' },
    ];

    const itensPharma = [
        { id: 1, nome: 'Protetor solar' },
        { id: 2, nome: 'Pós sol' },
        { id: 3, nome: 'Creme de pele' },
    ];

    return (
        <BaseLayoutPage title={'Minhas listas'} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} >
            <div className="all-lists">
                <ShoppingList title={'Compras Mercado'} data={itens} cratedDate={'23/05/2023'} canSee={false} />
                <ShoppingList title={'Compras Farmácia'} data={itensPharma} cratedDate={'11/12/2023'} canSee={false} />
                <ShoppingList title={'Compras Farmácia'} data={itensPharma} cratedDate={'11/12/2023'} canSee={false} />
            </div>
        </BaseLayoutPage>
    );
};

export default MyLists;
