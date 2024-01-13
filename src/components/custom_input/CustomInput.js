import './CustomInput.css';

const CustomInput = ({type, name, id, label, min}) => {
    return (
        <div className="input-group defaultInputs">
            <input type={type} name={name} id={id} min={min} />
            <label className="label" htmlFor={id}>{label}</label>
        </div>
    )
}

export default CustomInput;