import './Table.css';

const Table = ({ children, className }) => {
    return (
        <div className={`table-container ${className}`}>
            <ul className="responsive-table">
                {children}
            </ul>
        </div>
    )
}

export default Table;