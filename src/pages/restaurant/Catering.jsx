import Carousel from "../../components/Carousel.jsx";
import "./cateringStyles.css";
import CTA from "../../components/CTA.jsx";

import image1 from "/offers/image1.jpg";
import image2 from "/offers/image2.png";
import image3 from "/offers/image3.png";
import image4 from "/offers/image4.jpg";
import image5 from "/offers/image5.jpg";
import image6 from "/offers/image6.jpg";
import image7 from "/offers/image7.jpg";

let images = [image1, image2, image3, image4, image5, image6, image7];

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
		<div id="catering" className="catering">
			<div className="leftContents">
				<Carousel img={images} />
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
