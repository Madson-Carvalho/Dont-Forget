import './TableColunm.css';

const TableColunm = ({ className, dataLabel, text }) => {
    return (
        <div className={className} data-label={dataLabel}>{text}</div>
    )
}

export default TableColunm;