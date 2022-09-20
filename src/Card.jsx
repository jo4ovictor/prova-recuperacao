import "./Card.css"
function Card( {foto, nome, preco, botoes} ){
    return(
        <div className="site">
            <div className="tudo">
            <div className="rounded-foto">
                <img className="foto-perfil" src={foto} alt={nome} />
                <p className="nome">{nome}</p>
                <p className="preco">{preco}</p>	
                <button className="bot">{botoes}</button>
            </div>
            </div>
    </div>
    );
}

export default Card;