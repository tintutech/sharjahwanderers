import image1 from "/facilities/image1.jpg";
import image2 from "/facilities/image2.jpg";
import image3 from "/facilities/image3.jpg";
import image4 from "/facilities/image4.jpg";
import image5 from "/facilities/image5.jpg";
import image6 from "/facilities/image6.jpg";
import image8 from "/facilities/image8.jpg";

import "./secondSectionStyles.css";

let images = [image1, image2, image3, image4, image5, image6];

let cardData = [
	{
		title: "RUGBY FIELD",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: images[0],
	},
	{
		title: "SWIMMING POOL",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: images[1],
	},
	{
		title: "TENNIS COURT",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: images[2],
	},
	{
		title: "FOOTBALL FIELD",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: images[3],
	},
	{
		title: "PADEL COURT",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: images[4],
	},
	{
		title: "FITNESS GYM",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: images[5],
	},
	{
		title: "BATTING CAGE",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: images[0],
	},
];

function toggle(e) {
	let temp;
	if (e.target.nodeName == "P" || e.target.nodeName == "H2") {
		temp = "";
	} else if (e.target.className == "card") {
		temp = e.target;
	} else if (e.target.parentNode.className == "plusMinus") {
		temp = e.target.parentNode.parentNode;
	} else {
		temp = e.target.parentNode;
	}
	temp == "" ? null : temp.classList.toggle("show");
}

function Cards() {
	let n = 0;
	let cards = cardData.map((e) => {
		return (
			<div onClick={(e) => toggle(e)} key={n++} className="card">
				<h2>{e.title}</h2>
				<p>{e.desc}</p>
				<div className="plusMinus">
					<span className="plus">+</span>
					<span className="minus">&#8722;</span>
				</div>
				<img src={e.image} />
			</div>
		);
	});
	return (
		<div className="cardContainer">
			{cards}
			<div className="endCard">
				<p>
					Our facilities are available for events hire. Contact us for info on
					how to host your next event!
				</p>
				<a href="#">CONTACT US</a>
			</div>
		</div>
	);
}

function TrainingCard() {
	return (
		<div id="training" className="training">
			<h2>TRAINING & LESSONS.</h2>
			<p>We offer private training and lessons within our facilities.</p>
			<div>
				<p>
					Contact us for more information for personal training at our
					facilities.
				</p>
				<a>Inquire Training</a>
			</div>
		</div>
	);
}

export default function SecondSection() {
	return (
		<div className="secondSection">
			<Cards />
			<TrainingCard />
		</div>
	);
}
