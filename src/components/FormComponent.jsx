import { post } from "aws-amplify/api";
import Swal from 'sweetalert2';
// import "./formComponentStyles.css";
import "./Contact.css";

export default function FormComponent() {
	const onSubmit = async (event) => {
		event.preventDefault();

		try {
			const formData = new FormData(event.target);


			formData.append("access_key", "38e7f6db-2af6-4ec2-905a-a846e6ff1d9f");

			const object = Object.fromEntries(formData);
			const json = JSON.stringify(object);
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: json
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
					icon: "success"
				});
			}
		} catch (err) {
			console.error("Error sending email:", err);
			Swal.fire({
				title: "Failed!",
				text: "Message failed to send!",
				icon: "failed"
			});
		}
	};
	return (
		<section className="contactUS">
			<form onSubmit={onSubmit}>
				<h2>Contact Form</h2>
				<div className="input-box">
					<label>Full Name</label>
					<input type="text" className="field" placeholder='Enter your name' name='name' required />
				</div>
				<div className="input-box">
					<label>Mobile Number</label>
					<input type="text" className="field" placeholder='Enter your mobile' name='mobile' required />
				</div>
				<div className="input-box">
					<label>Email Address</label>
					<input type="email" className="field" placeholder='Enter your email' name='email' required />
				</div>
				<div className="input-box">
					<label>Inquiry Type</label>
					<select className="field" name='InquiryType'>
						<option value="General Inquiry">General Inquiry</option>
						<option value="Membership Inquiry">Membership Inquiry</option>
						<option value="Facilities Inquiry">Facilities Inquiry</option>
						<option value="Events & Venue Hire">Events & Venue Hire</option>
						<option value="Restaurant">Restaurant</option>
						<option value="Salon & Spa">Salon & Spa</option>
					</select>
				</div>
				<div className="input-box">
					<label>Your Message</label>
					<textarea name="message" className="field mess" placeholder='Enter your message' required></textarea>
				</div>
				<button type="submit">Send Message</button>
			</form>
		</section>
	);
}
