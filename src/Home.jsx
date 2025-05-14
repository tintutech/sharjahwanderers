function Nav() {
	return (
		<div className="navBar">
			<ul>
				<li>one</li>
				<li>two</li>
				<li>three</li>
				<li>four</li>
				<li>five</li>
				<li>six</li>
			</ul>
		</div>
	);
}

function Hero() {
	return (
		<div className="heroSection">
			<div className="heroLeft">
				<h2>hero</h2>
				<p>words</p>
				<a href="#">first</a>
				<a href="#">second</a>
			</div>
			<div className="heroRight"></div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="heroNav">
			<Nav />
			<Hero />
		</div>
	);
}
