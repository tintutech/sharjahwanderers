import image1 from "/facilities/image1.jpg";
import image2 from "/facilities/image2.jpg";
import image3 from "/facilities/image3.jpg";
import image4 from "/facilities/image4.jpg";
import image5 from "/facilities/image5.jpg";
import image6 from "/facilities/image6.jpg";
import image7 from "/facilities/image7.jpg";
import image8 from "/facilities/image8.jpg";
import CTA from "../../components/CTA.jsx";

import FAQ from "./FAQ.jsx";

import "./secondSectionStyles.css";

let images = [image1, image2, image3, image4, image5, image6, image7];

let cardData = [
	{
		title: "NATURAL GRASS PITCHES",
		desc: "16,000 sqm of multi-use grass pitches, suitable for Rugby, Football, and other Sports events. Available for events.",
		image: images[0],
	},
	{
		title: "SWIMMING POOL",
		desc: "20M Outdoor Temperature controlled swimming pool. Lesson available, contact us for more information",
		image: images[1],
	},
	{
		title: "TENNIS COURT",
		desc: "Two full sized outdoor hard courts.",
		image: images[2],
	},
	{
		title: "ASTRO PITCH",
		desc: "5-A side astro turf pitches, fit for football matches of any kind.",
		image: images[3],
	},
	{
		title: "PADEL COURT",
		desc: "Three outdoor Padel courts, the fastest growing sport in the world.",
		image: images[4],
	},
	{
		title: "GYM FACILITIES",
		desc: "Fully equipped Gym fit for strength training, cardio and a fitness studio. Private training available upon request. See training.",
		image: images[5],
	},
	{
		title: "CRICKET NETS",
		desc: "Three Cricket nets for batting practices.",
		image: images[0],
	},
	{
		title: "YOGA STUDIO",
		desc: "Three Yoga classes are available every week for Members.",
		image: images[6],
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
				<a onClick={CTA}>CONTACT US</a>
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
				<a onClick={CTA}>Inquire Training</a>
			</div>
		</div>
	);
}

export default function SecondSection() {
	return (
		<>
			<div className="secondSection">
				<Cards />
				<TrainingCard />
				<FAQ />
			</div>
		</>
	);
}
