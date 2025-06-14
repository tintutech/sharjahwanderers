import salon1 from "/salon/image1.jpg";
import salon2 from "/salon/image2.jpg";
import salon3 from "/salon/image3.jpg";

import spa1 from "/spa/image1.jpg";
import spa2 from "/spa/image2.jpg";
import spa3 from "/spa/image3.jpg";

let salon = [
	{
		img: salon1,
		title: "HAIR SERVICES",
		desc: "Consectetur nobis recusandae et ducimus lorem? Officia repellendus fuga ex unde repellat, et? Illo voluptatum?",
		url: "#",
	},
	{
		img: salon2,
		title: "MANI & PEDI",
		desc: "Amet aliquid dolorem voluptatem amet ex Obcaecati iure obcaecati qui velit repudiandae Nihil nobis repudiandae",
		url: "#",
	},
	{
		img: salon3,
		title: "LASH & BROWS",
		desc: "Consectetur eveniet alias voluptas amet vitae Atque enim blanditiis odit distinctio architecto! Neque ipsum eos.",
		url: "#",
	},
];
let spa = [
	{
		img: spa1,
		title: "SCALP MASSAGE",
		desc: "Ipsum eius repellat exercitationem architecto eveniet. Cumque adipisci vitae similique voluptate aliquid Dolores est eum.",
		url: "#",
	},

	{
		img: spa2,
		title: "MANI & PEDI",
		desc: "Adipisicing iste enim tempore id quos Mollitia obcaecati alias culpa harum vero voluptate Voluptatibus saepe",
		url: "#",
	},

	{
		img: spa3,
		title: "LASH & EYEBROWS",
		desc: "Adipisicing voluptate soluta quos inventore expedita error molestiae minima. Illum ea rerum modi ex rerum?",
		url: "#",
	},
];

function ReturnCards({ title, cardList, booking }) {
	let cards = cardList.map((e) => {
		return (
			<div className="card">
				<img src={e.img} />
				<div className="cardContents">
					<h3>{e.title}</h3>
					<p>{e.desc}</p>
					<a href={e.url}>BOOK AN APPOINTMENT</a>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className="topSection">
				<h2>{title}</h2>
				<a href={booking}>BOOKING</a>
			</div>
			{cards}
		</>
	);
}

export default function SecondSection() {
	return (
		<>
			<div className="salon">
				<ReturnCards title="SALON" cardList={salon} booking="#" />
			</div>
			<div className="spa"></div>
		</>
	);
}
