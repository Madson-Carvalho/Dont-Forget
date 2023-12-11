import './AdminHomeContent.css';

import { Link } from 'react-router-dom';

import Map from './../map/Map';

const AdminHomeContent = () => {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">
                <Map width={'100%'} height={"300"} />
                <div className="home-info">
                    <div className="small-box bg-info">
                        <div className="inner" style={{width: '20rem'}}>
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
                        <div className="inner" style={{width: '20rem'}}>
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
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </div>
            {/* /.content */}
        </div>

    )
}

export default AdminHomeContent;