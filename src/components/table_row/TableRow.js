import './TableRow.css';

const TableRow = ({children}) => {
    return (
        <li className="table-row">
            {children}
        </li>
    )
}

export default TableRow;