import "./Menu.css";
function Menu() {
    return (
    
        <div className="paginas">

           <div className="logo">
            <img className="foto" src="logo.png" />
            <p>IF GAMES</p>
           </div>
                <div className="name1">
                        <button>Home</button>
                </div>
                <div className="name1">
                        <button>Produtos</button>
                </div>
                <div className="name1">
                        <button>Carrinho</button>
                </div>
                <div className="name1">
                        <button>Contato</button>
                </div>
                <div className="name1">
                        <button>Sobre</button>
                </div>
            <div className="nome-pag2">
                <p className="n2">Login</p>
            </div>
        </div>
    );
}
export default Menu;