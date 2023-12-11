import './Map.css'

const Map = ({width, height}) => {
    return (
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47626.50443172876!2d-48.455790797168376!3d-27.47358268527539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1700335857534!5m2!1spt-BR!2sbr" width={width} height={height} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map;
