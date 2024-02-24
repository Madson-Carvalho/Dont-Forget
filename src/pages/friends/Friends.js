import './Friends.css';

import BaseLayoutPage from '../../components/base_layout_page/BaseLayoutPage';
import Table from '../../components/table/Table';
import TableHeader from '../../components/table_header/TableHeader';
import TableColunm from '../../components/table_colunm/TableColunm';
import TableRow from '../../components/table_row/TableRow';
import TableImageColunm from '../../components/table_image_colunm/TableImageColunm';

import img from '../../images/pexels-daniel-tijesuni-1370750.jpg';
import img2 from '../../images/pexels-andrea-piacquadio-774909.jpg';
import TableButtons from '../../components/table_buttons/TableButtons';
import TableFooter from '../../components/table_footer/TableFooter';
import AddNewButton from '../../components/add_new_button/AddNewButton';

const personData = [
    {
        id: 1,
        image: img,
        name: 'John Doe',
        phone: '48 98484-8484',
        shared: 3
    },
    {
        id: 2,
        image: img2,
        name: 'Johana Carpenter',
        phone: '48 99998-9898',
        shared: 8
    },
    {
        id: 3,
        image: img,
        name: 'Rodrigo o Brabo',
        phone: '48 98484-8484',
        shared: 3
    },
    {
        id: 4,
        image: img2,
        name: 'Mayra Leitoa',
        phone: '48 99998-9898',
        shared: 8
    }
]

const Friends = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <BaseLayoutPage title={'Amigos'} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <div className='top-buttons'>
                <AddNewButton saveLink={'/add-new-friend'} />
            </div>
            <Table className={'friend-table'}>
                <TableHeader>
                    <TableColunm className={"col col-5-percent"} />
                    <TableColunm className={"col col-40-percent"} text={"Nome"} />
                    <TableColunm className={"col col-20-percent"} text={"Telefone"} />
                    <TableColunm className={"col col-25-percent"} text={"Listas compartilhadas"} />
                    <TableColunm className={"col col-10-percent"} text={"Opções"} />
                </TableHeader>
                {personData.map(data => (
                    <TableRow key={data.id}>
                        <TableImageColunm className={"col col-5-percent"} image={data.image} />
                        <TableColunm className={"col col-40-percent"} dataLabel={"Nome"} text={data.name} />
                        <TableColunm className={"col col-20-percent"} dataLabel={"Telefone"} text={data.phone} />
                        <TableColunm className={"col col-25-percent"} dataLabel={"Listas compartilhadas"} text={data.shared} />
                        <TableButtons className={"col col-10-percent"} dataLabel={"Opções"} />
                    </TableRow>
                ))}
                <TableFooter />
            </Table>
        </BaseLayoutPage>
    )
}

export default Friends;