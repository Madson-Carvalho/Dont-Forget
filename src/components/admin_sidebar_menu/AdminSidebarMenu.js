import './AdminSidebarMenu.css';

import logo from '../../images/df-logo-circle-removebg-preview.png';
import defaultUser from '../../images/default-user-2.avif';

import SidebarItem from '../sidebar_item/SidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHeart, faListAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import SidebarItensContainer from '../sidebar_itens_container/SidebarItensContainer';

const AdminSidebarMenu = ({isOpen}) => {
    return (
        <aside className={isOpen ? 'openSidebar' : 'closeSidebar'}>
            <SidebarItensContainer >
                <SidebarItem link={'/admin-home'} text={'Dashboard'}
                    icon={<FontAwesomeIcon icon={faTachometerAlt} />} isOpen={isOpen} />
                <SidebarItem link={'/create-list'} text={'Nova lista'}
                    icon={<FontAwesomeIcon icon={faListAlt} />} isOpen={isOpen} />
                <SidebarItem link={'/my-lists'} text={'Minhas listas'}
                    icon={<FontAwesomeIcon icon={faHeart} />} isOpen={isOpen} />
                <SidebarItem link={'/contact'} text={'Contato'}
                    icon={<FontAwesomeIcon icon={faAddressBook} />} isOpen={isOpen} alignEnd={true} />
            </SidebarItensContainer>
        </aside>
    )
}

export default AdminSidebarMenu;