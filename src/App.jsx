import Menu from "./Menu"
import Card from "./Card";
import "./App.css"
function App(){
	
	const sites = [
		{	
			foto: "big-king.webp",
			nome: "Combo Big King",
			des: "Um Hambúrguer com duas carnes bovinas grelhadas de 57g. pão com gergelin, queijo...",
			qtd: "Serve 1 pessoa",
			preco: "R$ 41,90"
		},
		{	
			foto: "cheddar-duplo.webp",
			nome: "Combo Combo Cheddar Duplo",
			des: "Um Hambúrguer com duas carnes bovinas grelhadas de 57g. pão preto com gergelin...",
			qtd: "Serve 1 pessoa",
			preco: "R$ 41,90"
		},
		{	
			foto: "cheeseburger-duplo.webp",
			nome: "Combo Cheeseburguer Duplo com Bacon",
			des: "Um Hambúrguer com duas carnes bovinas grelhadas de 57g. pão com gergelin, queijo...",
			qtd: "Serve 1 pessoa",
			preco: "R$ 36,90"
		},
		{	
			foto: "mega-stacker.webp",
			nome: "Combo Mega Stacker 2.0",
			des: "Um Hambúrguer com duas carnes bovinas grelhadas de 113g. pão com gergelin, queijo...",
			qtd: "Serve 1 pessoa",
			preco: "R$ 51,90"
		},
		
	];
	return(
	  
		<div className="conteiner">

			{
				sites.map((site) => {
					return (
					<Card  foto={site.foto}
							nome={site.nome}
							des={site.des}
							qtd={site.qtd}
							preco={site.preco}
						/>
					)
				})
			}
		</div>
		
	);
}

export default App;