import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomeFeatures.css';

function HomeFeatures({icon,title,description}) {
    return (
        <div>
            <FontAwesomeIcon icon={icon}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )

}

export default HomeFeatures;