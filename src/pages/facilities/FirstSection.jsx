function Announcement() {}

function Card() {
	return (
		<div className="facilitiesCard">
			<p>
				Our facilities are available for events hire. Contact us for info on how
				to host your next event!{" "}
			</p>
			<a href="#">CONTACT EVENTS</a>
		</div>
	);
}

export default function firstSection() {
	return (
		<div className="firstSection">
			<div className="lower">
				<div className="left">
					<h3>FACILITIES</h3>
					<p>
						Play your favourite sports, train to be at your very best, or Host
						an event.
					</p>
					<div className="links">
						<a href="#">FACILITIES</a>
						<a href="#">TRAINING</a>
					</div>
				</div>
				<Card />
			</div>
		</div>
	);
}
