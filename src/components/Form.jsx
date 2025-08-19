export default function Form() {
	return (
		<div className="contactForm">
			<div className="left">
				<div className="contactInfo">
					<h2>CONTACT</h2>
					<p>Leave us a note.</p>
					<p>We’ll get back to you as soon as we can.</p>
				</div>
				<div className="info meanwhile">
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
				<input type="text" name="name" placeholder="NAME" />
				<input type="tel" name="phone" placeholder="PHONE" />
				<input type="mail" name="email" placeholder="E-MAIL" />
				<input type="text" name="subject" placeholder="SUBJECT" />
				<select name="options">
					<option value="">INQUIRY TYPE</option>
					<option value="option1">option 1</option>
					<option value="option2">option 2</option>
					<option value="option3">option 3</option>
					<option value="option4">option 4</option>
					<option value="option5">option 5</option>
				</select>
				<textarea
					name="noteMessage"
					placeholder="NOTE MESSAGE (200 WORDS)"
				></textarea>
				<button type="submit">SEND INQUIRY</button>
			</form>
			<div className="info lowerMeanwhile">
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
	);
}
