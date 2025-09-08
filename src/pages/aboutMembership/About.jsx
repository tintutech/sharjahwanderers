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
					Today the club is home to the eponymous{" "}
					<a href="https://www.instagram.com/sharjahrugby/">
						Sharjah Wanderers Rugby team
					</a>{" "}
					and{" "}
					<a href="https://www.instagram.com/sharjah_gaels/">
						Sharjah Gaels GAA
					</a>
					.
				</p>
				<p>
					Sharjah Wanderers Sports Club has the only licensed bar at their
					Clubhouse, in Sharjah.
				</p>
				<a
					href="https://en.wikipedia.org/wiki/Sharjah_Wanderers"
					target="_blank"
				>
					WIKI
				</a>
			</div>
		</div>
	);
}
