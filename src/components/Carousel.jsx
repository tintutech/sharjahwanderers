import image1 from "/offers/image1.jpg";
import image2 from "/offers/image2.png";
import image3 from "/offers/image3.png";
import image4 from "/offers/image4.jpg";
import image5 from "/offers/image5.png";
import image6 from "/offers/image6.jpg";
import image7 from "/offers/image7.jpg";
import "./carouselStyles.css";

let images = [image1, image2, image3, image4, image5, image6, image7];

import { useState, useEffect } from "react";

let n = 0;

function slideChange(imageList, setState) {
	if (n == imageList.length - 1) {
		n = 0;
	} else {
		n++;
	}
	setState(imageList[n]);
}

let interval;
function intervalSet(imageList, changeImage) {
	changeImage(imageList[n]);
	interval = setInterval(() => {
		slideChange(imageList, changeImage);
	}, 5000);
}

function setImage(num, imageList, changeImage) {
	n = num;
	changeImage(imageList[n]);
	interval.clearInterval();
	intervalSet(imageList, changeImage);
}

export default function Carousel({ img }) {
	let imageList = images;
	let [image, changeImage] = useState(imageList[0]);
	useEffect(() => intervalSet(imageList, changeImage), []);
	return (
		<div className="carousel">
			<img src={image} />
			<div className="numbers">
				{images.map((data, index) => {
					if (index == n) {
						return (
							<div
								onClick={() => setImage(index, imageList, changeImage)}
								className="current"
								key={index}
							></div>
						);
					} else {
						return (
							<div
								onClick={() => setImage(index, imageList, changeImage)}
								key={index}
							></div>
						);
					}
				})}
			</div>
		</div>
	);
}
