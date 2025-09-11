import image1 from "/dineIn/image1.jpeg";
import image2 from "/dineIn/image2.jpeg";
import image3 from "/dineIn/image3.jpg";
import image4 from "/dineIn/image4.jpg";
import image5 from "/dineIn/image5.jpg";
import image6 from "/dineIn/image6.jpg";
import pdf from "/dineIn.pdf";

import "./dineInStyles.css";

let images = [image1, image2, image3, image4, image5, image6];

function ReturnImages() {
	let n = 0;
	let imgReturn = images.map((e) => {
		return <img alt={"dine in menu page " + (n + 1)} key={n++} src={e} />;
	});
	return <div className="galleryContainer">{imgReturn}</div>;
}

export default function DineIn() {
	return (
		<div id="dine" className="dineInSection">
			<div className="dineInTop">
				<h2>DINE-IN</h2>
				<p>BOOK A TABLE?</p>
			</div>
			<ReturnImages />
			<embed type="application/pdf" src={pdf + "#toolbar=0"} />
			<a className="download" href={pdf} download>
				DOWNLOAD MENU
			</a>
		</div>
	);
}
