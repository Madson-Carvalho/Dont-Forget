import './AdminHomeContent.css';

import { Link } from 'react-router-dom';

import Map from './../map/Map';

const AdminHomeContent = () => {
    return (
        <div className="content">
            <Map width={'100%'} height={"300"} />
            <div className="home-info">
                <div className="small-box bg-info">
                    <div className="inner" style={{ width: '20rem' }}>
                        <h3>50</h3>
                        <p>Listas criadas</p>
                    </div>
                    <div className="icon">
                        <i className="fas fa-shopping-cart" />
                    </div>
                    <Link to={'/my-lists'} className="small-box-footer">
                        Ver mais <i className="fas fa-arrow-circle-right"></i>
                    </Link>
                </div>
                <div className="small-box bg-gradient-success">
                    <div className="inner" style={{ width: '20rem' }}>
                        <h3>4</h3>
                        <p>Grupo familiar</p>
                    </div>
                    <div className="icon">
                        <i className="fas fa-user-plus" />
                    </div>
                    <Link to={'#'} className="small-box-footer">
                        Ver mais <i className="fas fa-arrow-circle-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminHomeContent;