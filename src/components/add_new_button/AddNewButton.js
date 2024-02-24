import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AddNewButton.css';

import { Link } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNewButton = ({saveLink}) => {
    return (
        <Link className='add-new' to={saveLink}><FontAwesomeIcon icon={faPlus} /> Novo</Link>
    )
}

export default AddNewButton;