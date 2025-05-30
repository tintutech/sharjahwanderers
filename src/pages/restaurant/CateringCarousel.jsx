import image1 from "/dineIn/image1.jpeg";
import image2 from "/dineIn/image2.jpeg";
import image3 from "/dineIn/image3.jpg";
import image4 from "/dineIn/image4.jpg";
import { useState } from "react";

let images = [image1, image2, image3, image4];

export default function CateringCarousel() {
	let [currentState, setState] = useState(1);

	window.setInterval(() => {
		console.log(currentState);
		if (currentState === images.length) {
			setState(images[1]);
		} else {
			setState(images[(n) => currentState + 1]);
		}
	}, 3000);

	return <img src={images[currentState]} />;
}
