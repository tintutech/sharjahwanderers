import "./topSectionStyles.css";
import { HashLink } from "react-router-hash-link";

import Carousel from "../../components/Carousel.jsx";
import Announcements from "../../components/Announcements.jsx";
import { getRestaurantImages } from "/src/contentful.js";
import { useState, useEffect } from "react";

/*
import image1 from "/offers/image1.jpg";
import image2 from "/offers/image2.png";
import image3 from "/offers/image3.png";
import image4 from "/offers/image4.jpg";
import image5 from "/offers/image5.jpg";
import image6 from "/offers/image6.jpg";
import image7 from "/offers/image7.jpg";

let images = [image1, image2, image3, image4, image5, image6, image7];

*/

let rightData = {
	title: "RESTAURANT & BAR",
	para: "The comforts of home, classic British fare and popular modern dishes await at the ",
	span: "Clubhouse.",
};

function Left() {
	return (
		<div className="leftContents">
			<h2>{rightData.title}</h2>
			<p>
				{rightData.para}
				<span>{rightData.span}</span>
			</p>
		</div>
	);
}

function Right() {
	return (
		<div className="rightContents">
			<div className="top">
				<h3>MENUS</h3>
				<div>
					<HashLink smooth to="#dine">
						DINE-IN
					</HashLink>
					<HashLink smooth to="#delivery">
						DELIVERY
					</HashLink>
				</div>
				<div>
					<HashLink smooth to="#restaurantOffers">
						OFFERS
					</HashLink>
					<HashLink smooth to="#catering">
						CATERING
					</HashLink>
				</div>
			</div>
			<div className="bottom">
				<h4>KITCHEN HOURS</h4>
				<div>
					<p>Mon to Wed</p>
					<p>11am - 10pm</p>
				</div>
				<div>
					<p>Thursday</p>
					<p>11am - 10pm</p>
				</div>
				<div>
					<p>Fri & Sat</p>
					<p>11am - 10pm</p>
				</div>
				<div>
					<p>Sunday</p>
					<p>11am - 10pm</p>
				</div>
			</div>
		</div>
	);
}

export default function TopSection() {
	let [loading, setLoading] = useState(true);
	let [imageList, setImgList] = useState([]);
	useEffect(() => {
		let img = [];
		getRestaurantImages().then((data) => {
			data.map((e) => img.push(e.fields?.image?.fields?.file?.url));
			setImgList((imageList = img));
			setLoading(false);
		});
	}, []);

	return (
		<>
			<div className="announcementContainer">
				<Announcements pageTitle={"Restaurant Announcements"} />
			</div>

			<div className="topContent">
				<Left />
				<Right />
			</div>
			<div className="carouselContainer">
				<Carousel img={imageList} loading={loading} />
			</div>
		</>
	);
}
