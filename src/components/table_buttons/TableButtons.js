import OptionButton from '../option_button/OptionButton';
import './TableButtons.css';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TableButtons = ({ className, dataLabel }) => {
    return (
        <div className={`${className} table-buttons`} data-label={dataLabel}>
            <OptionButton icon={faEdit} title={'Editar'} />
            <OptionButton icon={faTrashAlt} title={'Excluir'} />
        </div>
    )
}

export default TableButtons;