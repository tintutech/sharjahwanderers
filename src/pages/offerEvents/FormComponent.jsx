import { post } from "aws-amplify/api";
import Swal from "sweetalert2";
// import "./formComponentStyles.css";
import "./Contact.css";
import { getEventCards } from "/src/contentful.js";

export default function FormComponent() {
	const onSubmit = async (event) => {
		event.preventDefault();
		document.querySelector("#fullWindow").close();
		function Events() {
			getEventCards().then((e) => console.log(e));
		}
		Events();

		try {
			const formData = new FormData(event.target);

			formData.append("access_key", "1dd37209-3de8-4801-9e7b-2230bcf556bd");
			//"38e7f6db-2af6-4ec2-905a-a846e6ff1d9f");

			const object = Object.fromEntries(formData);
			const json = JSON.stringify(object);
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: json,
			}).then((res) => res.json());
			// const response = await post({apiName: "sharjahWanderersAPI", path: "/sendEmail", options: {
			// 	body: {
			// 		toEmail: "tintucek@gmail.com",
			// 		subject: "Hello from React",
			// 		message: "This is a test email via AWS SES + Amplify",
			// 	},
			// }});
			if (res.success) {
				Swal.fire({
					title: "Success!",
					text: "Message sent successfully!",
					icon: "success",
				});
			}
		} catch (err) {
			console.error("Error sending email:", err);
			Swal.fire({
				title: "Failed!",
				text: "Message failed to send!",
				icon: "failed",
			});
		}
	};
	return (
		<section className="contactUS">
			<form onSubmit={onSubmit}>
				<div className="input-box">
					<select className="field" name="event" defaultValue={""} required>
						<option value="" disabled hidden>
							EVENT
						</option>
						<option value="General Inquiry">General Inquiry</option>
						<option value="Membership Inquiry">Membership Inquiry</option>
						<option value="Facilities Inquiry">Facilities Inquiry</option>
						<option value="Events & Venue Hire">Events & Venue Hire</option>
						<option value="Restaurant">Restaurant</option>
						<option value="Salon & Spa">Salon & Spa</option>
					</select>
				</div>
				<div className="input-box">
					<input
						type="number"
						className="field"
						placeholder="NO OF ATTENDEES."
						name="noOfAttendees"
						required
					/>
				</div>
				<div className="input-box">
					<input
						type="text"
						className="field"
						placeholder="NAME"
						name="name"
						required
					/>
				</div>
				<div className="input-box">
					<input
						type="tel"
						className="field"
						placeholder="NUMBER"
						name="phone"
						required
					/>
				</div>
				<div className="input-box">
					<input
						type="email"
						className="field"
						placeholder="E-MAIL"
						name="email"
						required
					/>
				</div>
				<div className="input-box">
					<textarea
						name="message"
						className="field mess"
						placeholder="MESSAGE"
						required
					></textarea>
				</div>
				<button type="submit">REQUEST FOR ADMISSION</button>
			</form>
		</section>
	);
}
