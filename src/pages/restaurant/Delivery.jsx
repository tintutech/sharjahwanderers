import image1 from "/delivery/image1.jpg";
import image2 from "/delivery/image2.jpg";
import image3 from "/delivery/image3.jpg";
import pdf from "/delivery.pdf";
import CTA from "../../components/CTA.jsx";

import "./deliveryStyles.css";

let images = [image1, image2, image3];

function LeftSection() {
	return (
		<div className="leftSection">
			<div className="deliveryTitle">
				<h2>DELIVERY</h2>
				<a
					href="https://api.whatsapp.com/send/?phone=971585522046&text=I%27d+like+to+place+an+order&type=phone_number&app_absent=0"
					target="_blank"
				>
					ORDER NOW
				</a>
			</div>
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
			<button onClick={CTA} className="detailsBtn">
				ASK FOR DETAILS
			</button>
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

function DeliveryInfo() {
	return (
		<div className="deliveryInfo">
			<div>
				<p>WHATSAPP YOUR ORDER AND LOCATION</p>
			</div>
			<div>
				<p>
					We deliver to Sharjah and Ajman. Please allow 40-60 minutes from the
					time of order acceptance.
				</p>
			</div>
			<div>
				<p>
					DELIVERY FEE : <span>AED 10.00</span>
				</p>
				<p>for all orders.</p>
			</div>
		</div>
	);
}

export default function Delivery() {
	return (
		<div className="deliverySection">
			<div className="topSection">
				<LeftSection />
				<RightSection />
			</div>
			<ReturnImages />
			<embed type="application/pdf" src={pdf + "#toolbar=0"} />
			<a className="download" href={pdf} download>
				DOWNLOAD MENU
			</a>
			<DeliveryInfo />
		</div>
	);
}
