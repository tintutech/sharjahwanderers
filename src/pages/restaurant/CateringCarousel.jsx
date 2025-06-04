import image1 from "/offers/image1.png";
import image2 from "/offers/image2.png";
import image3 from "/offers/image3.png";
import image4 from "/offers/image1.png";
import image5 from "/offers/image2.png";
import image6 from "/offers/image3.png";

let images = [image1, image2, image3, image4, image5, image6];

import { useState, useEffect } from "react";

let n = 0;
function slideChange(s, setState) {
	let state = s;
	console.log(n);
	if (n == images.length - 1) {
		n = 0;
	} else {
		n++;
	}
	setState(images[n]);
}

export default function CateringCarousel() {
	let n = 0;
	let [image, changeImage] = useState(images[0]);
	useEffect(() => {
		setInterval(() => {
			slideChange(image, changeImage);
		}, 1000);
	}, []);
	return <img src={image} />;
}
