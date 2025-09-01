import CateringCarousel from "./CateringCarousel.jsx";
import "./cateringStyles.css";
import CTA from "../../components/CTA.jsx";

let catering1 = {
	p1: "We offer catering services for events hosted within Club premises* and private venues for events and parties of all sizes.",
	p2: "From corporate events, birthday parties and sports events!",
	p3: "All catering requests should be done atleast 72 hours before event date.",
	downloadLink: "#",
};

let catering2 = {
	p1: "Let one of our events representatives help plan your unique event with us!",
	link: "#",
	disclaimer: "*VENUE HIRE IS SUBJECT TO AVAILABILITY.",
};

export default function Catering() {
	return (
		<div className="catering">
			<div className="carousel">
				<CateringCarousel />
			</div>
			<div className="rightContents">
				<div className="left">
					<h2>CATERING</h2>
					<p>{catering1.p1}</p>
					<p>{catering1.p2}</p>
					<p>{catering1.p3}</p>
					<a href={catering1.downloadLink}>DOWNLOAD MENU</a>
				</div>
				<div className="right">
					<div className="topCard">
						<p>{catering2.p1}</p>
						<a onClick={CTA}>CATERING INQUIRY</a>
					</div>
					<p className="disclaimer">{catering2.disclaimer}</p>
				</div>
			</div>
		</div>
	);
}
