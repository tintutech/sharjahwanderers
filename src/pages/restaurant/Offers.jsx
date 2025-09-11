/*import image1 from "/offers/image1.png";
import image2 from "/offers/image2.png";
import image3 from "/offers/image3.png";
import image4 from "/offers/image4.png";
import image5 from "/offers/image5.png";
import image6 from "/offers/image6.png";
*/
import { useState, useEffect } from "react";
import { getRestaurantOffers } from "/src/contentful.js";

import "./offerStyles.css";

/*
let card1 = {
	url: image1,
	title: "SUNDAY BRUNCH OFFERS",
	description:
		"Lorriosam maxime reprehenderit explicabo vitae at impedit Numquam nobis in",
	timing: ["SUNDAY", "9:00 AM - 2:00 PM"],
};

let card2 = {
	url: image2,
	title: "BUSINESS LUNCH OFFER AED 45/PERSON",
	description:
		"Lororiosam maxime reprehenderit explicabo vitae at impedit Numquam nobis in",
	timing: ["MONDAY - FRIDAY", "11:00 AM - 4:00 PM"],
};

let card3 = {
	url: image3,
	title: "HAPPY HOUR",
	description:
		"Lorue Laboriosam maxime reprehenderit explicabo vitae at impedit Numquam nobis in",
	timing: ["MONDAY - FRIDAY", "5:00 PM - 8:00 PM"],
};

let card4 = {
	url: image4,
	title: "SUNDAY BRUNCH OFFERS",
	description:
		"Lorosam maxime reprehenderit explicabo vitae at impedit Numquam nobis in",
	timing: ["SUNDAY", "9:00 AM - 2:00 PM"],
};

let card5 = {
	url: image5,
	title: "SUNDAY BRUNCH OFFERS",
	description:
		"Lorriosam maxime reprehenderit explicabo vitae at impedit Numquam nobis in",
	timing: ["SUNDAY", "9:00 AM - 2:00 PM"],
};

let card6 = {
	url: image6,
	title: "SUNDAY BRUNCH OFFERS",
	description:
		"Lorosam maxime reprehenderit explicabo vitae at impedit Numquam nobis in",
	timing: ["SUNDAY", "9:00 AM - 2:00 PM"],
};

let cards = [card1, card2, card3, card4, card5, card6];

*/

function ReturnCard({ data, loading }) {
	if (loading) return <p>Loading...</p>;
	return (
		<>
			{data.map((e, index) => {
				return (
					<div key={index} className="card">
						<img
							src={e.fields?.image?.fields?.file?.url}
							alt={e.fields?.image?.fields?.title}
						/>
						<div className="mainDiv">
							<h3>{e.fields?.title}</h3>
							<div className="lowerDiv">
								<p className="desc">{e.fields?.desc}</p>
								<div>
									<p>{e.fields?.days}</p>
									<p>{e.fields?.timing}</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

function ReturnCards({ e }) {
	return (
		<div className="card">
			<img src={e.url} />
			<div>
				<h3>{e.title}</h3>
				<div className="lowerDiv">
					<p>{e.description}</p>
					<div>
						<p>{e.timing[0]}</p>
						<p>{e.timing[1]}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
/*
				<ReturnCards e={card1} />
				<ReturnCards e={card2} />
				<ReturnCards e={card3} />
				<ReturnCards e={card4} />
				<ReturnCards e={card5} />
				<ReturnCards e={card6} />
				*/

export default function Offers() {
	const [currentData, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		getRestaurantOffers().then((e) => {
			setData(e);
			setLoading(false);
		});
	}, []);

	return (
		<div id="restaurantOffers" className="offers">
			<h2>OFFERS</h2>
			<div className="offerContainer">
				<ReturnCard data={currentData} loading={isLoading} />
			</div>
		</div>
	);
}
