import image1 from "/offerEvents/image1.jpg";

import FAQ from "./FAQ.jsx";

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
		let n = 0;
		let m = 0;
		let para = e.description.map((p) => {
			return <p key={m++}>{p}</p>;
		});
		return (
			<div key={n++} className="card">
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

function MembershipCard() {
	return (
		<div className="membershipCard">
			<h3>Membership</h3>
			<p>
				Become part of the club, explore unique offers, and enjoy unparalleled
				access to our exclusive club.
			</p>
			<a href="#">ACTION BUTTON</a>
		</div>
	);
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
			<div className="memFaq">
				<MembershipCard />
				<FAQ />
			</div>
		</div>
	);
}
