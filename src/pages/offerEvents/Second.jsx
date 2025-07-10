import image1 from "/offerEvents/image1.jpg";

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
		link: "#",
	},
];

function Cards() {
	let returnImages = images.map((e) => {
		console.log(e);
		return <div className="card"></div>;
	});
}

export default function Second() {
	return (
		<div className="second">
			<div className="top">
				<h2>UPCOMING EVENTS</h2>
				<a href="#">CALENDAR</a>
			</div>
			<div className="cardContainer">
				<Cards />
			</div>
		</div>
	);
}
