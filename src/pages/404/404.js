import './404.css'
import errorimg from '../../images/Oops__404_Error-removebg-preview.png';

const Pagina404 = () => {
    return (
        <section className='error404'>
            <div>
                <img id="img404" src={errorimg} />
                <h2>Não conseguimos encontrar essa página</h2>
            </div>
        </section>
    );
};

export default Pagina404;