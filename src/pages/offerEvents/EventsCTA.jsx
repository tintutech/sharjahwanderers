import ReactDOM from "react-dom/client";
import FormComponent from "./FormComponent.jsx";
import "./eventsCTAStyles.css";

function Dialog() {
	return (
		<div className="eventsCTA">
			<div className="top">
				<h2>EVENT INQUIRY FORM</h2>
				<button
					onClick={() => {
						document.querySelector("#fullWindow").close();
						document.querySelector("html").classList.remove("stopScroll");
					}}
					className="close"
				>
					<img src="/multiply.svg" />
				</button>
			</div>
			<FormComponent />
		</div>
	);
}

export default function CTA() {
	let dialogRoot = ReactDOM.createRoot(document.getElementById("fullWindow"));
	dialogRoot.render(<Dialog />);
	document.getElementById("fullWindow").showModal();
	document.querySelector("html").classList.add("stopScroll");
}
