import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AdminHeader = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" data-widget="pushmenu" to={'#'} role="button">
                            <i className="fas fa-bars" />
                        </Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to={'/admin-home'} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to={'/contact'} className="nav-link">
                            Contato
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link dropdown-toggle"
                            to={'#'}
                            id="navbarDropdown2"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Ajuda
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <Link className="dropdown-item" to={'#'}>
                                FAQ
                            </Link>
                            <Link className="dropdown-item" to={'#'}>
                                Suport
                            </Link>
                            <div className="dropdown-divider" />
                            <Link className="dropdown-item" to={'/contact'}>
                                Contato
                            </Link>
                        </div>
                    </li>
                </ul>
                {/* SEARCH FORM */}
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input
                            className="form-control form-control-navbar"
                            type="search"
                            placeholder="Pesquisar"
                            aria-label="Search"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Messages Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <Link className="nav-link" data-toggle="dropdown" to={'#'}>
                            <i className="far fa-comments" />
                            <span className="badge badge-danger navbar-badge">3</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link to={'#'} className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img
                                        src="dist/img/user1-128x128.jpg"
                                        alt="User Avatar"
                                        className="img-size-50 mr-3 img-circle"
                                    />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-right text-sm text-danger">
                                                <i className="fas fa-star" />
                                            </span>
                                        </h3>
                                        <p className="text-sm">Enviou uma nova lista...</p>
                                        <p className="text-sm text-muted">
                                            <i className="far fa-clock mr-1" /> 4 Horas atrás
                                        </p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to={'#'} className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img
                                        src="dist/img/user8-128x128.jpg"
                                        alt="User Avatar"
                                        className="img-size-50 img-circle mr-3"
                                    />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted">
                                                <i className="fas fa-star" />
                                            </span>
                                        </h3>
                                        <p className="text-sm">Enviou uma nova lista...</p>
                                        <p className="text-sm text-muted">
                                            <i className="far fa-clock mr-1" /> 4 Horas Atrás
                                        </p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to={'#'} className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img
                                        src="dist/img/user3-128x128.jpg"
                                        alt="User Avatar"
                                        className="img-size-50 img-circle mr-3"
                                    />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning">
                                                <i className="fas fa-star" />
                                            </span>
                                        </h3>
                                        <p className="text-sm">Enviou uma nova lista...</p>
                                        <p className="text-sm text-muted">
                                            <i className="far fa-clock mr-1" /> 4 Horas Atrás
                                        </p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to={'#'} className="dropdown-item dropdown-footer">
                                Ver todas as mensagens
                            </Link>
                        </div>
                    </li>
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <Link className="nav-link" data-toggle="dropdown" to={'#'}>
                            <i className="far fa-bell" />
                            <span className="badge badge-warning navbar-badge">15</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-header">15 Notificações</span>
                            <div className="dropdown-divider" />
                            <Link to={'#'}className="dropdown-item">
                                <i className="fas fa-envelope mr-2" /> 4 novas mensagens
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to={'#'} className="dropdown-item">
                                <i className="fas fa-users mr-2" /> 8 solicitações de amizade
                                {/* <span className="float-right text-muted text-sm">12 horas</span> */}
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to={'#'} className="dropdown-item">
                                <i className="fas fa-file mr-2" /> 3 novas listas recebidas
                                <span className="float-right text-muted text-sm">4 Horas</span>
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to={'#'} className="dropdown-item dropdown-footer">
                                Ver todas as notificações
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            data-widget="control-sidebar"
                            data-slide="true"
                            to={'#'}
                            role="button"
                        >
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
        </>
    )
}

export default AdminHeader;