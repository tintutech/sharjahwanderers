import "./membershipStyles.css";

let data1 = {
	title: "MEMBERSHIP INFO",
	paragraphs: [
		"Our membership is the best way to get ",

		"Lorem ipsum dolor sit amet consectetur. Ac vel ac leo non facilisi odio.",
	],
};

let data2 = {
	title: "BENEFITS INCLUDE:",
	benefits: [
		"Unrestricted access to the club.",
		"Discounted rates for facilities hire.",
		"Members only social events and invites.",
		"Fitness classes, and training classes included*.",
		"PERKS NUMBER 5",
		"PERKS NUMBER 6",
	],
	disclaimer: "*does not include private training. ",
};

function Card1() {
	let paragraphs = data1.paragraphs.map((e) => {
		return <p>{e}</p>;
	});

	return (
		<div class="first card">
			<h2>{data1.title}</h2>
			{paragraphs}
		</div>
	);
}

function Card2() {
	let paragraphs = data2.benefits.map((e) => {
		return <p>{e}</p>;
	});

	return (
		<div class="second card">
			<h3>{data2.title}</h3>
			{paragraphs}
			<p className="disclaimer">{data2.disclaimer}</p>
		</div>
	);
}

export default function Membership() {
	return (
		<div id="membership">
			<Card1 />
			<Card2 />
		</div>
	);
}
