import "./firstSectionStyles.css";

import Carousel from "../../components/Carousel.jsx";
import { useState, useEffect } from "react";

import image1 from "/offers/image1.jpg";
import image2 from "/offers/image2.png";
import image3 from "/offers/image3.png";
import image4 from "/offers/image4.jpg";
import image5 from "/offers/image5.jpg";
import image6 from "/offers/image6.jpg";
import image7 from "/offers/image7.jpg";
import { getSalonImages } from "/src/contentful.js";

let images = [image1, image2, image3, image4, image5, image6, image7];

export default function FirstSection() {
	let [loading, setLoading] = useState(true);
	let [imageList, setImgList] = useState([]);
	useEffect(() => {
		let img = [];
		getSalonImages().then((data) => {
			console.log(data);
			data.map((e) => img.push(e.fields?.image?.fields?.file?.url));
			setImgList((imageList = img));
			setLoading(false);
			console.log(imageList);
		});
	}, []);

	return (
		<div className="firstSection">
			<div className="top">
				<div className="left">
					<h2>WANDIES HAIR AND BEAUTY SALON</h2>
					<p>
						Get yourself a makeover or get rejunevated at the Wandies Salon and
						Spa
					</p>
				</div>
				<div className="right">
					<Carousel img={imageList} loading={loading} />
					<div className="smallCard">
						<a
							href="https://www.fresha.com/a/wandies-hair-and-beauty-salon-sharjah-sharjah-wanderers-sports-club-bvv369l7"
							target="_blank"
						>
							BOOK APPOINTMENT
						</a>
						<p>Complimentary Barista Coffee with all appointments.</p>
					</div>
				</div>
			</div>
			<div className="lower">
				<a href="#">SALON</a>
				<a href="#">SPA</a>
				<a href="#">OFFERS</a>
				<a href="#">CONTACT</a>
			</div>
		</div>
	);
}
