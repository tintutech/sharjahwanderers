import "./firstStyles.css";

export default function First() {
	return (
		<div className="first">
			<div className="left">
				<h2>EVENTS</h2>
				<p>Our clubhouse and sports facilities host events frequently.</p>
				<div className="bottomLinks">
					<a href="#">EVENTS</a>
					<a href="#">OFFERS</a>
				</div>
			</div>
			<div className="innerCard">
				<p>Interested in hosting your event at one of our venues?</p>
				<a href="#">Get in touch.</a>
			</div>
		</div>
	);
}
