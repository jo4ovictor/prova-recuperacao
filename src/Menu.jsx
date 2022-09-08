import "./Menu.css";

function Menu({ foto, nome, nome1, nome2 }) {
    return (
        <div className="paginas">
            <div className="foto-pag">
                <img className="foto" src={foto} />
            </div>
            <div className="name">
                <div className="name1">
                    <div className="nome-pag">
                        <p>{nome}</p>
                    </div>
                </div>
            </div>
            <div className="nome-pag2">
                <p className="n1">{nome1}</p>
                <p className="n2">{nome2}</p>
            </div>
        </div>
    );
}
export default Menu;