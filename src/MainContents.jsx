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

const aboutData = {
	title: "About the Club",
	content:
		"Consectetur dolorem ipsa dolorum explicabo dolor. Officiis aliquam adipisicing sequi officia obcaecati quaerat Doloribus dicta omnis facere eum sint Dicta atque impedit quisquam sunt odio Natus aspernatur ullam odit quis",
	link: "",
	list: ["Fully licensed bar", "Swimming pool", "Spa and Salon"],
};

const guestBook = {
	para1: "Amazing staff, exellent trainers.",
	para2: "MEMBER",
	para3:
		"Consectetur animi ipsam aut cumque accusantium Deserunt sint porro minima eos optio. Maiores est ex qui dolorum quasi! Nulla quia accusamus quibusdam perferendis tempore itaque.",
	name: "MARK S.",
};

function About() {
	return (
		<div id="about">
			<div className="leftCard">
				<div>
					<h3>{aboutData.title}</h3>
					<p>{aboutData.content}</p>
					<a href="">Learn More</a>
				</div>
				<div>
					<ul>
						<li>{aboutData.list[0]}</li>
						<li>{aboutData.list[1]}</li>
						<li>{aboutData.list[2]}</li>
					</ul>
				</div>
			</div>

			<div className="rightCard"></div>
		</div>
	);
}

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
		<div id="offerevents">
			<h2>OFFERS & EVENTS</h2>
			<img />
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

function Guestbook() {
	return (
		<div id="guestbook">
			<div className="left">
				<h3>GUESTBOOK</h3>
				<div>
					<p>{guestBook.para1}</p>
					<p>{guestBook.para2}</p>
					<p>{guestBook.para3}</p>

					<h3 className="guestName">{guestBook.name}</h3>
				</div>
				<p>Learn More about our Membership benefits</p>
			</div>
		</div>
	);
}

export default function MainContents() {
	return (
		<>
			<div className="mainContainer">
				<h1>EXPLORE</h1>
				<About />
				<Experience />
				<Events />
				<Guestbook />
				<div className="endQUote">
					<p>Not all those who wander are lost</p>
					<a href="#">Pay us a Visit</a>
				</div>
			</div>
		</>
	);
}
