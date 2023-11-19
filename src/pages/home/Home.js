import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faListCheck, faLocationDot, faMapLocationDot, faMobileScreenButton, faPeopleGroup, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import Map from '../../components/map/Map';

import listImg from '../../images/shopping-list.webp';
import shareListImg from '../../images/share-list.jpg';

import HomeFeatures from './../../components/home_features/HomeFeatures';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
    return (
        <div className="home">
            <Header changecolors={true}/>
            <section className='the-app'>
                <div>
                    <h2>Don't Forget <br /> Shopping List</h2>
                    <p>Uma solução de gestão de compras e lembretes projetado para simplificar
                        a vida das pessoas, ajudando-as a não esquecerem de fazer suas compras, até as mais corriqueiras</p>
                </div>
                <img src={listImg} />
            </section>
            <section className='geolocation'>
                <Map width={'600'} height={"300"} />
                <div>
                    <h2><FontAwesomeIcon icon={faLocationDot} style={{ color: "#0b3b5b", }} /> Geolocalização</h2>
                    <p>Receba lembretes de compras pendentes ao se aproximar a um local relevante para uma compra. Por exemplo, um lembrete de compras ao passar por um supermercado.</p>
                </div>
            </section>
            <section className='share-list'>
                <div>
                    <h2><FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#0b3b5b", }} /> Compartilhe listas de compras</h2>
                    <p>Compartilhe listas de compras com contatos, amigos e grupos, permitindo a colaboração de familiares ou de equipe.</p>
                </div>
                <img src={shareListImg} />
            </section>
            <section className='features'>
                <HomeFeatures icon={faDesktop} title={'Versão Web'}
                description={'Crie e atualize sua lista no site'} />
                <HomeFeatures icon={faMobileScreenButton} title={'Versão Mobile'}
                description={'Crie e atualize a lista na palma da sua mão'} />
                <HomeFeatures icon={faImage} title={'Fotos'}
                description={'Adicione fotos customizadas aos itens'} />
                <HomeFeatures icon={faMapLocationDot} title={'Notificação por Geolocalização'}
                description={'Receba lembrete de compras a fazer ao se aproximar de uma loja'} />
                <HomeFeatures icon={faListCheck} title={'Listas Ilimitadas'}
                description={'Crie listas de compras para diferentes situações'} />
                <HomeFeatures icon={faScaleBalanced} title={'Quantidade e Unidades'}
                description={'Adicione peso, quantidade ou volumes aos itens'} />
            </section>
            <Footer />
        </div>
    )
}

export default Home;
