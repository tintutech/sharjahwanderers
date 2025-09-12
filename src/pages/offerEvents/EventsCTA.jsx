import ReactDOM from "react-dom/client";
import FormComponent from "./FormComponent.jsx";
import "./eventsCTAStyles.css";

function Dialog({ eventNames }) {
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
			<FormComponent titles={eventNames} />
		</div>
	);
}

export default function CTA(eventNames) {
	let dialogRoot = ReactDOM.createRoot(document.getElementById("fullWindow"));
	dialogRoot.render(<Dialog eventNames={eventNames} />);
	let fullWindow = document.getElementById("fullWindow");
	fullWindow.showModal();
	document.querySelector("html").classList.add("stopScroll");
	fullWindow.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			location.reload();
		}
		e.stopPropagation();
	});
}
