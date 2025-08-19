import ReactDOM from "react-dom/client";
import FormComponent from "./FormComponent.jsx";

function Dialog() {
	return (
		<div className="dialogCTA">
			<div>
				<h2>CONTACT</h2>
				<p></p>
			</div>
			<div>
				<p>Leave us a note.</p>
				<p>We’ll get back to you as soon as we can.</p>
			</div>
			<FormComponent />;
		</div>
	);
}

export default function CTA() {
	let dialogRoot = ReactDOM.createRoot(document.getElementById("fullWindow"));
	dialogRoot.render(<Dialog />);
	document.getElementById("fullWindow").showModal();
}
