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
	if (e.target.nodeName.toLowerCase() == "button") {
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
		console.log(e);
		e.classList.remove("open");
		e.querySelector("button").textContent = "+";
	});
	if (contains) curr.classList.toggle("open");
	console.log(currButton);
	if (currButtonText === "+") {
		currButton.textContent = "−";
	} else if (currButtontext === "−") {
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
			{cards}
		</div>
	);
}

/*
import "./faqRadioStyles.css";

function ReturnRadioCards() {
	const cards = info.map((i) => {
		return (
			<li key={i.id}>
				<div className="card">
					<label htmlFor={"check" + i.id} className="cardUpper">
						{i.title}
						<span>+</span>
					</label>
					<input name="accordion" id={"check" + i.id} type="radio" />
					<p className="cardInfo hiddenCard">{i.cardInfo}</p>
				</div>
			</li>
		);
	});
	return (
		<div id="FAQ">
			<h2>Frequently asked questions radio buttons</h2>
			<ul>{cards}</ul>
		</div>
	);
}

function ReturnCheckboxCards() {
	const cards = info.map((i) => {
		return (
			<li key={i.id}>
				<div className="card">
					<label htmlFor={"checkbox" + i.id} className="cardUpper">
						{i.title}
						<span>+</span>
					</label>
					<input name="accordion" id={"checkbox" + i.id} type="checkbox" />
					<p className="cardInfo hiddenCard">{i.cardInfo}</p>
				</div>
			</li>
		);
	});
	return (
		<div id="FAQ">
			<h2>Frequently asked questions checkbox</h2>
			<ul>{cards}</ul>
		</div>
	);
}
*/

export default function FAQ() {
	return (
		<>
			<ReturnCards />
		</>
	);
}
