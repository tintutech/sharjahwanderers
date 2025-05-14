const data = {
	cardOne: {
		title: "EAT",
		paraOne:
			"Consectetur amet eos minima ratione quis? Dolorem officia ad nobis sequi laboriosam aliquam Vel adipisci harum cumque dolor nulla Error a cumque doloremque nisi ipsum? Lorem ducimus vitae non maxime",
		paraTwo:
			"Adipisicing vero rem ab et error quaerat Doloremque minus tempore.",
		link: "",
	},
	cardTwo: {
		title: "PLAY",
		paraOne:
			"Amet enim deserunt itaque voluptatibus at Maiores error animi ipsa consequatur nostrum consequatur eius voluptas? Rerum quas quisquam sunt voluptatem dolor Asperiores natus pariatur odit nesciunt aliquid Optio beatae dolorum",
		paraTwo:
			"Consectetur quasi quibusdam placeat delectus quas illum, mollitia Officia nobis",
		link: "",
	},
	cardThree: {
		title: "Indulge",
		paraOne:
			"Ipsum cum labore maiores dolorem nostrum, veniam. Deserunt odio eaque consectetur autem inventore aspernatur In modi reprehenderit iste recusandae delectus laudantium deserunt Molestiae distinctio facere optio nesciunt labore omnis Eaque!",
		paraTwo:
			"Consectetur doloremque nihil numquam eaque ut. Similique esse sint esse?",
		link: "",
	},
};

function Experience() {
	return (
		<div id="experience">
			<div className="cardContainer">
				<div className="card">
					<h2>{data.cardOne.title}</h2>
					<p>{data.cardOne.paraOne}</p>
					<p>{data.cardOne.paraTwo}</p>
					<a href="#">EXPLORE</a>
				</div>
				<div className="card">
					<h2>{data.cardTwo.title}</h2>
					<p>{data.cardTwo.paraOne}</p>
					<p>{data.cardTwo.paraTwo}</p>
					<a href="#">EXPLORE</a>
				</div>
				<div className="card">
					<h2>{data.cardThree.title}</h2>
					<p>{data.cardThree.paraOne}</p>
					<p>{data.cardThree.paraTwo}</p>
					<a href="#">EXPLORE</a>
				</div>
			</div>
		</div>
	);
}

function Events() {
	return (
		<div className="offerEvents">
			<h2>OFFERS & EVENTS</h2>
			<img src="" />
			<div className="offerCard">
				<h3></h3>
				<p>
					Sit praesentium blanditiis deleniti deserunt eligendi. Odio adipisci
					iusto maiores dolorem ratione. Quis nisi facilis officia animi libero!
					Magni possimus at aut consectetur amet? Voluptatum
				</p>
				<a href="#">BOOK A TABLE</a>
			</div>
		</div>
	);
}

export default function MainContents() {
	return (
		<>
			<div className="mainContainer">
				<h1>EXPLORE</h1>

				<div className="explore"></div>
				<Experience />
				<Events />
			</div>
		</>
	);
}
