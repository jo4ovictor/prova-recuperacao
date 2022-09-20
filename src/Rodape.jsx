import "./Rodape.css"
function Rodape ({titulo, descricao1, descricao2, descricao3}) {
    return(
        <div className="partebaixa">
            <div className="info">
            <strong><p className="titu">{titulo}</p></strong>
            <p className="desc1">{descricao1}</p>
            <p className="desc2">{descricao2}</p>
            <p className="desc3">{descricao3}</p>
        </div>
        </div>
    );
}
export default Rodape;