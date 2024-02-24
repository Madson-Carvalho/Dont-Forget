import './TableImageColunm.css';

const TableImageColunm = ({ className, dataLabel, image }) => {
    return (
        <div className={`${className} colunm-img`} data-label={dataLabel}>
            <img src={image} />
        </div>
    )
}

export default TableImageColunm;