import "./firstSectionStyles.css";

export default function FirstSection() {
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
					<a
						href="https://www.fresha.com/a/wandies-hair-and-beauty-salon-sharjah-sharjah-wanderers-sports-club-bvv369l7"
						target="_blank"
					>
						BOOK APPOINTMENT
					</a>
					<p>Complimentary Barista Coffee with all appointments.</p>
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
