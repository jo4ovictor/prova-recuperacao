import Card from "./Card";
import "./App.css"
function App(){
	const sites = [
		{	
			foto: "https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360",
			nome: "WhatsApp",
		},
		{	
			foto: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
			nome: "Github",
		},
		{	
			foto: "https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png",
			nome: "Gmail",
		},
		{	
			foto: "https://play-lh.googleusercontent.com/GBYSf20osBl2CRHbjGOyaOG5kQ3G4xbRau-dzScU9ozuXQJtnUZPkR3IqEDOo5OiVgU",
			nome: "Meet",
		},
		{	
			foto: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
			nome: "Youtube",
		},
		{	
			foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqxCbX2EaAfpXuEhPZxF3RKOfYZsT0sAKl53ZY5D-gbTemyOqKidg-j8g7bawu1abzL4&usqp=CAU",
			nome: "Vite",
		},
		{	
			foto: "https://i.pinimg.com/736x/70/f9/36/70f936294a1f0f3949a9205df9340d5e.jpg",
			nome: "Facebook",
		},
		{	
			foto: "https://play-lh.googleusercontent.com/X2GyQDCfu91wBofnmkk4zD4RjO9-zSVdMSlheTy8MsAxfFyoiFDb5gx9HNbvEB3Czg",
			nome: "Globo",
		},
		{	
			foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5ZQXxpKrTjgxSryscudKO5f1eFuE-w8J8w&usqp=CAU",
			nome: "Localização",
		},
		{
			foto: "https://w7.pngwing.com/pngs/953/528/png-transparent-instagram-icon-logo-desktop-computer-icons-instagram-miscellaneous-text-bing.png",
			nome: "Instagram",
		},
	];

	return(
		<div className="conteiner">
			{
				sites.map((site) => {
					return <Card 
							foto={site.foto}
							nome={site.nome}
						/>;
				})
			}
		</div>
	);
}

export default App;