import './TableHeader.css';

const TableHeader = ({children}) => {
    return (
        <li className="table-header">
            {children}
        </li>
    )
}

export default TableHeader;