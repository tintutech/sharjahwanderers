export default function Form() {
	return (
		<div className="contantForm">
			<div className="left">
				<div className="contanctInfo">
					<h2>CONTACT</h2>
					<p>Leave us a note.</p>
					<p>We’ll get back to you as soon as we can.</p>
				</div>
				<div className="meanwhile">
					<p>Meanwhile, check out</p>
					<a href="/membership">MEMBERSHIP INFO &#x2192;</a>
					<a href="/facilities">Facilities &#x2192;</a>
					<a href="/events">Events &#x2192;</a>
				</div>
			</div>
			<form action="" method="POST" className="form">
				<input type="text" for="name" placeholder="NAME" />
				<input type="tel" for="phone" placeholder="PHONE" />
				<input type="mail" for="email" placeholder="E-MAIL" />
				<input type="text" for="subject" placeholder="SUBJECT" />
				<textarea for="noteMessage">NOTE MESSAGE (200 WORDS)</textarea>
				<button type="submit">SEND INQUIRY</button>
			</form>
		</div>
	);
}
