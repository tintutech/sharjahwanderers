import "./firstSectionStyles.css";
import CTA from "../../components/CTA.jsx";
import { getAnnouncements } from "/src/contentful.js";

function Announcement() {
	getAnnouncements().then((e) => {
		let info;

		e.map((e) => {
			console.log(e);
			if (e.fields?.title === "facilities announcements") {
				info = e;
			}
		});
		console.log(info);
	});
	return (
		<div className="announcementCard">
			<p>
				<span>ANNOUNCEMENT</span>: Dear member/visitor, kindly note the
				following facilities will be unavailable from June 10th until further
				notice.
			</p>
			<p>We apologize for the inconvenience.</p>
			<p className="smallName">The Sharjah Wanderers Sports Club </p>
		</div>
	);
}

function Card() {
	return (
		<div className="facilitiesCard">
			<p>
				Our facilities are available for events hire. Contact us for info on how
				to host your next event!{" "}
			</p>
			<a onClick={CTA}>CONTACT EVENTS</a>
		</div>
	);
}

export default function firstSection() {
	return (
		<div className="firstSection">
			<Announcement />
			<div className="lower">
				<div className="left">
					<h3>FACILITIES</h3>
					<p>
						Play your favourite sports, train to be at your very best, or Host
						an event.
					</p>
					<div className="links">
						<a href="#">FACILITIES</a>
						<a href="#training">TRAINING</a>
					</div>
				</div>
				<Card />
			</div>
		</div>
	);
}
