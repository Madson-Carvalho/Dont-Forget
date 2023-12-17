import './AdminSidebarMenu.css';

import logo from '../../images/df-logo-circle-removebg-preview.png';
import defaultUser from '../../images/default-user-2.avif';

import SidebarItem from '../sidebar_item/SidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faHeart, faListAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import SidebarItensContainer from '../sidebar_itens_container/SidebarItensContainer';

const AdminSidebarMenu = () => {
    return (
        <aside className='sidebar'>
            <SidebarItensContainer >
                <SidebarItem link={'/admin-home'} text={'Dashboard'}
                    icon={<FontAwesomeIcon icon={faTachometerAlt} />} />
                <SidebarItem link={'/create-list'} text={'Nova lista'}
                    icon={<FontAwesomeIcon icon={faListAlt} />} />
                <SidebarItem link={'/my-lists'} text={'Minhas listas'}
                    icon={<FontAwesomeIcon icon={faHeart} />} />
            </SidebarItensContainer>
        </aside>
    )
}

export default AdminSidebarMenu;