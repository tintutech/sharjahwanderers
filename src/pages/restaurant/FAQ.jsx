let info = [
	{
		id: 0,
		title: "Membership requirements",
		cardInfo:
			"Ipsum laudantium dolore commodi voluptas autem. Voluptates molestiae voluptatem corrupti at nisi placeat a ipsa optio. Libero distinctio ducimus sed voluptas reprehenderit Praesentium hic aut",
	},
	{
		id: 1,
		title: "Membership requirements",
		cardInfo:
			"Amet ab quidem quaerat repudiandae maxime Enim commodi molestias nobis sed unde. Adipisci pariatur tempora nobis sapiente iste reiciendis Culpa corporis suscipit neque odio dicta",
	},
	{
		id: 2,
		title: "Membership requirements",
		cardInfo:
			"Ipsum laudantium dolore commodi voluptas autem. Voluptates molestiae voluptatem corrupti at nisi placeat a ipsa optio. Libero distinctio ducimus sed voluptas reprehenderit Praesentium hic aut",
	},
	{
		id: 3,
		title: "Membership requirements",
		cardInfo:
			"Amet ab quidem quaerat repudiandae maxime Enim commodi molestias nobis sed unde. Adipisci pariatur tempora nobis sapiente iste reiciendis Culpa corporis suscipit neque odio dicta",
	},
];

import "./faqStyles.css";

function toggleClass(e) {
	let curr;
	if (
		e.target.nodeName.toLowerCase() == "button" ||
		e.target.nodeName.toLowerCase() === "h3"
	) {
		curr = e.target.parentNode;
	} else {
		curr = e.target;
	}
	let parentContainer =
		curr.parentNode.parentNode.querySelectorAll(".card .cardUpper");
	let contains;
	if (curr.classList.contains("open")) {
		contains = false;
	} else {
		contains = true;
	}
	let currButton = curr.querySelector("button");
	let currButtonText = currButton.textContent;

	parentContainer.forEach((e) => {
		e.classList.remove("open");
		e.querySelector("button").textContent = "+";
	});

	if (contains) {
		curr.classList.add("open");
	} else {
		curr.classList.remove("open");
	}

	if (currButtonText === "+") {
		currButton.textContent = "−";
	} else if (currButtonText === "−") {
		currButton.textContent = "+";
	}
}

function ReturnCards() {
	const cards = info.map((i) => {
		return (
			<div key={i.id} className="card">
				<div onClick={toggleClass} className="cardUpper">
					<h3>{i.title}</h3>
					<button>+</button>
				</div>
				<div className="cardInfo hiddenCard">
					<p>{i.cardInfo}</p>
				</div>
			</div>
		);
	});
	return (
		<div id="FAQ">
			<h2>Frequently asked questions</h2>
			<div className="cardContainer">{cards}</div>
		</div>
	);
}

export default function FAQ() {
	return (
		<>
			<ReturnCards />
		</>
	);
}
