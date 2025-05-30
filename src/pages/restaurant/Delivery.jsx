import image1 from "/delivery/image1.jpg";
import image2 from "/delivery/image2.jpg";
import image3 from "/delivery/image3.jpg";

import "./deliveryStyles.css";

let images = [image1, image2, image3];

function LeftSection() {
	return (
		<div className="leftSection">
			<h2>DELIVERY</h2>
			<div className="leftLower">
				<p>DELIVERY TIMINGS 11:00 AM - 9:00 PM</p>
				<p>MONDAY- FRIDAY</p>
			</div>
		</div>
	);
}

function RightSection() {
	return (
		<div className="rightSection">
			<h3>SUNDAY ROAST AVAILABLE</h3>
			<a className="detailsBtn" href="#">
				ASK FOR DETAILS
			</a>
		</div>
	);
}

function ReturnImages() {
	let n = 0;
	let imgHTML = images.map((e) => {
		return <img key={n++} src={e} />;
	});
	return <div className="galleryContainer">{imgHTML}</div>;
}

export default function Delivery() {
	return (
		<div className="deliverySection">
			<div className="topSection">
				<LeftSection />
				<RightSection />
			</div>
		</div>
	);
}
