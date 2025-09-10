import { useEffect, useState } from "react";
import image1 from "/offerEvents/image1.jpg";
import "./secondStyles.css";
import { getEventCards } from "/src/contentful.js";

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

function Cards({ content, loading }) {
	if (loading) return "loading...";
	let returnCards = content?.map((e, index) => {
		let date = new Date(e.fields?.eventDate);
		let image = 'url("https:' + e.fields?.eventBanner?.fields?.file?.url + '"';
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
							<p className="date">{date.getDay()}</p>
						</div>
						<p className="two">{e.fields?.eventName}</p>
					</div>
				</div>
				<div className="cardRight">
					<div className="content">
						{e.fields?.eventDescription?.content[0]?.content[0]?.value}
					</div>
				</div>
			</div>
		);
	});

	return <>{returnCards}</>;
}
let count = 0;

export default function Second() {
	console.log(++count);
	const [eventCards, setEventCards] = useState([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		getEventCards().then((e) => {
			setEventCards(e);
			setLoading(false);
		});
	});

	return (
		<div className="second">
			<div className="top">
				<h2>UPCOMING EVENTS</h2>
				<a href="#">ATTEND EVENT</a>
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
