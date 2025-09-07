import image1 from "/offerEvents/image1.jpg";
import "./secondStyles.css";

let data = [
	{
		img: image1,
		month: "MAY",
		date: "04",
		title: "May the 4th be with you.",
		cardContent: [
			"May the 4th Be with you.",
			"Star wars themed night. At the Wanderers sports bar.",
		],
	},
];

function Cards() {
	let n = 0;
	let returnCards = data.map((e) => {
		let m = 0;
		let cardInfo = e.cardContent.map((t) => {
			return (
				<div key={m++}>
					<p>{t}</p>
				</div>
			);
		});
		return (
			<div key={"card" + n++} className="card">
				<div
					style={{
						backgroundImage: `url(${e.img})`,
					}}
					className="cardLeft"
				>
					<div>
						<div className="one">
							<p className="month">{e.month}</p>
							<p className="date">{e.date}</p>
						</div>
						<p className="two">{e.title}</p>
					</div>
				</div>
				<div className="cardRight">
					<div className="content">{cardInfo}</div>
				</div>
			</div>
		);
	});

	return <>{returnCards}</>;
}

export default function Second() {
	return (
		<div className="second">
			<div className="top">
				<h2>UPCOMING EVENTS</h2>
				<a href="#">ATTEND EVENT</a>
			</div>
			<div className="cardContainer">
				<Cards />
				<Cards />
				<Cards />
			</div>
			<div className="innerCard">
				<p>Interested in hosting your event at one of our venues?</p>
				<a href="#">Get in touch.</a>
			</div>
		</div>
	);
}
