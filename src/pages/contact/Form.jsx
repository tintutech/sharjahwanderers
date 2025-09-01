import FormComponent from "/src/components/FormComponent.jsx";

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
			<FormComponent />
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
