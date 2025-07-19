import image1 from "/offerEvents.jpg";

let data = [
	{
		img: image1,
		title: "PROMO TITLE",
		description: [
			"Consectetur nostrum est eveniet rem necessitatibus assumenda consectetur cumque fugiat, quasi eius vel? Laudantium blanditiis.",
			"Consectetur dolor at odio voluptatem maiores Porro necessitatibus nesciunt perspiciatis",
		],
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
				</div>
			</div>
		);
	});
}

export default function Third() {
	return (
		<div className="third">
			<h2>CURRENT OFFERS AND PROMOTIONS</h2>
			<div className="cardContainer">
				<Cards />
			</div>
		</div>
	);
}
