import image1 from "/dineIn/image1.png";
import image2 from "/dineIn/image2.png";
import image3 from "/dineIn/image3.png";
import image4 from "/dineIn/image4.png";
import image5 from "/dineIn/image5.png";
import image6 from "/dineIn/image6.png";
import pdf from "/dineIn.pdf";

import "./dineInStyles.css";

let images = [image1, image2, image3, image4, image5, image6];

function ReturnImages() {
	let n = 0;
	let imgReturn = images.map((e) => {
		return <img onClick={(e) => expandedPage(e)} key={n++} src={e} />;
	});
	return <div className="galleryContainer">{imgReturn}</div>;
}

function expandedPage(e) {
	let expand = e.target.parentNode.classList.toggle("full");
}

export default function DineIn() {
	return (
		<div className="dineInSection">
			<div className="dineInTop">
				<h2>DINE-IN</h2>
				<p>BOOK A TABLE?</p>
			</div>
			<ReturnImages />
			<embed type="application/pdf" src={pdf} />
		</div>
	);
}
