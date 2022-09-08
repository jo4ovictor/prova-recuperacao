import Menu from "./Menu"
import Card from "./Card";
import "./App.css"
function App(){
	
	const lista_menu = [
		{
			foto: "logo.svg"
		},
		{
			nome: "Entregador",
		},
		{
			nome: "Restaurante e Mercado",
		},
		{
			nome: "Carreiras",
		},
		{
			nome: "iFood Card",
		},
		{
			nome1: "Criar conta",
		},
		{
			nome2: "Entrar"
		},
	  ];
	
	const sites = [
		{	
			foto: "big-king.webp",
			nome: "Combo Big King",
			des: "Um Hambúrguer com duas carnes bovinas grelhadas de 57g. pão com gergelin, queijo...",
			qtd: "Serve 1 pessoa",
			preco: "R$ 41,90"
		},
	];
	return(
	  
		<div className="conteiner">
			<div>
			{
				lista_menu.map((menu) => {
					return <Menu 
					nome={menu.nome}
					foto={menu.foto}
					nome1={menu.nome1}
					nome2={menu.nome2}
							/>
				  })
			}
			</div>
			<div className="tit">Destaques</div>
			<div className="produto">
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
		</div>
		
	);
}

export default App;