import image1 from "/delivery/image1.jpg";
import image2 from "/delivery/image2.jpg";
import image3 from "/delivery/image3.jpg";
import pdf from "/delivery.pdf";

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
			<button className="detailsBtn">ASK FOR DETAILS</button>
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
			<ReturnImages />
			<embed type="application/pdf" src={pdf} />
			<a className="download" href={pdf} download>
				DOWNLOAD MENU
			</a>
		</div>
	);
}
