import Menu from "./Menu"
import Card from "./Card";
import "./App.css"
import "./Card.css"
function App(){
	const sites = [
		{	
			foto: "fort.jpg",			
			nome: "FORTNITE",
			preco: "GRATUITO",
			botoes: "COMPRAR",
		},
		{	
			foto: "fifa.png",
			nome: "FIFA 22",
			preco: "R$ 469,99",
			botoes: "COMPRAR",
		},
		{	
			foto: "god.jpg",
			nome: "GOD OF WAR",
			preco: "R$ 246,31",
			botoes: "COMPRAR",
		},
		{	
			foto: "last.jpg",
			nome: "THE LAST OF US: PART II",
			preco: "R$ 109,00",
			botoes: "COMPRAR",
		},
		{	
			foto: "horizon.png",
			nome: "HORIZON FORBIDDEN WEST",
			preco: "R$ 184,50",
			botoes: "COMPRAR",
		},
		{	
			foto: "zelda.png",
			nome: "THE LEGEND OF ZELDA",
			preco: "R$ 346,70",
			botoes: "COMPRAR",
		},
		{	
			foto: "mine.png",
			nome: "MINECRAFT",
			preco: "R$ 150,00",
			botoes: "COMPRAR",
    }
	];
	return(
		
		<div className="conteiner">

			<Menu/>
			<div className="tit">CONHEÇA NOSSOS JOGOS</div>
			<div className="produto">
			{
				sites.map((site) => {
					return (
					<Card  foto={site.foto}
							nome={site.nome}
							preco={site.preco}
							botoes={site.botoes}
						/>
					)
				})

			
			}
			</div>
		</div>
		
	);
}

export default App;