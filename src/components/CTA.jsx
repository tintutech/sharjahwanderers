import ReactDOM from "react-dom/client";

function Dialog() {
	return <p>Hello</p>;
}

export default function CTA() {
	let dialogRoot = ReactDOM.createRoot(document.getElementById("fullWindow"));
	dialogRoot.render(<Dialog />);
	document.getElementById("fullWindow").showModal();
}
