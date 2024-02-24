import './TableFooter.css';

import { Link } from 'react-router-dom';

const TableFooter = () => {
    return (
        <footer className='table-footer'>
            <h3>Mostrando 4 resultados de 4.</h3>
            <nav className="pagination">
                <Link className="page-link" href="#" aria-label="Anterior">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Anterior</span>
                </Link>
                <Link className="page-link" href="#">1</Link>
                <Link className="page-link" href="#">2</Link>
                <Link className="page-link" href="#">3</Link>
                <Link className="page-link" href="#" aria-label="Próximo">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Próximo</span>
                </Link>
            </nav>
        </footer>
    )
}

export default TableFooter;