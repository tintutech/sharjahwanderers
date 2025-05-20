import "./aboutStyles.css";

export default function About() {
	return (
		<div id="about">
			<h1>ABOUT THE CLUB</h1>
			<div className="rightContent">
				<h2>Our Story so far...</h2>
				<p>
					Founded in <span className="dateEm">1977</span>
					<br />
					The Sharjah Wanderers Sports club, was established by a group of
					expats who required a rugby pitch and community center.
				</p>
				<p>
					The name “Sharjah Wanderers”, derived from the initial use for Rugby
					games, and commonly used moniker by the Rugby teams in England who go
					by “Wanderers” when representing the team.
				</p>
				<p>Today, the club is home to the Sharjah Wanderers Rugby team.</p>
				<p>
					Sharjah Wanderers Sports Club, includes the only licensed wet bar
					facility at their Clubhouse, in Sharjah.
				</p>
				<a href="#">WIKI</a>
			</div>
		</div>
	);
}
