import image1 from "/offerEvents/image1.jpg";
import "./thirdStyles.css";

let data = [
	{
		img: image1,
		title: "PROMO TITLE",
		description: [
			"Consectetur nostrum est eveniet rem necessitatibus",
			"Consectetur dolor at odio",
		],
		link: "#",
	},
];

function Cards() {
	let returnCard = data.map((e) => {
		let para = e.description.map((p) => {
			console.log(p);
			return <p>{p}</p>;
		});
		return (
			<div className="card">
				<img src={e.img} />
				<div className="lowerCard">
					<h3>{e.title}</h3>
					{para}
					<a href={e.link}>BOOK A TABLE</a>
				</div>
			</div>
		);
	});
	return returnCard;
}

export default function Third() {
	return (
		<div className="third">
			<h2>CURRENT OFFERS AND PROMOTIONS</h2>
			<div className="cardContainer">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
}
