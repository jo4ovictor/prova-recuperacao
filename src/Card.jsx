import "./Card.css";

function Card( {foto, nome} ){
    return(
        <div className="site">
            <div className="rounded-foto">
                <img className="foto-perfil" src={foto} alt={nome} />
            </div>

            <div className="info-card">
                <p>{nome}</p>	
            </div>
        </div>
    );
}

export default Card;