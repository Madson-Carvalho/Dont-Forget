import './OptionButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OptionButton = ({ icon, title }) => {
    return (
        <button className='option-button' title={title}>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default OptionButton;