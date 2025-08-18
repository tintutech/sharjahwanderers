export default function Form() {
	return (
		<div className="contactForm">
			<div className="left">
				<div className="contactInfo">
					<h2>CONTACT</h2>
					<p>Leave us a note.</p>
					<p>We’ll get back to you as soon as we can.</p>
				</div>
				<div className="meanwhile">
					<p>Meanwhile, check out</p>
					<a href="/membership">
						MEMBERSHIP INFO <span>&#x2192;</span>
					</a>
					<a href="/facilities">
						Facilities <span>&#x2192;</span>
					</a>
					<a href="/events">
						Events <span>&#x2192;</span>
					</a>
				</div>
			</div>
			<form action="" method="POST">
				<input type="text" htmlFor="name" placeholder="NAME" />
				<input type="tel" htmlFor="phone" placeholder="PHONE" />
				<input type="mail" htmlFor="email" placeholder="E-MAIL" />
				<input type="text" htmlFor="subject" placeholder="SUBJECT" />
				<textarea
					htmlFor="noteMessage"
					placeholder="NOTE MESSAGE (200 WORDS)"
				></textarea>
				<button type="submit">SEND INQUIRY</button>
			</form>
		</div>
	);
}
