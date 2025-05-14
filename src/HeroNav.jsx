export default function Nav() {
	return (
		<>
			<div className="navBar">
				<ul>
					<li>
						<a href="#">ABOUT</a>
					</li>
					<li>
						<a href="#">MEMBERSHIP</a>
					</li>
					<li>
						<a href="#">EVENTS & OFFERS</a>
					</li>
					<li>
						<img src="./images/logo.svg" />
					</li>
					<li>
						<a href="#">RESTAURANT</a>
					</li>
					<li>
						<a href="#">FACILITIES</a>
					</li>
					<li>
						<a href="#">SPA & SALON</a>
					</li>
				</ul>
			</div>

			<div className="heroSection">
				<div className="heroLeft">
					<h2>
						A private <span className="heroSpecial">Oasis</span>, for all
						wanderers in Sharjah.
					</h2>
					<p>
						Adipisicing maxime eligendi quod blanditiis consectetur animi?
						Exercitationem obcaecati quaerat saepe velit sapiente Quibusdam
						incidunt totam lorem enim facilis Dicta vero voluptas ut vitae quia
					</p>
					<a href="#">Become a member</a>
					<a href="#">Explore offers, or attend an event?</a>
				</div>
				<div className="heroRight"></div>
			</div>
		</>
	);
}
