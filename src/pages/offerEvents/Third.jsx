import { useEffect, useState } from "react";

import image1 from "/offerEvents/image1.jpg";

import FAQ from "./FAQ.jsx";
import CTA from "../../components/CTA.jsx";

import "./thirdStyles.css";

import { getPromotionalCards } from "../../contentful.js";

import { RenderPromoCards } from "../../components/RenderPromoCards";

let data = [
	{
		img: image1,
		title: "PROMO TITLE",
		description: [
			"Consectetur nostrum est eveniet rem necessitatibus",
			"Consectetur dolor at odio",
		],
	},
];

function MembershipCard() {
	return (
		<div className="membershipCard">
			<h3>Membership</h3>
			<p>
				Become part of the club, explore unique offers, and enjoy unparalleled
				access to our exclusive club.
			</p>
			<button onClick={CTA}>get membership</button>
		</div>
	);
}

// const RenderPromoCards = ({ promoCards, isLoading }) => {
// 	if (isLoading) return <p>Loading...</p>
// 	return (
// 		<>
// 			{promoCards?.map((card, index) => (
// 				<div key={index} className="card">
// 					<img src={card?.fields?.promoImage?.fields?.file?.url || card?.fields?.promoTitle} />
// 					<div className="lowerCard">
// 						<h3>{card?.fields?.promoTitle}</h3>
// 						<p><div dangerouslySetInnerHTML={{ __html: documentToHtmlString(card?.fields?.promoDescription) }} /></p>
// 						<a href={card?.link || '#'}>BOOK A TABLE</a>
// 					</div>
// 				</div>
// 			))}
// 		</>
// 	)
// }

export default function Third() {
	const [promoCards, setPromoCards] = useState([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		getPromotionalCards().then((data) => {
			setPromoCards(data);
			setLoading(false);
		});
	}, []);
	return (
		<div className="third">
			<h2>CURRENT OFFERS AND PROMOTIONS</h2>
			<RenderPromoCards promoCards={promoCards} isLoading={isLoading} />
			<div className="memFaq">
				<MembershipCard />
				<FAQ />
			</div>
		</div>
	);
}
