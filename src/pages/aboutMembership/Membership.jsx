import "./membershipStyles.css";
let data1 = {
	title: "MEMBERSHIP INFO",
	paragraphs: [
		"Being a member at our Private club gives you exclusive access to clubhouse, facilities and members only benefits.",
	],
};

let data2 = {
	title: "BENEFITS INCLUDE:",
	benefits: [
		"Unrestricted access to the club.",
		"Discounted rates for facilities hire.",
		"Members only social events and invites.",
		"Fitness classes, and training classes included*.",
	],
	disclaimer: "*does not include private training. ",
};

function Card1() {
	let n = 0;
	let paragraphs = data1.paragraphs.map((e) => {
		return <p key={n++}>{e}</p>;
	});

	return (
		<div className="first card">
			<h2>{data1.title}</h2>
			{paragraphs}
		</div>
	);
}

function Card2() {
	let n = 0;
	let paragraphs = data2.benefits.map((e) => {
		return <p key={n++}>{e}</p>;
	});

	return (
		<div className="second card">
			<h3>{data2.title}</h3>
			{paragraphs}
			<p className="disclaimer">{data2.disclaimer}</p>
		</div>
	);
}

import CTA from "/src/components/CTA.jsx";

function Card3() {
	return (
		<div className="membershipDetails">
			<div className="membershipCard">
				<h3>Membership</h3>
				<p>
					Become part of the club, explore unique offers, and enjoy unparalleled
					access to our exclusive club.
				</p>
				<button onClick={CTA}>ACTION BUTTON</button>
			</div>
			<div className="membershipFees">
				<h3>MEMBERSHIP FEES</h3>
				<table>
					<thead>
						<tr>
							<th>DURATION</th>
							<th>INDIVIDUAL</th>
							<th>FAMILY</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>3 MONTH</td>
							<td>AED 950</td>
							<td>AED 1900</td>
						</tr>
						<tr>
							<td>6 MONTH</td>
							<td>AED 1450</td>
							<td>AED 2900</td>
						</tr>
						<tr>
							<td>12 Month</td>
							<td>AED 2300</td>
							<td>AED 4600</td>
						</tr>
					</tbody>
				</table>
				<p>Installment options available.</p>
			</div>
		</div>
	);
}

export default function Membership() {
	return (
		<>
			<div id="membership">
				<Card1 />
				<Card2 />
			</div>
			<Card3 />
		</>
	);
}
