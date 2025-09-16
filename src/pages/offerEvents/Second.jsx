import { useEffect, useState } from "react";
import image1 from "/offerEvents/image1.jpg";
import "./secondStyles.css";
import { getEventCards } from "/src/contentful.js";
import CTA from "./EventsCTA.jsx";

// getEventCards().then((e) => console.log(e));

// image is testData?.fields?.eventBanner?.fields?.file?.url
// title is testData?.fields?.eventname
// desc is testData?.fields?.eventDescription?.content?[0].content?[0].value
// date is testData?[0].fields?.eventDate

const months = [
	"JAN",
	"FEB",
	"MAR",
	"APR",
	"MAY",
	"JUN",
	"JUL",
	"AUG",
	"SEP",
	"OCT",
	"NOV",
	"DEC",
];

/*
let data = [
	{
		img: testData[0]?.fields?.eventBanner?.fields?.file?.url,
		month: months[date.getMonth()],
		date: date.getDay(),
		title: testData[0]?.fields?.eventname,
		cardContent: [
			testData[0]?.fields?.eventDescription?content[0]?.content[0]?.value,
		],
	},
];
*/

function toggleView(e) {
	e.target.parentNode.parentNode.parentNode.classList.toggle("open");
}

let eventNames;

function Cards({ content, loading }) {
	eventNames = content.map((e) => e.fields?.eventName);
	if (loading) return "loading...";
	return (
		<>
			{content?.map((e, index) => {
				let date = new Date(e.fields?.date);
				let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
				let image = 'url("https:' + e.fields?.image?.fields?.file?.url + '"';
				return (
					<div key={index} className="card">
						<div
							style={{
								background: image,
							}}
							className="cardLeft"
						>
							<div>
								<div className="one">
									<p className="month">{months[date.getMonth()]}</p>
									<p className="date">{day}</p>
								</div>
								<p className="two">{e.fields?.name}</p>
							</div>
							<div className="cardRight">
								<div className="content">{e.fields?.description}</div>
							</div>
							<div className="closeDiv" onClick={(e) => toggleView(e)}>
								<div className="horizontal"></div>
								<div className="vertical"></div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default function Second() {
	const [eventCards, setEventCards] = useState([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		getEventCards().then((e) => {
			setEventCards(e);
			setLoading(false);
		});
	}, []);

	return (
		<div className="second">
			<div className="top">
				<h2>UPCOMING EVENTS</h2>
				<a onClick={() => CTA({ eventCards })}>ATTEND EVENT</a>
			</div>
			<div className="cardContainer">
				<Cards content={eventCards} loading={isLoading} />
			</div>
			<div className="innerCard">
				<p>Interested in hosting your event at one of our venues?</p>
				<a href="#">Get in touch.</a>
			</div>
		</div>
	);
}
