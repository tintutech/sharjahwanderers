import ReactDOM from "react-dom/client";
import FormComponent from "./FormComponent.jsx";
import "./CTAStyles.css";

function Dialog() {
	return (
		<div className="dialogCTA">
			<div className="top">
				<h2>CONTACT</h2>
				<button
					onClick={() => document.querySelector("#fullWindow").close()}
					className="close"
				>
					<img src="/multiply.svg" />
				</button>
			</div>
			<div className="lower">
				<p>Leave us a note.</p>
				<p>We’ll get back to you as soon as we can.</p>
			</div>
			<FormComponent />
			<p>Sharjah Wanderers </p>
			<p>Sports Club</p>
		</div>
	);
}

export default function CTA() {
	let dialogRoot = ReactDOM.createRoot(document.getElementById("fullWindow"));
	dialogRoot.render(<Dialog />);
	document.getElementById("fullWindow").showModal();
}
