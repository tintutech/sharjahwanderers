import "./carouselStyles.css";

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
	clearInterval(interval);
	n = num;
	changeImage(imageList[n]);
	intervalSet(imageList, changeImage);
}

export default function Carousel({ img }) {
	let [image, changeImage] = useState(img[0]);
	useEffect(() => intervalSet(img, changeImage), []);
	return (
		<div className="carousel">
			<p>{n}</p>
			<img src={image} />
			<div className="numbers">
				{img.map((data, index) => {
					if (index == n) {
						return (
							<div
								onClick={() => setImage(index, img, changeImage)}
								className="current"
								key={index}
							></div>
						);
					} else {
						return (
							<div
								onClick={() => setImage(index, img, changeImage)}
								key={index}
							></div>
						);
					}
				})}
			</div>
		</div>
	);
}
