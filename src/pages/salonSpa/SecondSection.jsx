import salon1 from "/salon/image1.jpg";
import salon2 from "/salon/image2.jpg";
import salon3 from "/salon/image3.jpg";

import spa1 from "/spa/image1.jpg";
import spa2 from "/spa/image2.jpg";
import spa3 from "/spa/image3.jpg";

import "./secondSectionStyles.css";

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
	},
	{
		img: salon3,
		title: "LASH & BROWS",
		desc: "Consectetur eveniet alias voluptas amet vitae Atque enim blanditiis odit distinctio architecto! Neque ipsum eos.",
	},
];
let spa = [
	{
		img: spa1,
		title: "SCALP MASSAGE",
		desc: "Ipsum eius repellat exercitationem architecto eveniet. Cumque adipisci vitae similique voluptate aliquid Dolores est eum.",
	},

	{
		img: spa2,
		title: "MANI & PEDI",
		desc: "Adipisicing iste enim tempore id quos Mollitia obcaecati alias culpa harum vero voluptate Voluptatibus saepe",
	},

	{
		img: spa3,
		title: "LASH & EYEBROWS",
		desc: "Adipisicing voluptate soluta quos inventore expedita error molestiae minima. Illum ea rerum modi ex rerum?",
	},
];

function ReturnCards({ title, cardList, booking }) {
	let n = 0;
	let cards = cardList.map((e) => {
		return (
			<div key={n++} className="card">
				<img src={e.img} />
				<div className="cardContents">
					<div>
						<h3>{e.title}</h3>
						<p>{e.desc}</p>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className={title.toLowerCase()}>
			<div className="topSection">
				<h2>{title}</h2>
				<a
					href="https://www.fresha.com/a/wandies-hair-and-beauty-salon-sharjah-sharjah-wanderers-sports-club-bvv369l7"
					target="_blank"
				>
					BOOKING
				</a>
			</div>
			<div className="cardContainer">{cards}</div>
		</div>
	);
}

export default function SecondSection() {
	return (
		<>
			<ReturnCards title="SALON" cardList={salon} booking="#" />
			<ReturnCards title="SPA" cardList={spa} booking="#" />
		</>
	);
}
