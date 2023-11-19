import './HomeFeatures.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomeFeatures({icon,title,description}) {
    return (
        <div className='home-features'>
            <FontAwesomeIcon icon={icon} size='2xl'/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )

}

export default HomeFeatures;