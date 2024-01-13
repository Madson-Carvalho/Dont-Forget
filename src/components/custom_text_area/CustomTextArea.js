import './CustomTextArea.css';

const CustomTextArea = ({name, id, rows, columns, label}) => {
    return (
        <div className="input-group defaultInputs">
            <textarea name={name} id={id} rows={rows} cols={columns} ></textarea>
            <label className="label" htmlFor={id}>{label}</label>
        </div>
    )
}

export default CustomTextArea;