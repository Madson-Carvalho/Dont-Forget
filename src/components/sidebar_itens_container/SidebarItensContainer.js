import './SidebarItensContainer.css';

const SidebarItensContainer = ({children}) => {
    return (
        <ul className='itens-container'>
            {children}
        </ul>
    )
}

export default SidebarItensContainer;