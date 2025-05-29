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
			<a href={pdf + "#page=2"} target="_blank">
				Open PDF
			</a>
			<embed type="application/pdf" src={pdf} />
		</div>
	);
}
