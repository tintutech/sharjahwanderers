

import image1 from "/public/dineIn/image1.png";
import image2 from "/public/dineIn/image2.png";
import image3 from "/public/dineIn/image3.png";
import image4 from "/public/dineIn/image4.png";
import image5 from "/public/dineIn/image5.png";
import image6 from "/public/dineIn/image6.png";


let images = [image1, image2, image3, image4, image5, image6];

function ReturnImages() {
	let imgReturn = images.map((e) => {
		return ( <img src={e} width="800" />)
	}
)
	return (
		<>
		{imgReturn}
		</>
	)
}

export default function DineIn() {
	return (
		<div className="dineInSection">
			<div className="dineInTop">
				<h2>DINE-IN</h2>
				<p>BOOK A TABLE?</p>
			</div>
			<ReturnImages />
		</div>

	)

};
