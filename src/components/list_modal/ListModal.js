import ShoppingList from '../shopping_list/ShoppingList';
import './ListModal.css';

const ListModal = ({ title, data, cratedDate, setIsOpen }) => {
    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    {/* <div className="modalHeader">
                        <h5 className="heading"></h5>
                    </div> */}
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        x
                    </button>
                    <ShoppingList title={title} data={data} cratedDate={cratedDate} />
                </div>
            </div>
        </>
    );
};

export default ListModal;